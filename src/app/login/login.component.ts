import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {PopUpService} from '../pop-up.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private popUpService: PopUpService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("CHECK! - Login");
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(["../index"]);
    }
  }

  private login(username, password, savedLogin) {
    this.loginService.login(username, password, !!savedLogin).subscribe(res => this.router.navigate(["../index"]), (err) => {
      this.popUpService.throwWarning("Die Kombination aus Benutzername und Passwort ist leider nicht vergeben, bitte versuchen Sie es erneut.");
    });
  }

  showDialog = false;


}
