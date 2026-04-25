<script setup>
import { useCatStore } from '@/stores/catStore'

const catStore = useCatStore()
</script>

<template>
  <div class="space-y-5">
    <div>
      <p class="mb-3 text-sm font-medium text-black">Feed Cat</p>
      <div class="space-y-2">
        <button
          class="flex w-full items-center justify-between rounded-xl bg-pink-500 px-4 py-3 text-white shadow-md transition-all hover:bg-pink-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="catStore.inventory.tuna === 0"
          @click="catStore.feed('tuna')"
        >
          <span>Tuna 🐟</span>
          <span class="text-sm">({{ catStore.inventory.tuna }} left)</span>
        </button>
        <button
          class="flex w-full items-center justify-between rounded-xl bg-purple-500 px-4 py-3 text-white shadow-md transition-all hover:bg-purple-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="catStore.inventory.treats === 0"
          @click="catStore.feed('treats')"
        >
          <span>Canned Food 🥫</span>
          <span class="text-sm">({{ catStore.inventory.treats }} left)</span>
        </button>
      </div>
    </div>

    <div class="border-t border-purple-100"></div>

    <div>
      <p class="mb-3 text-sm font-medium text-black">Give A Gift</p>
      <div class="space-y-2">
        <button
          class="flex w-full items-center justify-between rounded-xl bg-blue-500 px-4 py-3 text-white shadow-lg shadow-md transition-all hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="catStore.inventory.yarn === 0"
          @click="catStore.gift('yarn')"
        >
          <span>🧶 Gift Yarn</span>
          <span class="text-sm">({{ catStore.inventory.yarn }} left)</span>
        </button>
        <button
          class="flex w-full items-center justify-between rounded-xl bg-teal-400 px-4 py-3 text-white shadow-md transition-all hover:bg-teal-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="catStore.inventory.toyMouse === 0"
          @click="catStore.gift('toyMouse')"
        >
          <span>🐭 Gift Toy Mouse</span>
          <span class="text-sm">({{ catStore.inventory.toyMouse }} left)</span>
        </button>
      </div>
    </div>

    <div class="border-t border-purple-100"></div>

    <div>
      <p class="mb-3 text-sm font-medium text-black">Other</p>
      <div class="space-y-2">
        <button
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-white shadow-md transition-all hover:bg-amber-700 hover:shadow-lg"
          @click="catStore.forceLevelUp"
        >
          <span>CLick to Level Up</span>
        </button>
        <button
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-400 px-4 py-3 text-white shadow-lg shadow-md transition-all hover:bg-rose-800 hover:shadow-lg"
          @click="catStore.resetGame"
        >
          <span>🔄 Reset All Data</span>
        </button>
      </div>
    </div>
  </div>
</template>
