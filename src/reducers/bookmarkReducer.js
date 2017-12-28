import constants from '../constants'

let initialState = {
    bookmarks: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_BOOKMARKS:
            newState['bookmarks'] = action.payload
            return newState
            break;
        default:
            return state
    }
}