import { SET_LOGIN } from "./types";

export const setLoginAction = (payload: any) => {
    return (
        { type: SET_LOGIN, payload }
    );
};