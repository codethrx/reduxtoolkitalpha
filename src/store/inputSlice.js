import { createReducer } from "@reduxjs/toolkit";
export const inputReducer = createReducer(
  { value: "", list: [] },
  {
    updateInputValue: (state, action) => {
      state.value = action.payload;
    },
    ADD: (state) => {
      state.list.push({ elem: crypto.randomUUID(), fade: false });
    },
    updateFade: (state, action) => {
      //   state.list.forEach((item) => {
      //     if (item.elem === action.payload) item.fade = !item.fade;
      //   });
      return {
        ...state,
        list: state.list.map((l) =>
          l.elem === action.payload ? { ...l, fade: !l.fade } : { ...l }
        ),
      };
    },
  }
);
