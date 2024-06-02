import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
}
const initialLikeState = {
    likedarray: [],
}
export const Reducer = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Quote_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_Quote_Success', (state, action) => {

            state.loading = false;
            state.quote = action.payload;
        })
        .addCase('Get_Quote_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const TrendingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Trending_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_Trending_Success', (state, action) => {

            state.loading = false;
            state.trend = action.payload;
        })
        .addCase('Get_Trending_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const LikeReducer = createReducer(initialLikeState, (builder) => {
    builder

        .addCase('Get_Like_Success', (state, action) => {

            state.likedarray = [...state.likedarray, action.payload];
        })
        .addCase('Get_Unlike_Success', (state, action) => {
            state.loading = false;
            state.likedarray = state.likedarray.filter((item) => item !== action.payload);
        });
});
