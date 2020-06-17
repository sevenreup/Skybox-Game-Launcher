import React, { PureComponent } from "react";
import { withRouter, matchPath } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { faGhost, faChevronCircleLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.scss'

class footer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            gamePage: false
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
        const { gamePage } = this.state;
        return (
            <Navbar expand="lg" fixed="bottom" className="footer">
                <Navbar.Collapse className="justify-content-center">
                    {
                        gamePage &&
                        <div className="bottom-holder">
                            <span className="play">
                                <span><FontAwesomeIcon icon={faPlay} />Play</span>
                            </span>
                        </div>
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export const Footer = withRouter(footer)