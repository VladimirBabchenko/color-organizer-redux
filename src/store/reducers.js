import C from "../constants";

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                rating: 0,
                timestamp: action.timestamp
            }
        case C.RATE_COLOR:
            return state.id !== action.id ?
                state :
                Object.assign({}, state, { rating: action.rating })
        default:
            return state;
    }
};

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case C.REMOVE_COLOR:
            return state.filter(
                c => c.id !== action.id
            )
        case C.RATE_COLOR:
            return state.map(
                c => color(c, action)
            )
        default:
            return state;
    }
};

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
}