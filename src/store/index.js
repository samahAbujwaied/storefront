// Creating the store 
// and adding reducers to it
import dataa from './data.js'
import card from './cart'
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want

let reducers = combineReducers({dataa,card});

const storee = () => {
    return createStore(reducers, composeWithDevTools())
}

export default storee();