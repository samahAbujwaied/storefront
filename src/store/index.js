// Creating the store 
// and adding reducers to it
import dataa from './reducres'
import card from './cart'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
import thunk from "redux-thunk";

let reducers = combineReducers({dataa,card});

const storee = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storee();