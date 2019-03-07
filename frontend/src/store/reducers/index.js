import { combineReducers } from 'redux';
import fetchUser from './fetchUser';
import toggleMenu from './toggleMenu';

//defines global store state
export default combineReducers({
    user: fetchUser,
    menuShown: toggleMenu
})
