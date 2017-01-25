import FETCH_WEATHER from '../actions/index'

export default function (state = [] ,action)
{
  switch(action.type){
    case FETCH_WEATHER:
    // return state.concat([action.payload.data]);
    return [action.payload.data,...state]; //add new cities in front of array //creates new array
  }

  return state;
}
