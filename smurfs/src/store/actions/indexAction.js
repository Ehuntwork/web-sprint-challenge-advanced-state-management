import axios from 'axios'

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
      });
  };
};

export const UPDATE_SMURFS_START = "UPDATE_SMURFS_START";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURFS_FAILURE = "UPDATE_SMURFS_FAILURE";

export const postSmurf = (smurfInput) => {

  return dispatch => {
    dispatch({ type: UPDATE_SMURFS_START });
    axios
      .post("http://localhost:3333/smurfs", smurfInput)
      .then(res => {
        console.log('RESPONSE', res)
        dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({ type: UPDATE_SMURFS_FAILURE, payload: err.message });
      });
  };
};

