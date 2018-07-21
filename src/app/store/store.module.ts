
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import {StoreModule} from '@ngrx/store'
import {reducer} from './reducers/appReducer'

export * from './actions/appActions'

// , canActivate: [AuthGuard]
@NgModule({
  imports: [
    StoreModule.forFeature("test",reducer)
  ],
})
export class StoreTestModule { }
