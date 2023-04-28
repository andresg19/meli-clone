import { GET_PRODUCTS } from "../Actions/ActionTypes";

const initialState = {
phones: [],
computing: [],
cameras: [],

}

export default function rootReducer(state = initialState, {type, payload}) {
    switch(type){
        case GET_PRODUCTS:
            return {
                ...state,
                phones: payload[0],
                computing: payload[1],
                cameras: payload[2],
            };
      
        default:
            return state;
    }
}