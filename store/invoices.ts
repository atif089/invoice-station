import { defineStore } from 'pinia'

export interface Invoice {
  id: string
  clientName: string
  cost: number
  status: 'Approved' | 'Pending' | 'Denied' | 'Expired'
  createdAt: Date
}
export interface InvoiceAdd {
  clientName: string
  cost: number
}
export interface InvoiceState {
  invoiceList: Invoice[]
}
const state = (): InvoiceState => ({
  invoiceList: [],
})

const getters = {
  getById: (state: InvoiceState) => (id: string) => {
    return state.invoiceList?.find((invoice: Invoice) => invoice.id === id)
  },
  getOrderedInvoices: (state: InvoiceState) =>
    [...state.invoiceList].sort(
      (a: Invoice, b: Invoice) => a.createdAt.getTime() - b.createdAt.getTime()
    ),
}
const actions = {
  createInvoice(partialInvoice: InvoiceAdd) {
    const newInvoice: Invoice = {
      ...partialInvoice,
      createdAt: new Date(),
      id: Math.floor(Math.random() * 100).toString(),
      status: 'Pending',
    }
    // @ts-ignore
    this.invoiceList.push(newInvoice)
  },
}

export const useInvoiceStore = defineStore('invoiceStore', {
  state,
  getters,
  actions,
})
