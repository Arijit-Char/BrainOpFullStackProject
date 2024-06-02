import axios from 'axios';

export const getQuote = (page) => async (dispatch) => {
    try {
        dispatch({ type: 'Get_Quote_Request' });
        const { data } = await axios.get(`https://api.quotable.io/quotes?page=${page}`);

        dispatch({ type: 'Get_Quote_Success', payload: data.results });
    } catch (error) {
        dispatch({ type: 'Get_Quote_Failure', payload: error.response.data.message });
    }
};
export const getTrending = () => async (dispatch) => {
    try {
        dispatch({ type: 'Get_Trending_Request' });
        const  {data}  = await axios.get("https://api.quotable.io/tags?sortBy=quoteCount");

        dispatch({ type: 'Get_Trending_Success', payload: data });
    } catch (error) {
        dispatch({ type: 'Get_Trending_Failure', payload: error.response.data.message });
    }
};
export const getLikes = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'Get_Like_Success', payload: id });


    } catch (error) {
        dispatch({ type: 'Get_Quote_Failure', payload: error.response.data.message });
    }
};
export const getUnLikes = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'Get_Unlike_Success', payload: id });

    } catch (error) {
        dispatch({ type: 'Get_Quote_Failure', payload: error.response.data.message });
    }
};
