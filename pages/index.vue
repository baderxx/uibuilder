<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text-lg">{{ appVersion }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

// Component state
const appVersion: Ref<String> = ref('0.0.1-alpha')


</script>

<style scoped>

</style>