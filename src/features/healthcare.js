import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedSolutionIndex: 0,
    selectedSolutionName: "",
};
const heathcareSlice = createSlice({
    name: "healthcare",
    initialState,
    reducers: {
        setSelectedSolutionIndex: (state, {payload}) => {
            state.selectedSolutionIndex = payload
        },
        setSelectedSolutionName: (state, {payload}) => {
            state.selectedSolutionName = payload
        }
    },
});

export const { setSelectedSolutionIndex, setSelectedSolutionName } = heathcareSlice.actions;
export default heathcareSlice.reducer;