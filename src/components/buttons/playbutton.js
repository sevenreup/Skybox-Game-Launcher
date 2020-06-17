import React from 'react'
import { Gameicon, Pinnedicon } from "./button.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function GameIconButton(props) {
    const { icon, color , className } = props
    return (
        <Gameicon color={color} className={`icon-btn btn-xl ${className}`}>
            <FontAwesomeIcon icon={icon} />
        </Gameicon>
    )
}

function GamePinnedButton(props) {
    const { shadow, game} = props;

    return (
        <Pinnedicon shadow={shadow}>
            <ListGroup.Item className="pin-game">
                <Link to={{ pathname: game.link, state: { game: game } }}>
                    <span><img src={game.img} /></span>
                </Link>
            </ListGroup.Item>
        </Pinnedicon>
    )
}

export { GameIconButton, GamePinnedButton }