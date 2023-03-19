import { createReducer } from "@reduxjs/toolkit";
export const testReducer = createReducer(
  { data: null, error: null, loading: true },
  {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = "Errorzz";
      state.loading = false;
    },
    // setLoading: (state, action) => {},
  }
);
export const fetchData = () => async (dispatch) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/user");
  const json = await data.json();
  if (!data.ok) dispatch({ type: "setError", payload: json });
  else dispatch({ type: "setProducts", payload: json });
  //   else return "Errors babes";
};
