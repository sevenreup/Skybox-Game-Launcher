import React, { PureComponent } from "react";
import { withRouter, matchPath } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.scss'
import { FooterStyled } from "./footer.styled";
import { GamePlayButtonMain, GameiconAltButton } from "../buttons/playbutton";
import { connect } from "react-redux";
import { GameSettings } from "../gamesettings/gamesettings";

class footer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            gamePage: false,
            showSettings: false
        }
    }
    componentDidMount() {
        this.checkIfGamePage(this.props.location.pathname);
        this.props.history.listen((location, action) => {
            this.checkIfGamePage(location.pathname);
        });
    }
    checkIfGamePage(path) {
        const result = matchPath(path, '/game/:id');
        if (result != null)
            this.setState({ gamePage: result.isExact });
        else
            this.setState({ gamePage: false });
    }

    render() {
        const { gamePage, showSettings } = this.state;
        const { activeGameColors } = this.props.color;
        return (
            <FooterStyled>
                <Navbar expand="lg" fixed="bottom" className="footer">
                    <Navbar.Collapse className="justify-content-center">
                        {
                            gamePage && (
                                <div className="bottom-holder">
                                    <GamePlayButtonMain />
                                    <GameiconAltButton onClick={() => this.setState({ showSettings: true})} icon={faPencilAlt} color={activeGameColors} className="edit-game"/>
                                    <GameSettings show={showSettings} onHide={() => this.setState({ showSettings: false})}/>
                                </div>
                            )
                        }
                    </Navbar.Collapse>
                </Navbar>
            </FooterStyled>
        )
    }
}
const mapStateToProp = state => { return { color: state.color } }
export const Footer = connect(mapStateToProp, null)(withRouter(footer))