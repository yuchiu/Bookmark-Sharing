import constants from '../constants'

let initialState = {
    profileList: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_PROFILES:
            console.log('reducers')
            newState['profileList'] = action.payload
            return newState
            break;
        default:
            return state
    }
}