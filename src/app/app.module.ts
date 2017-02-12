import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WindowComponent } from './window/window.component';
import { LeftIllustrationComponent } from './left-illustration/left-illustration.component';
import { MiddleTextComponent } from './middle-text/middle-text.component';
import { RightIllustrationComponent } from './right-illustration/right-illustration.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WindowComponent,
    LeftIllustrationComponent,
    MiddleTextComponent,
    RightIllustrationComponent,
    LoginComponent,
    ChangePasswordComponent,
    DeleteProfileComponent,
    ChangeAvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
