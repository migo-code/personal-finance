import { Component, OnInit } from "@angular/core";
import { Transaction, Type } from "../../../Transaction";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { Firestore, QueryConstraint, collection, collectionData, query, where } from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "app-transactions",
    templateUrl: "./transactions.component.html",
    styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
    displayedColumns: string[] = ["account.name", "date", "amount"];
    transactions: Transaction[] = [];
    transactionStuff$!: Observable<Transaction[]>;
    typeFilter$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
    nameFilter$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor(private firestore: Firestore) {}

    ngOnInit(): void {
        const transactionsRef = collection(this.firestore, "transactions");
        // TODO: `combineLatest` has been deprecated
        this.transactionStuff$ = combineLatest(this.typeFilter$, this.nameFilter$).pipe(
            switchMap(([type, name]) => {
                let wheres: QueryConstraint[] = [];
                if (type != null) {
                    wheres.push(where("type", "==", type));
                }
                if (name) {
                    wheres.push(where("name", "==", name));
                }
                return collectionData(query(transactionsRef, ...wheres)) as Observable<Transaction[]>;
            })
        );

        this.transactionStuff$.subscribe((transactions) => (this.transactions = transactions));
    }

    onTypeFilter = (type: Type = Type.payment) => this.typeFilter$.next(type);
}
