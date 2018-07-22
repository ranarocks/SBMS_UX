import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{UserService} from './services/user.service';
import { Router } from '@angular/router';
import { service } from './services/service.service';
import { ACTION_LOGOUT } from './store/actions/appActions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user:UserService, private router:Router, private _service :service){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('userToken') != null)
      {
        return true;
      }
    else
    {
    // not logged in so redirect to login page with the return url
    this._service.updateUserInfo({
      type:ACTION_LOGOUT,
      userInfo: {}
    });
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
    }
  }
}
