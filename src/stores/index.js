import { applyMiddleware, createStore,  combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { profileReducer, accountReducer } from '../reducers/'

let store = null
export default {
	configure: () => {
		const reducers = combineReducers({
			profileList: profileReducer,
			account : accountReducer
		})
		store = createStore(
			reducers,
			applyMiddleware(thunk, logger)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}