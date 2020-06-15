import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sidebar.scss'
import { Navbar, Form, FormControl, Nav, ListGroup } from 'react-bootstrap'

class sidebar extends PureComponent {
    games = [
        { name: "one", img: "image/image1.jpg", link: "/game/1" },
        { name: "two", img: "image/image2.jpg", link: "/game/2" },
        { name: "three", img: "image/image3.jpg", link: "/game/3" },
        { name: "four", img: "image/image4.jpg", link: "/game/4" },
    ]
    render() {
        return (
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <Nav.Item>
                    <Nav.Link to="/">
                        <div className="icon-btn">
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="all">
                    <Nav.Link to="/all">
                        <div className="icon-btn">
                            <FontAwesomeIcon icon={faGamepad} />
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="pinnedGames">
                    <ListGroup variant="flush">
                        {
                            this.games.map(game => {
                                return (
                                    <ListGroup.Item key={game.name} className="pin-game">
                                        <Link to={game.link}>
                                            <img src={game.img} />
                                        </Link>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Nav.Item>

            </Nav>
        )
    }
}

export const SideBar = withRouter(sidebar)