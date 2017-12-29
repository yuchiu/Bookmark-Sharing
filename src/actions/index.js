import constants from '../constants'

let actions = {
    fetchProfiles: (profiles) => {
        return (dispatch) => {
                dispatch({
                    type: constants.FETCH_PROFILES,
                    payload: profiles
                })
        }
    },
    selectProfile:(profile) => {
        return (dispatch) => {
                dispatch({
                    type: constants.SELECT_PROFILE,
                    payload: profile
                })
        }
    },
    fetchUserBookmark: (userBookmark)=>{
        return (dispatch) => {
                dispatch({
                    type: constants.FETCH_USER_BOOKMARK,
                    payload: userBookmark
                })
        }
    },
    createBookmark:(bookmark)=>{
        return (dispatch) => {
                dispatch({
                    type: constants.CREATE_BOOKMARK,
                    payload: bookmark
                })
        }
    },
    fetchBookmarks: (bookmarks) => {
        return (dispatch) => {
                dispatch({
                    type: constants.FETCH_BOOKMARKS,
                    payload: bookmarks
                })
        }
    },
    createProfile :(profile) => {
        return (dispatch) => {
                dispatch({
                    type: constants.CREATE_PROFILE,
                    payload: profile
                })
        }
    },
    fetchCurrentUser: (profile) => {
        return (dispatch) => {
                dispatch({
                    type: constants.FETCH_CURRENTUSER,
                    payload: profile
                })
        }
    },
    logoutUser: () => {
        return (dispatch) => {
                dispatch({
                    type: constants.LOGOUT_USER,
                    payload: null
                })
        }
    },
}

export default actions;