const initialState = {
    selectedStyle: "",
    result: "",
    original: "",
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_STYLE": {
            return {
                ...state,
                selectedStyle: action.payload,
            }
        }
        case "SET_RESULT": {
            return {
                ...state,
                result: action.payload,
            }
        }
        case "SET_ORIGINAL": {
            return {
                ...state,
                original: action.payload,
            }
        }
        default:
            return state;
    }
}