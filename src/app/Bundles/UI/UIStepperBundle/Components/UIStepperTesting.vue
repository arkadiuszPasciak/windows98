<template>
  <UIStepper
    class="UIStepperTesting"
    :input="{ id: 'ui-stepper-testing' }"
    :field-modification="false"
    :model-value="uiStepperTestingStore.value ?? 0"
    @increase="increase"
    @decrease="decrease"
    @value="uiStepperTestingStore.value"
  />
</template>

<script setup lang="ts">
  import UIStepper from '@APP|Bundles/UIStepperBundle/Components/UIStepper.vue'
  import { useUIStepperTestingStore } from '@APP|Bundles/UIStepperBundle/Stores/UIStepperTesting.stores'

  const uiStepperTestingStore = useUIStepperTestingStore()

  const increase = (): void => {
    uiStepperTestingStore.increaseValue()
  }

  const decrease = (): void => {
    uiStepperTestingStore.decreaseValue()
  }
</script>

<style lang="scss" scoped />
