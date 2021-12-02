import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HouseholdsComponent } from './components/households/households.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { GraphComponent } from './components/graph/graph.component';
import {HouseholdFilterPipe} from './pipes/household-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HouseholdsComponent,
    NavbarComponent,
    GraphComponent,
    HouseholdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
