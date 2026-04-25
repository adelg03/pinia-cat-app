<script setup>
import Status from '@/components/CatStatus.vue'
import Buttons from '@/components/CatButtons.vue'
import Inventory from '@/components/CatInventory.vue'
</script>

<template>
  <main
    class="flex min-h-screen flex-1 items-center justify-center bg-linear-to-t from-[#94BBE9] to-[#EEAECA]"
  >
    <Status />
    <Inventory />
    <Buttons />
  </main>
</template>
