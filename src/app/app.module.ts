import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WindowComponent } from './window/window.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';

import { LoginService } from './login.service';
import { ApiCommunicatorService } from './api-communicator.service';
import { BodyDynamicsService } from './body-dynamics.service';
import { PopUpService } from './pop-up.service';

import { PopUpWarningComponent } from './pop-up-warning/pop-up-warning.component';
import { PopUpAdviceComponent } from './pop-up-advice/pop-up-advice.component';
import { PopUpConfirmationComponent } from './pop-up-confirmation/pop-up-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WindowComponent,
    LoginComponent,
    ChangePasswordComponent,
    DeleteProfileComponent,
    ChangeAvatarComponent,
    PopUpWarningComponent,
    PopUpAdviceComponent,
    PopUpConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ApiCommunicatorService, LoginService, BodyDynamicsService, PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
