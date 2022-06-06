<template>
  <div class="container mx-auto">
    <div :class="{ 'header-container': true, 'is--layout--rtl': isRtl }">
      <div class="section">section a</div>
      <div class="section">section b</div>
      <div class="section">section c</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/store'

const { isRtl } = useGlobalStore()
</script>

<style lang="scss" scoped>
.header-container {
  @apply flex justify-between ml-auto mr-auto;
  background-color: theme('colors.slate.50');
  padding: theme('spacing.8');
  margin-bottom: theme('spacing.2');
}
</style>
