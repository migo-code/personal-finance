import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddNewAccountComponent} from './components/accounts/add-new-account/add-new-account.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountsComponent} from './components/accounts/accounts.component';
import {MatTableModule} from "@angular/material/table";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {SideNavComponent} from './global/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        AppComponent,
        AddNewAccountComponent,
        AccountsComponent,
        TransactionsComponent,
        SideNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        FontAwesomeModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
