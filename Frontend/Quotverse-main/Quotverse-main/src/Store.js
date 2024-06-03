import { configureStore } from "@reduxjs/toolkit";
import { LikeReducer, Reducer, TrendingReducer } from "./Reducer/Quote";
import { Login, Logout, Register } from "./Reducer/user";

const store = configureStore({
    reducer: {
        quote: Reducer,
        likes: LikeReducer,
        trending:TrendingReducer,
        register: Register,
        login: Login,
        logout: Logout,
    }
});
export default store;
