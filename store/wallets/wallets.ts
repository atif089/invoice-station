import { defineStore } from 'pinia'

export interface Account {}
export interface Wallet {
  id: string
  first_name: string
  last_name: string
  phone_number: number
  email: string
  accounts: Account[]
  status: string
  verification_status: string
  type: string
  metadata: {}
  ewallet_reference_id: string
  category: string
}
export interface InvoiceAdd {
  clientName: string
  cost: number
}
export interface WalletState {
  walletList: Wallet[]
}
const state = (): WalletState => ({
  walletList: [],
})

const getters = {
  getById: (state: WalletState) => (id: string) => {
    return state.walletList?.find((wallet: Wallet) => wallet.id === id)
  },

  getAllWallets: (state: WalletState) => state.walletList,
}
const actions = {
  async fetchAllWallets() {
    try {
      const wallets = await $fetch('/api/wallets')
      // @ts-ignore
      this.walletList = wallets.data
    } catch (error) {}
  },
}

export const useWalletStore = defineStore('walletStore', {
  state,
  getters,
  actions,
})
