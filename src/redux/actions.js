import { ACTIVE_GAME_PRIMARY_COLOR, CHANGE_THEME } from "./actiontypes"

export const changeActivePrimary = color => ({
    type: ACTIVE_GAME_PRIMARY_COLOR,
    payload: color
})

export const changeTheme = theme => ({
    type: CHANGE_THEME,
    payload: theme
})