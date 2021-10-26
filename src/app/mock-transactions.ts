import {Transaction, TransactionType} from "../Transaction";
import {dinero} from "dinero.js";
import {USD} from "@dinero.js/currencies";

export const TRANSACTIONS: Transaction[] = [{
    name: 'Lakeview Loan Servicing',
    accountId: '1',
    transactionType: TransactionType.payment,
    date: '10/26/2021',
    amount: dinero({amount: 2640, currency: USD})
}, {
    name: 'fulfil',
    accountId: '2',
    transactionType: TransactionType.deposit,
    date: '10/16/2021',
    amount: dinero({amount: 2776, currency: USD})
}];
