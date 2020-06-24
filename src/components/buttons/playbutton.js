import React from 'react'
import { Gameicon, Pinnedicon, PlayButton, ToggleStyled } from "./button.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, ListGroup } from 'react-bootstrap'
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { faPlay, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { lightTheme } from '../../theme/theme';

function GameIconButton(props) {
    const { icon, color, className } = props
    return (
        <Gameicon color={color} className={`icon-btn btn-xl ${className}`}>
            <FontAwesomeIcon icon={icon} />
        </Gameicon>
    )
}

function GameiconAltButton(props) {
    const { icon, color, className } = props
    return (
        <Gameicon color={color} className={`icon-btn btn-xl ${className}`}>
            <FontAwesomeIcon icon={icon} />
        </Gameicon>
    )
}

function GamePinnedButton(props) {
    const { shadow, game } = props;

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

function GamePlayButtonMain(props) {
    return (
        <PlayButton className="play">
            <span><FontAwesomeIcon icon={faPlay} /> Play</span>
        </PlayButton>
    )
}

function ThemeToggle({ theme, toggleTheme }) {
    const isLight = lightTheme;
    return (
        <ToggleStyled onClick={toggleTheme}>
            <FontAwesomeIcon className="light" icon={faSun} />
            <FontAwesomeIcon className="dark" icon={faMoon} />
        </ToggleStyled>
    )
}

ThemeToggle.propTypes = {
    theme: object.isRequired,
    toggleTheme: func.isRequired
}

export { GameIconButton, GameiconAltButton,GamePinnedButton, GamePlayButtonMain, ThemeToggle }