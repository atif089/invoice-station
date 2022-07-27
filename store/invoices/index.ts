import { defineStore } from 'pinia'

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
  invoice_id: string
  iban: string
  issuing_id: string
  invoice_status: string
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
    freelancer: {
      first_name: string
      last_name: string
      address: string
      city: string
      country: string
    }
    cost: {
      subTotal: number
      grandTotal: number
      discounts: number
    }
  }
}
export interface InvoiceState {
  invoiceList: {
    invoices: InvoiceAdd[]
  }
  loading: boolean
}
const state = (): InvoiceState => ({
  invoiceList: {
    invoices: [],
  },
  loading: true,
})

const getters = {
  getAllInvoices: (state: InvoiceState) => state,
}
const actions = {
  async createInvoice(newInvoice: any) {
    console.log(newInvoice)
    const { data, pending } = await useFetch('/api/invoice', {
      method: 'POST',
      body: newInvoice,
    })
    console.log(data, pending)
  },
  fetchInvoices() {
    const { data, pending, refresh } = useFetch('/api/invoices')
    // @ts-ignore
    this.invoiceList = data
    // @ts-ignore
    this.loading = pending

    refresh()
  },
}

export const useInvoiceStore = defineStore('invoiceStore', {
  state,
  getters,
  actions,
})
