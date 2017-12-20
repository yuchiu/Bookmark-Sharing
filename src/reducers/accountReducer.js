import constants from '../constants'

let initialState = {
    currentUser: null
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.CREATE_PROFILE:
            newState['currentUser'] = action.payload
            return newState
            break;
        default:
            return state
    }
}