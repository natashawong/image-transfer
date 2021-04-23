export function setStyle(data){
    return {
        type: 'SET_STYLE',
        payload: {data}
    }
};

export function setResult(data) {
    return {
        type: "SET_RESULT",
        payload: {data}
    }
}

export function setOriginal(data) {
    return {
        type: "SET_ORIGINAL",
        payload: {data}
    }
}