import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewAccountComponent } from './components/add-new-account/add-new-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsDashboardComponent } from './components/accounts-dashboard/accounts-dashboard.component';
import {MatTableModule} from "@angular/material/table";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AddNewAccountComponent,
    AccountsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
