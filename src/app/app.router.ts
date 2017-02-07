import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '.login/login.component';
import { ChangePasswordComponent } from '.change-password/change-password.component';


export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'index', redirectTo: 'app', pathMatch: 'full'},
  { path: 'change-password', redirectTo: 'change-password', pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
