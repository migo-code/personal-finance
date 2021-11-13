import {Component, OnInit} from '@angular/core';
import {Account, Type} from "../../../Account";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {BillsService} from "../../services/bills.service";

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    billsDisplayedColumns: string[] = ['autopay', 'name', 'description'];
    bills: Account[] = [];
    faCheckCircle = faCheckCircle;

    constructor(private billsService: BillsService) {
    }

    ngOnInit(): void {
        this.billsService.getAccounts()
            .subscribe(accounts => this.bills = accounts.filter(({type}) => type == Type.Expense));
    }

}
