import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, role : "user"},
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
       changeRoll : (state, action) => {
        const role = action.payload;
        state.role = role;
    }
}
});

export const authActions = appSlice.actions;
export default appSlice.reducer;