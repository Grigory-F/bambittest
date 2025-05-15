<script setup lang="ts">
import { Header } from '@shared/ui'
</script>

<template>
  <div class="app-layout">
    <Header />
    <main class="app-layout__content">
      <slot></slot>
    </main>
  </div>
</template>
