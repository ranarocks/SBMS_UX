import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import {Store} from '@ngrx/store'
// import * as testStore from '../store'
import { Action } from '../../../node_modules/rxjs/internal/scheduler/Action';

@Injectable()
export class service {
  model: any = 
  { 
    username:'',
    password:''
  };

constructor(private http:HttpClient, private store:Store<any>) {
  
 }

 
userAuthentication(userName, password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post("http://ranarocks.azurewebsites.net/" + 'token', data, { headers: reqHeader });
}

getUserInfo(){
  return this.store.select("appReducer");
}

updateUserInfo(obj){
  return this.store.dispatch({
    type:obj.type,
    userInfo:obj.userInfo
  });
}

}
