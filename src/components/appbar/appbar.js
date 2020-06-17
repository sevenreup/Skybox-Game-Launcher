import React, { Component, PureComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { faGhost, faChevronCircleLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './appbar.scss';
import styled from 'styled-components'
import { withRouter, matchPath, Link } from 'react-router-dom';
import { GameIconButton } from '../buttons/playbutton';
import { connect } from 'react-redux';


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
    render() {
        const { home, gamePage } = this.state;
        const {activeGameColors} = this.props.color;
        return (
            <Navbar expand="lg" fixed="top" className="appbar">
                <div className="appbar-content">
                    <div className="appbar-start">
                        {
                            home && (
                                <Navbar.Brand onClick={this.goBack.bind(this)}>
                                    <GameIconButton icon={faChevronCircleLeft} color={activeGameColors.primary}/>
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
                    <div className="appbar-end">
                        <Link to="/settings">
                            <GameIconButton icon={faGhost} color={activeGameColors.primary}/>
                        </Link>
                    </div>
                </div>
            </Navbar>
        )
    }
}

const mapStateToProp = state => { return { color: state.color } }

export const NavigationBar = connect(mapStateToProp, null)(withRouter(NavBar));
