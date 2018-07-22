import {ACTION_LOGOUT, ACTION_LOGIN, LOGIN_USERINFO} from '../actions/appActions';

export interface appReducerState {
    login:boolean,
    userInfo:{}
}

const initalState:appReducerState= {

    login:false,
    userInfo:{}
    //. ..
}

export function reducer(state=initalState, action):appReducerState
{
    switch(action.type){
        case ACTION_LOGOUT:
        return{
            ...state,
            login:false,
            userInfo:{}
        }
        case ACTION_LOGIN:
        return{
            ...state,
            login:true,
            userInfo:action.userInfo
        };
    }
    return state
}

// export const getProductsState = createFeatureSelector<State>('test');