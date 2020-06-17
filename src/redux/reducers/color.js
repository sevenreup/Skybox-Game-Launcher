import { ACTIVE_GAME_PRIMARY_COLOR, CHANGE_THEME } from "../actiontypes"
import { lightTheme } from "../../theme/theme";

const initialState = {
    activeGameColors: {},
    theme: lightTheme
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ACTIVE_GAME_PRIMARY_COLOR:
            const data = action.payload;
            return {
                ...state,
                activeGameColors: data
            }
        case CHANGE_THEME:
        return {
            ...state,
            theme: action.payload
        }
        default:
            return state;
    }
}