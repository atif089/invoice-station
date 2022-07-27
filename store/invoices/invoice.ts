import { defineStore } from 'pinia'
import { InvoiceAdd } from './index'
export interface InvoiceState {
  singleInvoice: InvoiceAdd
  loading: boolean
}
const state = (): InvoiceState => ({
  singleInvoice: {} as InvoiceAdd,
  loading: true,
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
    refresh()
  },
}

export const useSingleInvoiceStore = defineStore('SingleInvoiceStore', {
  state,
  getters,
  actions,
})
