import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GraphComponent} from './components/graph/graph.component';
import {HouseholdsComponent} from './components/households/households.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HouseholdsComponent},
  {path: 'graphs', component: GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
