import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("CHECK! - Login");
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(["../index"]);
    }
  }

  private login(username, password, savedLogin) {
    this.loginService.login(username, password, !!savedLogin).subscribe(res => this.router.navigate(["../index"]));
  }

  showDialog = false;


}
