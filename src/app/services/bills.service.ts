import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Transaction} from "../../Transaction";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Account} from "../../Account";

@Injectable({
    providedIn: 'root'
})
export class BillsService {

    constructor(private http: HttpClient) {
    }

    getTransactions = (): Observable<Transaction[]> => this.http.get<Transaction[]>(`${environment.backendUrl}/transactions`);
    getAccounts = (): Observable<Account[]> => this.http.get<Account[]>(`${environment.backendUrl}/accounts`);
}
