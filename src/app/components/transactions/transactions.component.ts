import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../../Transaction";
import {BillsService} from "../../services/bills.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
    displayedColumns: string[] = ['account.name', 'date', 'amount']
    transactions: Transaction[] = [];

    constructor(private billsService: BillsService) {
    }

    ngOnInit(): void {
        this.billsService.getTransactions().subscribe(transactions => this.transactions = transactions);
    }
}
