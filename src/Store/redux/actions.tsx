import { SET_LOGIN } from "./types";

export const setLogin = (payload: string) => {
    return (
        { type: SET_LOGIN, payload }
    );
};