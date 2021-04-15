const initialState = {
    selectedStyle: "",
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_STYLE": {
            return {
                ...state,
                selectedStyle: action.payload,
            }
        }
        default:
            return state;
    }
}