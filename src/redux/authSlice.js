// import {createSlice} from "@reduxjs/toolkit";
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null
//     },
//     reducers: {
//         logged: state => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes
//             state.user = { name: "Pawel" }
//         },
//     }
// })
//
// export const { logged } = authSlice.actions
//
// export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
