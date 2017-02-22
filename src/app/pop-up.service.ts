import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";

@Injectable()
export class PopUpService {
  private warning = {
      "show": false,
      "text": "test"
    }

    private confirmation = {
      "show": false,
      "text": "text",
      "logout": false
    }

    private advice = {
      "show": false,
      "text": "text"
    }

    constructor(private router: Router, private loginService: LoginService) { }

    setSuccessLogout(){
      this.confirmation.logout = true;
    }

    throwWarning(text){
      this.warning.text = text;
      this.warning.show = true;
    }
    resetWarning(){
      this.warning.text = "";
      this.warning.show = false;
    }

    throwConfirmation(text){
      this.confirmation.text = text;
      this.confirmation.show = true;
    }
    resetConfirmation(){
      this.confirmation.text = "";
      this.confirmation.show = false;
      this.router.navigate(["../index"]);
      if(this.confirmation.logout){
        this.loginService.logout();
      }
    }

    throwAdvice(text){
      this.advice.text = text;
      this.advice.show = true;
    }
    resetAdvice(){
      this.advice.text = "";
      this.advice.show = false;
    }
  }
