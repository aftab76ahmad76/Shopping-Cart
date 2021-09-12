export const addProduct = (item) => {
    return dispatch => {
        dispatch({
            type: 'addProduct',
            payload: item 
        })
    }
}

export const doIncrement = (item) => {
    return dispatch => {
        dispatch({
            type: 'doIncrement',
            payload: item 
        })
    }
}

export const doDecrement = (item) => {
    return dispatch => {
        dispatch({
            type: 'doDecrement',
            payload: item 
        })
    }
}

export const removeAll = () => {
    return dispatch => {
        dispatch({
            type: 'removeAll',
        })
    }
}

export const remove = (item) => {
    return dispatch => {
        dispatch({
            type: 'remove',
            payload: item 
        })
    }
}
