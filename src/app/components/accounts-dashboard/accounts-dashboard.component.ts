import {Component, OnInit} from '@angular/core';
import ACCOUNTS from "../../mock-accounts";
import {Account, Type} from "../../../Account";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-accounts-dashboard',
  templateUrl: './accounts-dashboard.component.html',
  styleUrls: ['./accounts-dashboard.component.scss']
})
export class AccountsDashboardComponent implements OnInit {
  billsDisplayedColumns: string[] = ['autopay', 'name','description'];
  bills: Account[] = ACCOUNTS.filter(({type}) => type == Type.Expense);
  faCheckCircle = faCheckCircle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
