export interface RemitterInformation {
  account_id: string
  name: string
  bank_code: string
}

export interface BankAccount {
  beneficiary_name: string
  iban: string
  bic: string
  country_iso: string
  address: string
}

export interface Data {
  ewallet: string
  remitter_information: RemitterInformation
  issued_account_id: string
  amount: number
  bank_account: BankAccount
  currency: string
  issuing_transaction_id: string
}

export interface Transactions {
  id: string
  trigger_operation_id: string
  amount: number
  type: string
  status: string
  issuing_id: string
  created_at: number
  data: Data
}
export interface TransactionList {
  transactions: Transactions[]
}
