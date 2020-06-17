import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './fullhero.scss'
import { usePalette } from 'react-palette';

export function FullHero(props) {
    const { game } = props;
    const { data, loading, error } = usePalette('/' + game.img)

    return (
        <div className="full-container">
            <div className="wallpaper" style={{ background: `url(/${game.img})` }}></div>
            <div className="overlay" style={{ boxShadow: !loading ? `inset 0px -500px 120px ${data.vibrant}` : `inset 0px -500px 120px rgba(41, 177, 231, 0.9) ` }}></div>
        </div>
    )
}