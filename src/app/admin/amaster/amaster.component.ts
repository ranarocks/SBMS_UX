import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { service } from '../../services/service.service';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-amaster',
  templateUrl: './amaster.component.html',
  styleUrls: ['./amaster.component.css']
})
export class AmasterComponent implements OnInit {
  currentUser: Object;
currentuserDetail:Object;
  constructor(private _UserService: UserService,
    private router: Router, private store:Store<any>,
    private _service :service
  ) {

  }

  ngOnInit() {
    debugger
    this.currentUser = this._UserService.getUserLoggedIn().Name;
    // this.currentuserDetail=this._service.getUserInfo();
    // console.log(this.currentuserDetail);
    // this._service.getUserInfo().subscribe(state=>{
    //   console.log(state);
    // });

  }

  go(url: string) {
    switch (url) {
      case 'Dashboard': {
        this.router.navigate(['adminmaster/CompanyDetail']);
        break;
      }

      case 'BankAccDetail': {
        this.router.navigate(['/Bankaccount']);
        break;
      }

      default: {

        break;
      }
    }

  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
}
