import { defineStore } from 'pinia'
import { InvoiceAdd } from './index'
export interface InvoiceState {
  singleInvoice: InvoiceAdd
  loading: boolean
  transactions: []
  transactionsPending: boolean
}
const state = (): InvoiceState => ({
  singleInvoice: {} as InvoiceAdd,
  loading: true,
  transactions: [],
  transactionsPending: true,
})

const getters = {
  getInvoice: (state: InvoiceState) => state,
}
const actions = {
  getById(id: string) {
    const { data, pending, refresh } = useFetch(`/api/invoice/${id}`)
    // @ts-ignore
    this.singleInvoice = data
    // @ts-ignore
    this.loading = pending
    console.log(data)
    // @ts-ignore
    const issuingId = this.singleInvoice?.issuing_id
    console.log(issuingId)
    this.fetchTransactions(issuingId)
    refresh()
  },
  fetchTransactions(id: string) {
    const { data, refresh, pending } = useFetch(
      `/api/invoice/${id}/transactions`
    )
    console.error(data.transactions)
    // @ts-ignore
    this.transactions = data
    console.error(this.transactions)
    // @ts-ignore
    this.transactionsPending = pending
    refresh()
  },
}

export const useSingleInvoiceStore = defineStore('SingleInvoiceStore', {
  state,
  getters,
  actions,
})
