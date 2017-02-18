import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../api-communicator.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

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

  constructor(private apiCommunicatorService: ApiCommunicatorService, private titleService: Title,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../home"]);
    }
    this.titleService.setTitle( "CHECK! - Profilbild ändern" );
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
            if(!!sessionStorage.getItem("avatarId")){
                sessionStorage.setItem("avatarId", this.pictureID);
            } else {
              localStorage.setItem("avatarId", this.pictureID);
            }
          });
  }

}
