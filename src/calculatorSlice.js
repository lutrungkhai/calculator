import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: "0",
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    clear: () => initialState,
    inputNumber: (state, action) => {
      if (state.display === "0") {
        state.display = action.payload;
      } else {
        state.display += action.payload;
      }
    },
    inputOperator: (state, action) => {
      state.display += action.payload;
    },
    inputDecimal: (state) => {
      if (!state.display.includes(".")) {
        state.display += ".";
      }
    },
    evaluate: (state) => {
      try {
        let result = eval(state.display);
        state.display = result.toString();
      } catch {
        state.display = "Error";
      }
    }
  }
});

export const { clear, inputNumber, inputOperator, inputDecimal, evaluate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
