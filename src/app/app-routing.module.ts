import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GraphComponent} from './components/graph/graph.component';
import {HouseholdsComponent} from './components/households/households.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HouseholdsComponent},
  {path: 'graphs', component: GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
