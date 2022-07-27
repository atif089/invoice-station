import { defineStore } from 'pinia'

export interface Invoice {
  id: string
  clientName: string
  cost: number
  status: 'Approved' | 'Pending' | 'Denied' | 'Expired'
  createdAt: Date
}

export interface invoiceItemCost {
  price: number
  quantity: number
  discount: number
  discountPrice: number
  total: number
}
export interface InvoiceItem {
  name: string
  description?: string
  cost: invoiceItemCost
}
export interface InvoiceAdd {
  invoice_data: {
    city: string
    client_email: string
    client_name: string
    country: string
    description: string
    invoice_date: Date
    payment_due: Date
    payment_terms: string
    street_address: string
    zip_code: number
    items: {
      [key: string]: InvoiceItem
    }
  }
}
export interface InvoiceState {
  invoiceList: Invoice[]
  loading: boolean
  singleInvoice: InvoiceAdd
  pending: boolean
}
const state = (): InvoiceState => ({
  invoiceList: [],
  loading: true,
  singleInvoice: {},
  pending: true,
})

const getters = {
  getAllInvoices: (state: InvoiceState) => state,
}
const actions = {
  async createInvoice(newInvoice: InvoiceAdd) {
    console.log(newInvoice)
    const { data, pending } = await useFetch('/api/invoice', {
      method: 'POST',
      body: newInvoice,
    })
    console.log(data, pending)
  },
  fetchInvoices() {
    const { data, pending } = useFetch('/api/invoices')
    // @ts-ignore
    this.invoiceList = data
    // @ts-ignore
    this.loading = pending
  },
  async getById(id: string) {
    const { data, pending } = useFetch(`/api/invoice/${id}`)
    // @ts-ignore
    this.singleInvoice = data
    // @ts-ignore
    this.pending = pending
  },
}

export const useInvoiceStore = defineStore('invoiceStore', {
  state,
  getters,
  actions,
})
