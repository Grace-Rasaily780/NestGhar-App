import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { propertyListReducer } from './reducers/propertiesReducer';
import { reserveCreateReducer, reserveDetailsReducer } from './reducers/ReserveReducer';
import { userDetailsReducer, userModifyReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducer';


const initialState = {

};

const reducer = combineReducers({
    // room
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userModify: userModifyReducer,
    reserveCreate: reserveCreateReducer,
    properties: propertyListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, applyMiddleware(thunk));
// composeEnhancer()
export default store;