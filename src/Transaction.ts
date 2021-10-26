import {Dinero} from "dinero.js";

export enum TransactionType {
    payment,
    deposit
}

export interface Transaction {
    id?: string;
    accountId?: string;
    name: string;
    userID?: string;
    userName?: string;
    transactionType: TransactionType;
    date: string;
    amount: Dinero<any>;
    note?: string;
}
