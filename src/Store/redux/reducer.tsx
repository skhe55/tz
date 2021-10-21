import { SET_LOGIN } from './types';

export interface reducerProps {
    login: string,
    password: string,
}

const initialState: reducerProps = {
    login: "",
    password: "",
};


export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload,
                password: action.payload,
            }
        default:
            return state;
    }
}