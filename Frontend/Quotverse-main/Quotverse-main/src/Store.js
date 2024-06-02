import { configureStore } from "@reduxjs/toolkit";
import { LikeReducer, Reducer, TrendingReducer } from "./Reducer/Quote";
const store = configureStore({
    reducer: {
        quote: Reducer,
        likes: LikeReducer,
        trending:TrendingReducer
    }
});
export default store;
