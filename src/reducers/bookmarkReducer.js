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
        case constants.CREATE_BOOKMARK:
            let newAllBookmarks = Object.assign([], state.allBookmarks)
            newAllBookmarks.push(action.payload)
            newState['allBookmarks'] = newAllBookmarks
            if (newState['selectedUserBookmark'] && newState['selectedUserBookmark'].length) {
                let newselectedUserBookmark = Object.assign([], state.selectedUserBookmark)
                newselectedUserBookmark.push(action.payload)
                newState['selectedUserBookmark'] = newselectedUserBookmark
            }
            return newState
            break;
        default:
            return state
    }
}