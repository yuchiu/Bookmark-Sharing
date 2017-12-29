import constants from '../constants'

let initialState = {
    allBookmarks: [],
    selectedUserBookmark: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_BOOKMARKS:
            newState['allBookmarks'] = action.payload
            return newState
            break;
        case constants.FETCH_USER_BOOKMARK:
            newState['selectedUserBookmark'] = action.payload
            console.log(JSON.stringify(newState['selectedUserBookmark']))
            return newState
            break;
        default:
            return state
    }
}