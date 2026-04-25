<script setup>
import { useCatStore } from '@/stores/catStore'

const catStore = useCatStore()
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="mb-2 text-xs text-gray-500 uppercase">Basic Info</p>
      <div class="space-y-2 rounded-xl bg-linear-to-r from-pink-50 to-rose-50 p-4">
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Name:</span>
          <span class="text-sm font-medium">{{ catStore.name }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Level:</span>
          <span class="text-sm font-medium">{{ catStore.level }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Experience:</span>
          <span class="text-sm font-medium">{{ catStore.exp }} / {{ catStore.maxExp }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Health:</span>
          <span class="text-sm font-medium">{{ catStore.health }} / {{ catStore.maxHealth }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Mood:</span>
          <span class="text-sm font-medium">{{ catStore.mood }}</span>
        </div>
      </div>
    </div>

    <div>
      <p class="mb-2 text-xs text-gray-500 uppercase">Inventory</p>
      <div class="rounded-xl bg-linear-to-r from-purple-50 to-blue-50 p-4">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🐟</span>
            <div>
              <p class="text-xs text-gray-600">Tuna</p>
              <p class="text-sm font-medium">{{ catStore.inventory.tuna }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-lg">🥫</span>
            <div>
              <p class="text-xs text-gray-600">Canned Food</p>
              <p class="text-sm font-medium">{{ catStore.inventory.treats }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-lg">🧶</span>
            <div>
              <p class="text-xs text-gray-600">Yarns</p>
              <p class="text-sm font-medium">{{ catStore.inventory.yarn }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-lg">🐭</span>
            <div>
              <p class="text-xs text-gray-600">Toy Mouse</p>
              <p class="text-sm font-medium">{{ catStore.inventory.toyMouse }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="mb-2 text-xs text-gray-500 uppercase">Stats</p>
      <div class="grid grid-cols-3 gap-2">
        <div class="rounded-xl bg-linear-to-br from-pink-50 to-pink-100 p-3 text-center">
          <div class="mb-1 text-2xl">❤️</div>
          <p class="text-xs text-gray-600">Health</p>
          <p class="text-sm font-medium">
            {{ ((catStore.health / catStore.maxHealth) * 100).toFixed(1) }}%
          </p>
        </div>
        <div class="rounded-xl bg-linear-to-br from-blue-50 to-blue-100 p-3 text-center">
          <div class="mb-1 text-2xl">⭐</div>
          <p class="text-xs text-gray-600">Progress</p>
          <p class="text-sm font-medium">
            {{ ((catStore.exp / catStore.maxExp) * 100).toFixed(1) }}%
          </p>
        </div>
        <div class="rounded-xl bg-linear-to-br from-yellow-50 to-yellow-100 p-3 text-center">
          <div class="mb-1 text-2xl">🎯</div>
          <p class="text-xs text-gray-600">Next Lvl</p>
          <p class="text-sm font-medium">{{ catStore.level + 1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
