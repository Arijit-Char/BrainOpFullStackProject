import { createReducer } from "@reduxjs/toolkit"
const initialState = {
    loading: true,
}


export const Register = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Register_Request', (state) => {
            state.loading = true;
            state.isAuthenticated = false;

        })
        .addCase('Get_Register_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload;
        })
        .addCase('Get_Register_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;

        });
});
export const Login = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Login_Request', (state) => {
            state.loading = true;
            state.isAuthenticated = false;

        })
        .addCase('Get_Login_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload;
        })
        .addCase('Get_Login_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        });
});
export const Logout = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Logout_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_Logout_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
        })
        .addCase('Get_Logout_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;

            state.error = action.payload;
        });
});