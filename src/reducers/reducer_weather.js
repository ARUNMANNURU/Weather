
import {FETCH_WEATHER } from '../actions/index';
export default function(state = [], action ){
  switch (action.type){
    case FETCH_WEATHER :
    //  return state.concat[action.payload.data];
      return [action.payload.data, ...state] ;  // this will concat the  data to existing data in the state object, instead of mutating the existing state. The data will look something like [city, city, city] instead of [city, [city, city]]
  }
  return state; // default when no action is recognized
}
