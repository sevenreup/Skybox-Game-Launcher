import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sidebar.scss'
import { connect } from "react-redux";
import { Nav, ListGroup } from 'react-bootstrap'
import { GameIconButton, GamePinnedButton } from '../buttons/playbutton';

class sidebar extends PureComponent {
    games = [
        { name: "one", img: "image/image1.jpg", link: "/game/1" },
        { name: "two", img: "image/image2.jpg", link: "/game/2" },
        { name: "three", img: "image/image3.jpg", link: "/game/3" },
        { name: "four", img: "image/image4.jpg", link: "/game/4" },
    ]
    render() {
        const { activeGameColors } = this.props.color;
        return (
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <Nav.Item>
                    <Link to="/">
                        <GameIconButton icon={faHome} color={activeGameColors.primary} />
                    </Link>
                </Nav.Item>
                <Nav.Item className="all">
                    <Link to="/all">
                        <GameIconButton icon={faGamepad} color={activeGameColors.primary} />
                    </Link>
                </Nav.Item>
                <Nav.Item className="pinnedGames">
                    <ListGroup variant="flush">
                        {
                            this.games.map(game => {
                                return (
                                    <GamePinnedButton  key={game.name} game={game} shadow={activeGameColors.shadow}/>
                                )
                            })
                        }
                    </ListGroup>
                </Nav.Item>

            </Nav>
        )
    }
}
const mapStateToProp = state => { return { color: state.color } }

export const SideBar = connect(mapStateToProp, null)(withRouter(sidebar))