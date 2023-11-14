<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()


counter.increment()
</script>

<template>
  <!-- Access the state directly from the store -->
  <div @click="counter.increment()">Current Count: {{ counter.count }}</div>
</template>