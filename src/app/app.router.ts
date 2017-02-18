import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WindowComponent } from './window/window.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

const routes: Routes = [
  { path: '',redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data:{title: 'Login'}},
  { path: 'index', component: WindowComponent, data: {title: 'Index'}},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'change-avatar', component: ChangeAvatarComponent},
  { path: 'delete-profile', component: DeleteProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
