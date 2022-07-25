import { defineStore } from 'pinia'

export interface Account {
  account_id: string
  account_id_type: string
  currency: string
  country_iso: string
  issuing_id: string
}

export interface AccountState {
  bank_accounts: {
    data: {
      data: {
        bank_accounts: Account[]
      }
    }
  }
  loading: boolean
}
const state = (): AccountState => ({
  bank_accounts: {
    data: {
      data: {
        bank_accounts: [],
      },
    },
  },
  loading: true,
})

const getters = {
  getById: (state: AccountState) => (id: string) => {
    return state.bank_accounts.data.data.bank_accounts.find(
      (account: Account) => account.account_id === id
    )
  },

  getAllAccounts: (state: AccountState) => state,
}
const actions = {
  fetchAllAccounts(walletId: string) {
    try {
      const { data, pending, refresh } = useFetch(
        `/api/wallet/${walletId}/vIban`
      )

      // @ts-ignore
      this.bank_accounts.data = data
      // @ts-ignore
      this.loading = pending
      // @ts-ignore
      this.refresh = refresh
    } catch (error) {}
  },
  refreshState() {
    // @ts-ignore
    this.refresh()
  },
}

export const useAccountStore = defineStore('AccountStore', {
  state,
  getters,
  actions,
})
