import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './gamelist.scss'
import { NormalGridStyled } from "./gamelist.styled";
import { GamePlayButtonMain } from "../buttons/playbutton";

class gamelist extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <div className="gamelist">
                <h3>{title}</h3>
                <div className="game-grid">
                    {this.renderType()}
                </div>
            </div>
        )
    }

    renderType() {
        const { games, type } = this.props;
        return games.map(game => {
            switch (type) {
                case 'circle':
                    return (
                        <NormalGridStyled key={game.link}>
                            <Link to={{ pathname: game.link, state: { game: game } }} className="game-item">
                                <div className="game-circle" >
                                    <div className="game-image" style={{ background: `url(${game.img}) no-repeat` }}>
                                        <div className="game-caption">
                                            <p>{game.name}</p>
                                            <div className="play-btn">
                                                <GamePlayButtonMain />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </NormalGridStyled>
                    )
                default:
                    return (

                        <div className="game-normal">other</div>
                    )
            }
        })

    }
}

export const GameList = withRouter(gamelist)