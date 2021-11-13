import { Account } from "./Account";

export enum Type {
    payment,
    deposit,
}

export interface User {
    userID?: string;
    userName?: string;
}

export interface Transaction {
    id?: string;
    account?: Account;
    user?: User;
    type: Type;
    date: string;
    amount: number;
    note?: string;
}
