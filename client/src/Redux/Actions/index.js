import axios from "axios";
import { GET_PRODUCTS } from "../Actions/ActionTypes";

export const getProducts = (payload) => {
    return async function (dispatch) {
        try {
            let result = await axios.get('http://localhost:3001/products');
            return dispatch({
                type: GET_PRODUCTS,
                payload: result.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};
