<script setup>
import { useCatStore } from '@/stores/catStore'

const catStore = useCatStore()

const getMoodEmoji = () => {
  const emojis = {
    neutral: '😐',
    happy: '😸',
    ecstatic: '😻',
  }
  return emojis[catStore.mood] || '🐱'
}
</script>

<template>
  <div class="space-y-3">
    <div class="rounded-xl bg-pink-200 p-3">
      <div class="mb-1 flex items-center justify-between">
        <span class="text-sm text-gray-600">Health Status</span>
        <span class="text-sm font-medium">{{ catStore.healthPercent.toFixed(1) }}%</span>
      </div>
      <div class="h-2.5 w-full overflow-hidden rounded-full bg-white">
        <div
          class="h-full rounded-full bg-linear-to-r from-pink-400 to-pink-800 transition-all duration-300"
          :style="{ width: catStore.healthPercent + '%' }"
        ></div>
      </div>
    </div>

    <div class="rounded-xl bg-purple-200 p-3">
      <div class="mb-1 flex items-center justify-between">
        <span class="text-sm text-gray-600"> Level Progress</span>
        <span class="text-sm font-medium">{{ catStore.expProgress.toFixed(1) }}%</span>
      </div>
      <div class="h-2.5 w-full overflow-hidden rounded-full bg-white">
        <div
          class="h-full rounded-full bg-linear-to-r from-purple-400 to-purple-800 transition-all duration-300"
          :style="{ width: catStore.expProgress + '%' }"
        ></div>
      </div>
      <div class="mt-2 text-right text-xs text-gray-500">
        EXP to next level: {{ catStore.expToNextLevel }}
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <div class="rounded-xl bg-blue-200 p-3 text-center">
        <p class="mb-1 text-xs text-gray-600">Current Level</p>
        <p class="text-lg font-medium text-black">{{ catStore.level || 5 }}</p>
      </div>
      <div class="rounded-xl bg-green-200 p-3 text-center">
        <p class="mb-1 text-xs text-gray-600">Mood</p>
        <p class="mb-1">{{ getMoodEmoji() }}</p>
        <p class="text-xs font-medium">{{ catStore.moodDescription }}</p>
      </div>
    </div>
  </div>
</template>
