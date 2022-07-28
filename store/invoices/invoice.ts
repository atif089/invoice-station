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
  async getById(id: string) {
    // @ts-ignore

    const response = await $fetch(`/api/invoice/${id}`)
    // @ts-ignore
    this.singleInvoice = response

    console.log(response)
  },
}

export const useSingleInvoiceStore = defineStore('SingleInvoiceStore', {
  state,
  getters,
  actions,
})
