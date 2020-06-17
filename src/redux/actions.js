import { ACTIVE_GAME_PRIMARY_COLOR } from "./actiontypes"

export const changeActivePrimary = color => ({
    type: ACTIVE_GAME_PRIMARY_COLOR,
    payload: color
})