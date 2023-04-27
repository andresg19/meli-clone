import axios from "axios";
import { CLEAR_STATE, DETAIL_PRODUCTS, GET_PRODUCTS } from "../Actions/ActionTypes";

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

export const detailProduct = (payload) => {
    return async function (dispatch) {
        try {
            return dispatch({
                type: DETAIL_PRODUCTS,
                payload,
            })
        } catch (error) {
            console.log(error);
        };
    };
};

export const clearState = () => {
    return async function (dispatch) {
        return dispatch({
            type: CLEAR_STATE,
        })
    }
}