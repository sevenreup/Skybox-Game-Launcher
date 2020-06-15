import React, { Component, PureComponent } from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap'
import { faGhost, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'
import { withRouter, matchPath, Link } from 'react-router-dom';

const Styles = styled.div`
  .navbar { background-color: transparent; z-index: 100; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class NavBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            home: false
        }
    }
    componentWillMount() {
        this.onRouteChanged('/');
    }
    componentDidMount() {

        this.props.history.listen((location, action) => {
            this.onRouteChanged(location.pathname)
        });

    }
    onRouteChanged(path) {
        const result = matchPath(path, '/');
        this.setState({ home: !result.isExact })
    }

    goBack() {
        this.props.history.goBack();
    }
    render() {
        const { home } = this.state;
        return (
            <Styles>
                <Navbar expand="lg" fixed="top" className="appbar">
                    {
                        home && (
                            <Navbar.Brand>
                                <FontAwesomeIcon icon={faChevronCircleLeft} />
                            </Navbar.Brand>
                        )
                    }
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                            <Link>
                                <FontAwesomeIcon icon={faGhost} />
                            </Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

export const NavigationBar = withRouter(NavBar);
