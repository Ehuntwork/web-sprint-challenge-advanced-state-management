import {
    FETCH_MISSIONS_START,
    FETCH_MISSIONS_SUCCESS,
    FETCH_MISSIONS_FAILURE
  } from "../actions/indexAction";
  
  const initialState = {
    isLoading: false,
    village: [],
    error: "",
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MISSIONS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_MISSIONS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          village: action.payload,
          error: ""
        };
      case FETCH_MISSIONS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };