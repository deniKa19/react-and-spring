import axios from 'axios';
import {
    FETCH_USER,
    MENU_SHOWN,
    CLOSE_MENU
} from "./types";

// function to sign in
export const fetchUser = () => (dispatch) => {
    axios.get("/api/logged-user")
        .then(res => dispatch({type: FETCH_USER, payload: res.data}))
        .catch(error => console.log(error))
};
export const toggleMenu = () => (dispatch) => {
    dispatch({type: MENU_SHOWN})
};
export const closeMenu = () => (dispatch) => {
    dispatch({type: CLOSE_MENU})
};

