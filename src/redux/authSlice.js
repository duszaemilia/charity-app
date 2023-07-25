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


//
// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = {
//     isLoggedIn: false,
//     user: null,
// };
//
// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         loginSuccess: (state, action) => {
//             state.isLoggedIn = true;
//             state.user = action.payload;
//         },
//         logoutSuccess: (state) => {
//             state.isLoggedIn = false;
//             state.user = null;
//         },
//     },
// });
//
// export const { loginSuccess, logoutSuccess } = authSlice.actions;
// export default authSlice.reducer;


import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    email: "",
    password: "",
    password2: "",
    validation: [],
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
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPassword2: (state, action) => {
            state.password2 = action.payload;
        },
        setValidation: (state, action) => {
            state.validation = action.payload;
        },
        registerUser: (state, action) => {
            // CZy zapisać logikę rejestracji użytkownika w bazie danych??
            // Dane użytkownika są dostępne w action.payload
            const userData = action.payload;
            // Przykład zapisania danych użytkownika do stanu
            state.isLoggedIn = true;
            state.user = userData;
        },
    },
});

export const {
    loginSuccess,
    logoutSuccess,
    setEmail,
    setPassword,
    setPassword2,
    setValidation,
    registerUser,
} = authSlice.actions;
export default authSlice.reducer;
