import {
    SET_NOTIFICATION,
    CLEAR_NOTIFICATION,
    SET_REDIRECT,
    CLEAR_REDIRECT,
  } from "./notification.actions";
 
  export const notificationReducer = (state = null, action) => {
    if (action && action.type === SET_NOTIFICATION) {
      return { ...action.notification };
    }

    if (action && action.type === CLEAR_NOTIFICATION) {
      return { ...action.notification };
    }
  
    return state;
  };
  
  export const pathReducer = (state = '', action) => {
    if (action && action.type === SET_REDIRECT) {
      return action.path;
    }

    if (action && action.type === CLEAR_REDIRECT) {
      return '';
    }
  
    return state;
  }