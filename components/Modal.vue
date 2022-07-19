<template>
  <div>
    <teleport to="body">
      <div
        v-show="isActive"
        ref="modal"
        class="modal-bg fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        @click="closeModal"
      >
        <div class="modal rounded-lg bg-white p-6">
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 h-14 w-14 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500">
              {{ props.title }}
            </h3>
            <button
              type="button"
              class="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
              @click="$emit('close', true)"
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
              @click="$emit('close', false)"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
interface Props {
  title: string
  isActive: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['close'])
const modal = ref(null)

const closeModal = (e: any) => {
  if (e.target === modal.value) {
    emit('close', true)
  }
}
</script>
