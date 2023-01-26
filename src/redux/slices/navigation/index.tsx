import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INavigation {
  history: Array<string>;
}

const initialState: INavigation = {
  history: [],
};

const counterSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history = [...state.history, action.payload];
    },
  },
});

export const { addToHistory } = counterSlice.actions;

export default counterSlice.reducer;
