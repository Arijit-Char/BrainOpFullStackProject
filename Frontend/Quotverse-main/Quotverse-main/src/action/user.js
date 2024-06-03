import axios from "axios";

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Register_Request",
        });

        const { data } = await axios.post(
            "http://localhost:5000/api/users/register",
            {
                name,
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }
        );

        dispatch({
            type: "Get_Register_Success",
            payload: data.message,
        });
        
    } catch (error) {
        dispatch({
            type: "Get_Register_Failure",
            payload: error.response.data.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Login_Request",
        });

        const { data } = await axios.post(
            "http://localhost:5000/api/users/login",
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        dispatch({
            type: "Get_Login_Success",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "Get_Login_Failure",
            payload: error.response.data.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Logout_Request",
        });

        const { data } = await axios.get("http://localhost:5000/api/users/logout");

        dispatch({
            type: "Get_Logout_Success",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "Get_Logout_Failure",
            payload: error.response.data.message,
        });
    }
};


