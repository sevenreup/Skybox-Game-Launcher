import React,{ PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './footer.scss'

class footer extends PureComponent {
    render() {
        return (
            <Navbar expand="lg" fixed="bottom" className="footer">
                <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                            stuff
                        </Nav.Item>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export const Footer = withRouter(footer)