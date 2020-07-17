import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    UPDATE_SMURFS_START,
    UPDATE_SMURFS_SUCCESS,
    UPDATE_SMURFS_FAILURE
  } from "../actions/indexAction";
  
  const initialState = {
    isLoading: false,
    village: [],
    error: "",
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          village: action.payload,
          error: ""
        };
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      case UPDATE_SMURFS_START:
        return{
          ...state,
          isLoading: true
        };
        case UPDATE_SMURFS_SUCCESS:
        return{
          ...state,
          isLoading: false,
          village: action.payload,
          error: ""
        };
        case UPDATE_SMURFS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: 'Does this Smurf already live here?'
        };
      default:
        return state;
    }
  };