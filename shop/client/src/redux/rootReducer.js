import {combineReducers} from 'redux';
import {signuserFeatureKey, Reducer} from './signinstore/Reducer';


let rootReducer=combineReducers({
  [signuserFeatureKey]:Reducer
})

export {rootReducer};