import { ACTIVE_GAME_PRIMARY_COLOR } from "../actiontypes"

const initialState = {
    activeGameColors: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ACTIVE_GAME_PRIMARY_COLOR:
            const data = action.payload;
            return {
                ...state,
                activeGameColors: data
            }
        default:
            return state;
    }
}