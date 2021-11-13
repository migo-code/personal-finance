import { Component, OnInit } from "@angular/core";
import { Account } from "../../../Account";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"],
})
export class AccountsComponent implements OnInit {
  billsDisplayedColumns: string[] = ["autopay", "name", "description"];
  bills: Account[] = [];
  faCheckCircle = faCheckCircle;
  accounts$!: Observable<Account[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.accounts$ = collectionData(
      collection(this.firestore, "accounts")
    ) as Observable<Account[]>;
    this.accounts$.subscribe((accounts) => (this.bills = accounts));
  }
}
