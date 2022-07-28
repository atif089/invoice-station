<template>
  <NuxtLayout name="main">
    <div class="px-4">
      <div
        class="create-invoice ml-2 inline-block cursor-pointer text-cyan-600 hover:text-cyan-500"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="mb-1 h-12 w-12"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
        <h3 class="mb-4 text-xl font-bold">Create New Invoice</h3>
        <FormKit
          id="createInvoice"
          type="form"
          submit-label="Create Invoice"
          @submit="create"
        >
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="col-span-1">
              <div class="mb-4">
                <FormKit
                  name="client_name"
                  label="Client's Name"
                  placeholder="John Doe"
                  validation="required|alpha_spaces:latin|length:3"
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="client_email"
                  label="Client's Email"
                  placeholder="johndoe@example.com"
                  type="email"
                  validation="required|email"
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="street_address"
                  label="Street Address"
                  placeholder="Downtow"
                  validation="required|alpha_numeric|length:3"
                />
              </div>
              <div class="mb-4 flex gap-4">
                <div>
                  <FormKit
                    name="city"
                    label="City"
                    placeholder="New York city"
                    validation="required|alpha_spaces:latin|length:3"
                  />
                </div>
                <div>
                  <FormKit
                    name="zip_code"
                    label="Zip Code"
                    placeholder="123456"
                    type="number"
                    validation="required|number|length:6,6"
                  />
                </div>
                <div>
                  <FormKit
                    name="country"
                    label="Country"
                    placeholder="United States"
                    validation="required|alpha_spaces:latin|length:3"
                  />
                </div>
              </div>
              <div class="mb-4">
                <FormKit
                  name="access_key"
                  label="Access Key"
                  placeholder="eg. 111_test_1"
                  validation="required"
                />
              </div>
              <div class="mt-5 border-t border-dashed border-gray-500 pt-5">
                <!-- <FormKit
                  type="select"
                  label="Select VIBAN Account"
                  name="vIban"
                  validation="required"
                  placeholder="choose account"
                  :options="['chooose account']"
                >
                  <option disabled selected>Select your vIban Account</option>
                  <option
                    v-for="account in vIbanAccounts"
                    :key="account"
                    :value="account"
                  >
                    {{ account.split(' ')[0] }}
                  </option>
                </FormKit> -->
                <div class="hidden md:block">
                  <h1 class="flex justify-between text-xl">
                    Subtotal:
                    <span>${{ calculateTotal.subTotal.toFixed(2) }}</span>
                  </h1>
                  <h1 class="flex justify-between text-xl">
                    Discount:
                    <span>${{ calculateTotal.discounts.toFixed(2) }}</span>
                  </h1>
                  <h1
                    class="mt-2 mb-6 flex justify-between border-t-2 border-dashed border-cyan-600 pt-2 text-2xl"
                  >
                    Total:
                    <span class="text-3xl text-cyan-600"
                      >${{ calculateTotal.grandTotal.toFixed(2) }}</span
                    >
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-4">
                <FormKit
                  name="invoice_date"
                  label="Invoice Date"
                  placeholder="7/26/2022"
                  type="date"
                  validation="required"
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="payment_due"
                  label="Payment Due"
                  placeholder="$99"
                  type="date"
                  :validation="`date_after:${new Date().toJSON().slice(0, 10)}`"
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="payment_terms"
                  label="Payment Terms"
                  placeholder="Payment Terms"
                  type="select"
                  :options="[
                    'Net 30 days',
                    'Net 60 days',
                    'Net 90 days',
                    'Net 180 days',
                    'Custom',
                  ]"
                  validation="required"
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="description"
                  label="Product Description"
                  placeholder="create a personal portfolio"
                  validation=""
                />
              </div>
              <div class="mb-4">
                <FormKit
                  name="secrect_key"
                  label="Secrect Key"
                  placeholder="eg. 22112"
                  validation="required"
                />
              </div>
              <div
                v-if="getAllWallets?.walletList?.data"
                class="mt-5 border-t border-dashed border-gray-500 pt-5"
              >
                <FormKit
                  type="select"
                  label="Choose your Wallet"
                  name="wallet"
                  validation="required"
                  placeholder="Choose a wallet"
                  :options="['choose a wallet']"
                >
                  <option selected>choose your wallet</option>
                  <option
                    v-for="wallet in getAllWallets.walletList.data"
                    :key="wallet.id"
                    :value="wallet.id"
                  >
                    {{ wallet.id }}
                  </option>
                </FormKit>
              </div>
            </div>
            <div
              class="col-span-1 h-[50vh] overflow-y-auto rounded-lg border border-dashed border-gray-300 p-3"
            >
              <FormKit type="group" name="items" class="col-span-1">
                <div
                  v-for="n in numberOfItems"
                  :key="n"
                  class="border-b border-dashed border-gray-500 pb-4 pt-2"
                >
                  <FormKit type="group" :name="`item_${n}`">
                    <div class="mb-4">
                      <FormKit
                        name="name"
                        label="Item Name"
                        placeholder="eg. Website Design"
                        validation="required|alpha_spaces:latin|length:3"
                      />
                    </div>
                    <div class="mb-4">
                      <FormKit
                        name="description"
                        label="Item Description"
                        placeholder="(optional)"
                        validation=""
                      />
                    </div>
                    <div class="calculation flex gap-4">
                      <div>
                        <FormKit
                          v-model.lazy.number="allItems[n - 1].price"
                          name="price"
                          label="Price"
                          placeholder="$200"
                          type="number"
                          :value="0"
                          min="0"
                          validation="required|min:0"
                        />
                      </div>
                      <div>
                        <FormKit
                          v-model.lazy.number="allItems[n - 1].quantity"
                          name="quantity"
                          label="Quantity"
                          placeholder="1"
                          type="number"
                          min="1"
                          value="1"
                          validation="required|min:1"
                        />
                      </div>
                      <div>
                        <FormKit
                          v-model.lazy.number="allItems[n - 1].discount"
                          name="discount"
                          label="Discount"
                          placeholder="20%"
                          type="number"
                          value="0"
                          min="0"
                          validation="min:0|max:100"
                        />
                      </div>
                    </div>
                  </FormKit>
                </div>
                <div class="flex items-center">
                  <button
                    class="mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                    @click="addItem"
                  >
                    Add New Item
                  </button>
                  <button
                    class="ml-4 mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                    @click="numberOfItems > 1 && numberOfItems--"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </FormKit>
            </div>
          </div>
          <div class="mt-5 block md:hidden">
            <h1 class="flex justify-between text-xl">
              Subtotal: <span>${{ calculateTotal.subTotal.toFixed(2) }}</span>
            </h1>
            <h1 class="flex justify-between text-xl">
              Discount: <span>${{ calculateTotal.discounts.toFixed(2) }}</span>
            </h1>
            <h1
              class="mt-2 mb-6 flex justify-between border-t-2 border-dashed border-cyan-600 pt-2 text-2xl"
            >
              Total:
              <span class="text-3xl text-cyan-600"
                >${{ calculateTotal.grandTotal.toFixed(2) }}</span
              >
            </h1>
          </div>
        </FormKit>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { reset } from '@formkit/core'
import { useInvoiceStore, invoiceItemCost } from '@/store/invoices'
import { useProfileStore } from '@/store/profile'
import { useWalletStore } from '@/store/wallets'

const { getProfile, fetchProfile } = useProfileStore()
fetchProfile()
const { getAllWallets, fetchAllWallets } = useWalletStore()
fetchAllWallets()

const { createInvoice } = useInvoiceStore()
const numberOfItems = ref<number>(1)
const allItems = reactive<invoiceItemCost[]>([
  {
    price: 0,
    quantity: 1,
    discount: 0,
    discountPrice: 0,
    total: 0,
  },
])
const calculateTotal = computed(() => {
  return allItems.reduce(
    (acc, curr) => {
      const { price = 0, quantity = 1, discount = 0 } = curr
      const subtotal: number = +(+price * +quantity).toFixed(2)
      const discountPercentage = +((+discount / 100) * subtotal).toFixed(2)
      const total = +(subtotal - discountPercentage).toFixed(2)
      curr.discountPrice = discountPercentage
      curr.total = total

      acc.grandTotal = +(acc.grandTotal + total).toFixed(2)
      acc.subTotal = +(acc.subTotal + subtotal).toFixed(2)
      acc.discounts = +(acc.discounts + discountPercentage).toFixed(2)

      return acc
    },
    {
      grandTotal: 0,
      subTotal: 0,
      discounts: 0,
    }
  )
})

const create = async (formData: any) => {
  const walletId = formData.wallet
  const newIbanAccount = await createAccount(walletId)
  console.log(newIbanAccount)

  // append price calculation for each item
  for (const [key, value] of Object.entries(formData.items) as any) {
    const index = +key.split('_')[1] - 1

    formData.items[key] = {
      name: value.name || '',
      description: value.description || '',
      cost: allItems[index],
    }
  }

  // append grand total calculation of all items
  formData.cost = {
    ...calculateTotal.value,
  }
  console.log(formData)
  createInvoice({
    invoice_data: { ...formData, freelancer: { ...getProfile.profile } },
    iban: newIbanAccount?.data?.bank_account.iban,
    issuing_id: newIbanAccount?.data?.id,
  })
  reset('createInvoice')
  alert('Invoice created successfully!')
}

// handle adding new items
const addItem = () => {
  allItems.push({
    price: 0,
    quantity: 1,
    discount: 0,
    discountPrice: 0,
    total: 0,
  })
  numberOfItems.value++
}

// create new unique vIban account
const createAccount = async (walletId: string) => {
  const response: any = await $fetch(`/api/wallet/${walletId}/vIban`, {
    method: 'POST',
  })
  console.log(response)

  return response
}
const router = useRouter()
const goBack = () => router.back()
</script>
<style>
#createInvoice .formkit-input[type='submit'] {
  display: block;

  font-size: 1.2rem;
  margin-top: 1rem;
  @apply w-full md:w-1/3;
}
</style>
