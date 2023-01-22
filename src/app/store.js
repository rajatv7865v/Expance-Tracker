import { configureStore, createSlice } from "@reduxjs/toolkit";
const expanseSlice = createSlice({
  name: "expanseTracker",
  initialState: {
    income: 0,
    amount: 0,
    expanse: 0,
    totalIncome: [],
    totalExpanse: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.income = state.income + action.payload;

    },
    addExpanse: (state, action) => {
      state.expanse = state.expanse + action.payload;
    },
    addTotalIncome: (state, action) => {
      state.totalIncome = [...state.totalIncome, action.payload];
      state.amount = Number(state.amount) + Number(action.payload.expanse);
      state.income = Number(state.income) + Number(action.payload.expanse);

    },
    addTotalExpanse: (state, action) => {
      state.totalExpanse = [...state.totalExpanse, action.payload];
      state.amount = Number(state.amount) - Number(action.payload.expanse);
      state.expanse = Number(state.expanse) + Number(action.payload.expanse);

    },
  },
});
export default configureStore({
  reducer: {expance:expanseSlice.reducer}
});

export const action= expanseSlice.actions