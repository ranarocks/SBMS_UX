import { Component, ViewContainerRef ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { service } from '../services/service.service';
import { UserService } from '../services/user.service';
import { LOGIN_USERINFO} from '../store/actions/appActions';
import { debug } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  //private toasterService: ToasterService;
  model: any = 
{ 
  username:'',
  password:''
};
  loading = false;
  constructor(
   // public toastr: ToastsManager, vcr: ViewContainerRef,
    private route: ActivatedRoute,
    private router: Router,
    private _services:service,
    private _UserService:UserService
    
  ) {
   // this.toastr.setRootViewContainerRef(vcr);

   }

  ngOnInit() {
    debugger;
//appReducer
   this._services.getUserInfo().subscribe(state=>{
      console.log("pawan");
      console.log(state);
    });
  }
  redirection(){
    this.router.navigate(['umaster/uregistration']);
  }
 
  login() {
    this._services.userAuthentication(this.model.username,this.model.password).subscribe((data : any)=>{
      debugger;
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('userRoles',data.Role);  
      this._UserService.EmployeeDetail.LastLogin = data.LastLogin;  
      this._UserService.EmployeeDetail.Name = data.Name; 
      this._UserService.EmployeeDetail.Username = data.Username;  
      this._UserService.EmployeeDetail.Role = data.Role;  
      this._UserService.EmployeeDetail.StateId = data.StateId; 
      this._services.updateUserInfo({
        type:LOGIN_USERINFO,
        userInfo: this._UserService.EmployeeDetail});
      this.router.navigate(['adminmaster/awelcome']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
}
