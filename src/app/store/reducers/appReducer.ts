import {ACTION_LOGOUT, ACTION_LOGIN, LOGIN_USERINFO} from '../actions/appActions';
import { UserService } from '../../services/user.service';
import { createFeatureSelector } from '@ngrx/store';
import {ActionReducerMap} from '@ngrx/store'

export interface appReducerState {
    login:string,
    userInfo:{}
}

const initalState:appReducerState= {

    login:"jatin",
    userInfo:{}
    //. ..
}

export function reducer(state=initalState, action):appReducerState
{
    debugger
    switch(action.type){
        case ACTION_LOGOUT:
        return{
            ...state,
            login:"logout",
            userInfo:{}
        }
        case ACTION_LOGIN:
        return{
            ...state,
            login:"login",
            userInfo:{}
        }
        case LOGIN_USERINFO:
        // const g = action.payload;
        return{
            ...state,
            login:"userinfo",
             userInfo:action.userInfo
        };
    }
    return state
}

// export const getProductsState = createFeatureSelector<State>('test');