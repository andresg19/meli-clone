import { CLEAR_STATE, DETAIL_PRODUCTS, GET_PRODUCTS } from "../Actions/ActionTypes";

const initialState = {
phones: [],
computing: [],
cameras: [],
detail: [],
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
        case DETAIL_PRODUCTS:
            let result;
            for (let i = 0; i < state.phones.length; i++) {
                for (let y = 0; y < state.computing.length; y++) {
                    for (let x = 0; x < state.cameras.length; x++) {
                        const cam = state.cameras[x];
                        cam.id === payload[0] ? result = cam : null
                    }
                    const comp = state.computing[y];
                    comp.id === payload[0] ? result = comp : null
                }
                const element = state.phones[i];
                element.id === payload[0] ? result = element : null
            }
           console.log('reducer',payload)
            return {
                ...state,
              detail: result,
            }
        case CLEAR_STATE:
            return {
                ...state,
                detail: [],
            }
        default:
            return state;
    }
}