import constants from '../constants'

let initialState = {
    profileList: [],
    selectedProfile: null
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_PROFILES:
            newState['profileList'] = action.payload
            return newState
            break;
        case constants.CREATE_PROFILE:
            let newProfileList = Object.assign([], state.profileList)
            newProfileList.push(action.payload)
            newState['profileList'] = newProfileList
            return newState
            break;
        case constants.SELECT_PROFILE:
            newState['selectedProfile'] = action.payload
            return newState
            break;
        default:
            return state
    }
}