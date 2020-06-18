import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './mainhero.scss'
import MainheroStyled from "./mainhero.styled";
import { GamePlayButtonMain } from "../buttons/playbutton";

class hero extends PureComponent {
    render() {
        return (
            <MainheroStyled className="header" wallpaper={`/image/image2.jpg`}>
                <div className="wallpaper" />
                <div className="header-section">
                    <div className="holder">
                        <span className="pill">Last Played</span>
                        <h3 className="hero-title">League Of Legends</h3>
                        <GamePlayButtonMain />
                    </div>

                </div>
            </MainheroStyled>
        )
    }
}

export const MainHero = withRouter(hero)