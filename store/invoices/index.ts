import { defineStore } from 'pinia'

export interface Invoice {
  id: string
  clientName: string
  cost: number
  status: 'Approved' | 'Pending' | 'Denied' | 'Expired'
  createdAt: Date
}
export interface InvoiceAdd {
  invoice_data: {
    city: string
    client_email: string
    client_name: string
    country: string
    description: string
    discount_1: number
    invoice_date: Date
    item_description_1: string
    item_name_1: string
    payment_due: Date
    payment_terms: string
    price_1: number
    quantity_1: number
    street_address: string
    zip_code: number
  }
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
  async createInvoice(newInvoice: InvoiceAdd) {
    const { data, pending } = await useFetch('/api/invoice', {
      method: 'POST',
      body: JSON.stringify(newInvoice),
    })
    console.log(data, pending)
  },
}

export const useInvoiceStore = defineStore('invoiceStore', {
  state,
  getters,
  actions,
})
