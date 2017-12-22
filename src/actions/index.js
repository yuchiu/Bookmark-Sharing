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