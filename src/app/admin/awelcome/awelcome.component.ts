import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { service } from '../../services/service.service';

@Component({
  selector: 'app-awelcome',
  templateUrl: './awelcome.component.html',
  styleUrls: ['./awelcome.component.css']
})
export class AwelcomeComponent implements OnInit {
  constructor( private _services:service) { }

  ngOnInit() {
    this._services.getUserInfo().subscribe(state=>{
      console.log("awelcome");
      console.log(state);
    });
  }

  
}
