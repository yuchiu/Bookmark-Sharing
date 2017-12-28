import { applyMiddleware, createStore,  combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { profileReducer, accountReducer, bookmarkReducer } from '../reducers/'

let store = null
export default {
	configure: () => {
		const reducers = combineReducers({
			profileReducer: profileReducer,
			accountReducer : accountReducer,
			bookmarkReducer : bookmarkReducer
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