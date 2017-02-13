/**
 * Created by tan on 2017/2/11.
 */
import  { combineReducers } from 'redux';
import changeLoc from './changeLoc'
const reducer=combineReducers({
  changeLoc
});
//合成的大reducer
export default reducer;
