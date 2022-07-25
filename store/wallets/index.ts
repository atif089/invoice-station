import { defineStore } from 'pinia'

export interface Wallet {
  id: string
  first_name: string
  last_name: string
  phone_number: number
  email: string
  accounts: []
  status: string
  verification_status: string
  type: string
  metadata: {}
  ewallet_reference_id: string
  category: string
}

export interface WalletState {
  walletList: {
    data: Wallet[]
  }
  loading: boolean
}
const state = (): WalletState => ({
  walletList: {
    data: [],
  },
  loading: true,
})

const getters = {
  getById: (state: WalletState) => (id: string) => {
    return state.walletList.data?.find((wallet: Wallet) => wallet.id === id)
  },

  getAllWallets: (state: WalletState) => state,
}
const actions = {
  fetchAllWallets() {
    try {
      const { data, pending } = useFetch('/api/wallets')
      const wallets = data
      // @ts-ignore
      this.walletList = wallets
      // @ts-ignore
      this.loading = pending
    } catch (error) {}
  },
}

export const useWalletStore = defineStore('walletStore', {
  state,
  getters,
  actions,
})
