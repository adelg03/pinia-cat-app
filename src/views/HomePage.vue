<script setup>
import Status from '@/components/CatStatus.vue'
import Buttons from '@/components/CatButtons.vue'
import Inventory from '@/components/CatInventory.vue'
</script>

<template>
  <main
    class="flex min-h-screen flex-1 flex-col justify-center bg-linear-to-t from-[#94BBE9] to-[#EEAECA] p-8"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col gap-6 lg:flex-row">
        <div class="flex-1">
          <div
            class="h-full rounded-3xl border border-purple-100 bg-white/70 p-6 shadow-lg backdrop-blur-sm"
          >
            <div class="flex h-full flex-col">
              <div class="mb-4 text-center">
                <h2 class="text-3xl font-bold text-pink-600">Whiskers</h2>
              </div>

              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-red-fluffy-cat-with-big-eyes-in-royalty-free-image-1701455126.jpg?crop=0.668xw:1.00xh;0.199xw,0"
                alt="Whiskers the cat"
                class="mb-4 w-full rounded-2xl border-4 border-orange-400 object-cover shadow-md"
              />

              <div class="mt-2">
                <Status />
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div
            class="h-full rounded-3xl border border-purple-100 bg-white/70 p-6 shadow-lg backdrop-blur-sm"
          >
            <Inventory />
          </div>
        </div>

        <div class="flex-1">
          <div
            class="h-full rounded-3xl border border-purple-100 bg-white/70 p-6 shadow-lg backdrop-blur-sm"
          >
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
