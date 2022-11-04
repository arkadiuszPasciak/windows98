<template>
  <UIText class="CalculatorDisplay">{{ value }}</UIText>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

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
