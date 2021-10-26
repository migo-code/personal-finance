import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../Transaction";
import {TRANSACTIONS} from "../../mock-transactions";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = TRANSACTIONS;
  displayedColumns: string[] = ['name', 'date']
  constructor() { }

  ngOnInit(): void {
  }

}
