import { Component, OnInit } from '@angular/core';
import {ApiCommunicatorService} from "../api-communicator.service";
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css','../style.css']
})
export class DeleteProfileComponent implements OnInit {

  constructor(private apiCommunicatorService:ApiCommunicatorService,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  if (!this.loginService.isLoggedIn()) {
    this.router.navigate(["../login"]);
  }
  }

  public deleteAccount() {
    let password = (<HTMLInputElement>document.getElementById('passwordField')).value;
    console.log("password:"+password);
    this.apiCommunicatorService.deleteStudent().subscribe();
  }

}
