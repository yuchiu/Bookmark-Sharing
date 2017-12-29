import constants from '../constants'

let initialState = {
    allBookmarks: [],
    selectedUserBookmarks: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_BOOKMARKS:
            newState['allBookmarks'] = action.payload
            return newState
            break;
        case constants.FETCH_USER_BOOKMARK:
            newState['selectedUserBookmarks'] = action.payload
            return newState
            break;
        case constants.CREATE_BOOKMARK:
            let newAllBookmarks = Object.assign([], state.allBookmarks)
            newAllBookmarks.push(action.payload)
            newState['allBookmarks'] = newAllBookmarks
            if (newState['selectedUserBookmarks'] && newState['selectedUserBookmarks'].length) {
                let newselectedUserBookmarks = Object.assign([], state.selectedUserBookmarks)
                newselectedUserBookmarks.push(action.payload)
                newState['selectedUserBookmarks'] = newselectedUserBookmarks
            }
            return newState
            break;
        default:
            return state
    }
}