import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
