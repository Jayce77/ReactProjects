import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action){
  swictch(action.type){
    case FETCH_USERS:
    //Take the existing state and concatinate on the new list of users
      return [ ...state, ...action.payload ];
  }
  return state;
}