import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../../Transaction";
import {Observable} from "rxjs";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
    displayedColumns: string[] = ['account.name', 'date', 'amount']
    transactions: Transaction[] = [];
    transactionStuff$!: Observable<Transaction[]>

    constructor(private firestore: Firestore) {
    }

    ngOnInit(): void {
        this.transactionStuff$ = collectionData(collection(this.firestore, 'transactions')) as Observable<Transaction[]>;
        this.transactionStuff$.subscribe(transactions => this.transactions = transactions);
    }
}
