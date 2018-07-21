import {ACTION_LOGOUT, ACTION_LOGIN, LOGIN_USERINFO} from '../actions/appActions';
import { UserService } from '../../services/user.service';
import { createFeatureSelector } from '@ngrx/store';
import {ActionReducerMap} from '@ngrx/store'

export interface appReducerState {
    login:boolean
}

const initalState:appReducerState={
    login:false
    // userInfo:{}
    //. ..
}

interface AppState{
    appReducer:appReducerState
}

export const reducers:ActionReducerMap<AppState>={
    
    appReducer : reducer
}



export function reducer(state=initalState, action):appReducerState
{
    debugger
    switch(action.type){
        case ACTION_LOGOUT:
        return{
            ...state,
            login:false,
            // userInfo:{}
        }
        case ACTION_LOGIN:
        return{
            ...state,
            login:true,
            // userInfo:{}
        }
        case LOGIN_USERINFO:
        return{
            ...state,
            login:true,
            // userInfo:{}
        };
    }
    return state
}

export const getProductsState = createFeatureSelector<appReducerState>('test');