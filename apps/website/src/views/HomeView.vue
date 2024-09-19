<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { GameButton } from '@mkt/custom-components'
</script>

<template>
  <main>
    <GameButton message="Hi"/>
    <TheWelcome />
  </main>
</template>
