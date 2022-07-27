import { defineStore } from 'pinia'
import { InvoiceAdd } from './index'
export interface InvoiceState {
  singleInvoice: InvoiceAdd
  loading: boolean
  transactions: []
}
const state = (): InvoiceState => ({
  singleInvoice: {} as InvoiceAdd,
  loading: true,
  transactions: [],
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
    this.fetchTransactions(data.issuing_id)
    refresh()
  },
  fetchTransactions(id) {
    const { data, pending, refresh } = useFetch(
      `/api/invoice/${id}/transactions`
    )
    console.log(data)
  },
}

export const useSingleInvoiceStore = defineStore('SingleInvoiceStore', {
  state,
  getters,
  actions,
})
