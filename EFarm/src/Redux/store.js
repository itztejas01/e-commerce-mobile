import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import cartItemsReducers from './Reducers/cartItemsReducers'


const reducers = combineReducers({
    cartItems: cartItemsReducers
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;