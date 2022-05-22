<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text-lg">
      {{ getAppVersion }} - {{ $t('message') }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store'

definePageMeta({
  layout: 'default',
})

const { getAppVersion } = useGlobalStore()
</script>

<style scoped></style>
