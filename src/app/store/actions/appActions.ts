import {appReducerState} from '../reducers/appReducer'
import {createSelector} from '@ngrx/store';
// import {getProductsState} from '../reducers/appReducer'

export const ACTION_LOGOUT = "LOGOUT"
export const ACTION_LOGIN = "LOGIN"
export const LOGIN_USERINFO = "USERINFO"



// export const getLoginState = createSelector(
//   getProductsState,
//   (state: State) => state.login
// );