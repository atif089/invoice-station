<template>
  <NuxtLayout name="main">
    <div class="px-4">
      <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
        <h3 class="mb-4 text-xl font-bold">Create New Invoice</h3>
        <FormKit
          id="createInvoice"
          type="form"
          submit-label="Create Invoice"
          @submit="create"
        >
          <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
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
              <div class="flex gap-4">
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
              <div>
                <FormKit
                  name="description"
                  label="Product Description"
                  placeholder="create a personal portfolio"
                  validation=""
                />
              </div>
            </div>
            <div class="col-span-1">
              <div v-for="n in numberOfItems" :key="n" class="border-b-2 py-4">
                <div class="mb-4">
                  <FormKit
                    :name="`item_name_${n}`"
                    label="Item Name"
                    placeholder="eg. Website Design"
                    validation="required|alpha_spaces:latin|length:3"
                  />
                </div>
                <div class="mb-4">
                  <FormKit
                    :name="`item_description_${n}`"
                    label="Item Description"
                    placeholder="(optional)"
                    validation=""
                  />
                </div>
                <div class="flex gap-4">
                  <div>
                    <FormKit
                      :name="`price_${n}`"
                      label="Price"
                      placeholder="$200"
                      type="number"
                      validation="required"
                    />
                  </div>
                  <div>
                    <FormKit
                      :name="`quantity_${n}`"
                      label="Quantity"
                      placeholder="1"
                      type="number"
                      value="1"
                      validation="required"
                    />
                  </div>
                  <div>
                    <FormKit
                      :name="`discount_${n}`"
                      label="Discount"
                      placeholder="20%"
                      type="number"
                      validation="required|min:1|max:100"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <button
                  class="mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  @click="numberOfItems++"
                >
                  Add New Item
                </button>
                <button
                  class="ml-4 mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  @click="numberOfItems > 0 && numberOfItems--"
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
            </div>
          </div>
        </FormKit>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useInvoiceStore, InvoiceAdd } from '@/store/invoices'

const { createInvoice } = useInvoiceStore()
const numberOfItems = ref<number>(1)

const create = (formData: InvoiceAdd) => {
  createInvoice({ invoice_data: { ...formData } })
  this.$formkit.reset('createInvoice')
}
</script>
