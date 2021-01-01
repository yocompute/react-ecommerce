import { SET_LOADING, SET_PAGE } from "../page/page.actions";
import { HOME_PAGE } from "../../const";

const DEFAULT_PAGE = {
  name: HOME_PAGE,
  loading: false,
};

export const pageReducer = (state = DEFAULT_PAGE, action) => {
  if (action && action.type === SET_PAGE) {
    return { ...state, name: action.name };
  }
  if (action && action.type === SET_LOADING) {
    return { ...state, loading: action.loading };
  }
  return state;
};
