import {Account, Type} from "../Account";

const ACCOUNTS: Account[] = [{
  name: 'Lakeview Loan Servicing',
  description: 'Mortgage',
  type: Type.Expense,
  autoPay: true
}, {
  name: 'St. Paul Daycare',
  type: Type.Expense,
  autoPay: false
}, {
  name: 'Fulfil',
  description: 'Miguel',
  type: Type.Income,
}, {
  name: 'OCCU Credit Card',
  type: Type.Expense,
}, {
  name: 'Blue Mountain',
  type: Type.Expense,
  description: 'HOA'
}];

export default ACCOUNTS;
