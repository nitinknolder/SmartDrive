import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {HompageComponent} from './hompage/hompage.component';
import {AddvehicleComponent} from './addvehicle/addvehicle.component';
import {DocumentComponent} from './document/document.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FeedbackComponent} from './feedback/feedback.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'homepage' , component: HompageComponent},
  {path: 'addvehicle', component: AddvehicleComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'feedback', component: FeedbackComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
