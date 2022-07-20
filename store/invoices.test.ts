import { setActivePinia, createPinia } from 'pinia'
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from 'vitest'
import { useInvoiceStore } from './invoices'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useInvoiceStore', () => {
  let store: ReturnType<typeof useInvoiceStore>
  beforeEach(() => {
    store = useInvoiceStore()
  })
  afterEach(() => {
    store.$reset()
  })
  test('creates a store', () => {
    expect(store).toBeDefined()
  })
  test('initializes with empty array', () => {
    expect(store.invoiceList).toStrictEqual([])
  })
  test('create an invoice', () => {
    store.createInvoice({
      clientName: 'john wick',
      cost: 99,
    })
    expect(store.invoiceList[0]).toBeDefined()
    expect(store.invoiceList[0].clientName).toBe('john wick')
  })
  test('get by id', () => {
    store.createInvoice({
      clientName: 'fahad',
      cost: 55,
    })
    const newInvoice = store.invoiceList[0]
    const invoice = store.getById(newInvoice.id)
    expect(invoice).toStrictEqual(newInvoice)
  })
})
