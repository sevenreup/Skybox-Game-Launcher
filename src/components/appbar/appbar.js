import React, { Component, PureComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { faGhost, faChevronCircleLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './appbar.scss';
import { changeTheme } from '../../redux/actions';
import { withRouter, matchPath, Link } from 'react-router-dom';
import { GameIconButton } from '../buttons/playbutton';
import { connect } from 'react-redux';
import { lightTheme, darkTheme } from '../../theme/theme';
import { EndBarSectionStyled } from './appbar.styled';


class NavBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            gamePage: false
        }
    }
    componentDidMount() {
        this.onRouteChanged(this.props.location.pathname);
        this.checkIfGamePage(this.props.location.pathname);
        this.props.history.listen((location, action) => {
            this.onRouteChanged(location.pathname)
            this.checkIfGamePage(location.pathname);
        });
    }
    onRouteChanged(path) {
        const result = matchPath(path, '/');
        this.setState({ home: !result.isExact })
    }

    checkIfGamePage(path) {
        const result = matchPath(path, '/game/:id');
        if (result != null)
            this.setState({ gamePage: result.isExact });
        else
            this.setState({ gamePage: false });
    }

    goBack() {
        this.props.history.goBack();
    }

    toggleTheme() {
        const { theme } = this.props.color;

        if (theme === lightTheme) {
            this.props.changeTheme(darkTheme)
        } else {
            this.props.changeTheme(lightTheme)
        }
    }

    render() {
        const { home, gamePage } = this.state;
        const { activeGameColors } = this.props.color;
        return (
            <Navbar expand="lg" fixed="top" className="appbar">
                <div className="appbar-content">
                    <div className="appbar-start">
                        {
                            home && (
                                <Navbar.Brand onClick={this.goBack.bind(this)}>
                                    <GameIconButton icon={faChevronCircleLeft} color={activeGameColors.primary} />
                                </Navbar.Brand>
                            )
                        }
                    </div>
                    <div className="appbar-center">
                        {
                            gamePage && (
                                <div className="game-controls">
                                    {/* <span className="play">
                                        <span><FontAwesomeIcon icon={faPlay} /> Play</span>
                                    </span> */}
                                </div>
                            )
                        }
                    </div>
                    <EndBarSectionStyled className="appbar-end">
                        <div className="themer">
                            <div onClick={this.toggleTheme.bind(this)}>change theme</div>
                        </div>
                        <Link to="/settings">
                            <GameIconButton className="settings" icon={faGhost} color={activeGameColors.primary} />
                        </Link>
                    </EndBarSectionStyled>
                </div>
            </Navbar>
        )
    }
}

const mapStateToProp = state => { return { color: state.color } }

export const NavigationBar = connect(mapStateToProp, { changeTheme })(withRouter(NavBar));
