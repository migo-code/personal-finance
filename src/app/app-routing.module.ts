import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { AccountsComponent } from "./components/accounts/accounts.component";

const routes: Routes = [
  {
    path: "",
    component: AccountsComponent,
  },
  {
    path: "transaction-history",
    component: TransactionsComponent,
  },
  {
    path: "accounts",
    component: AccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
