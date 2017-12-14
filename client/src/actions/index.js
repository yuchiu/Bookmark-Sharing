import constants from '../constants'

let actions = {
    fetchProfiles: (profile) => {
        return (dispatch) => {
            console.log('actions')
                dispatch({
                    type: constants.FETCH_PROFILES,
                    payload: profile
                })
        }
    }
}

export default actions;