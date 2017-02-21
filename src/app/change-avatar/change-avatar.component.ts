import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../api-communicator.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {PopUpService} from '../pop-up.service';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css','../style.css'],
  providers: [ApiCommunicatorService]
})
export class ChangeAvatarComponent implements OnInit {

  public avatarPictures = [];
  public pictureCurrentUrl = this.avatarPictures[this.currentPicture];
  public currentPicture = (!!sessionStorage.getItem("avatarId")) ? sessionStorage.getItem("avatarId") : localStorage.getItem("avatarId");
  public picTopOld = true;
  public picTopNew = false;
  public pictureID;
  public index;

  constructor(private apiCommunicatorService: ApiCommunicatorService, private titleService: Title,private loginService: LoginService, private router: Router, private popUpService: PopUpService) {
  }

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../login"]);
    }
    this.titleService.setTitle( "CHECK! - Avatar ändern" );
    this.getAvatars();
  }

  private getAvatars() {
    this.apiCommunicatorService.getAvatar("All")
      .subscribe((avatar: Array<Object>) => this.avatarPictures = avatar);
  }

  changePictureCurrent(url, index) {
    this.picTopOld = false;
    this.picTopNew = true;
    this.pictureCurrentUrl = url;
    this.pictureID = index;
  }

  public changePicture() {
    this.apiCommunicatorService.putProfilePicture(this.pictureID).subscribe((res: any) => {
            this.popUpService.throwConfirmation("Avatar wurde geändert!");
            if(!!sessionStorage.getItem("avatarId")){
                sessionStorage.setItem("avatarId", this.pictureID);
            } else {
              localStorage.setItem("avatarId", this.pictureID);
            }
            }, (err) => this.popUpService.throwWarning("Avatar konnte nicht geändert werden, bitte versuchen Sie es erneut."));
  }

}
