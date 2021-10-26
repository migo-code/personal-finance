export enum Type {
  Expense,
  Income
}

export interface Account {
  id?: string,
  type: Type,
  name: string,
  description?: string,
  autoPay?: boolean
}
