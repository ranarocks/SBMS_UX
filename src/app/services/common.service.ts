import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CommonService {
  constructor(private http:HttpClient) { }

  GetAllStates(){
    return this.http.get(environment.APIurl+"common/GetAllStates");
  }
}
