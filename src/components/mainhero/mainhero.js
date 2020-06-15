import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './mainhero.scss'

class hero extends PureComponent {
    render() {
        return (
            <div className="header">
                <div className="wallpaper" />
                <div className="header-section">
                    <div className="holder">
                        <span className="pill">Last Played</span>
                        <h3 className="hero-title">League Of Legends</h3>
                        <Link className="play">
                            <span><FontAwesomeIcon icon={faPlay}/> Play</span>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export const MainHero = withRouter(hero)