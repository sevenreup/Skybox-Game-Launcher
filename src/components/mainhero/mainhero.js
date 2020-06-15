import React,{ PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './mainhero.scss'

class hero extends PureComponent {
    render() {
        return (
            <div>hero</div>
        )
    }
}

export const MainHero = withRouter(hero)