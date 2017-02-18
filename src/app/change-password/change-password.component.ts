import {Component, OnInit} from '@angular/core';
import { ApiCommunicatorService } from '../api-communicator.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

const API_DATA = require('../api.json')

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css','../style.css']
})
export class ChangePasswordComponent implements OnInit {

  private oldPW;
  private newPW1;
  private newPW2;

  constructor(private apiCommunicatorService:ApiCommunicatorService, private titleService: Title,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle( "CHECK! - Passwort ändern" );
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../login"]);
    }
  }

  public checkPassword() {

    this.oldPW = (<HTMLInputElement>document.getElementById('oldPW')).value;
    this.newPW1 = (<HTMLInputElement>document.getElementById('newPW1')).value;
    this.newPW2 = (<HTMLInputElement>document.getElementById('newPW2')).value;


    if (this.newPW1.length <7){  
    } else {
      let body = {"newpassword": this.newPW1,"password": this.oldPW}
      this.apiCommunicatorService.putWithHeader(API_DATA.chgPassword, body).subscribe;

  }

  }
  }
