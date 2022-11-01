<template>
  <div class="CalculatorDisplay">{{ value }}</div>
</template>

<script setup lang="ts">
  defineProps({
    value: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/CalculatorDisplay.styles.scss';
</style>
