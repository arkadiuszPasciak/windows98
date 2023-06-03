<template>
  <div class="UIStepper" :class="disabled ? 'is-disabled' : ''">
    <UIInput
      v-if="fieldModification"
      :id="input.id"
      v-model:modelValue="value"
      class="input"
      :disabled="disabled ?? false"
      :data-test="`${input.id}-input`"
    />

    <UIText v-else class="field" :data-test="`${input.id}-input`">
      {{ value }}
    </UIText>

    <UIButton
      class="button increase"
      size="small"
      :disabled="disabled ?? false"
      :data-test="`${input.id}-increase`"
      @click="increase"
    />

    <UIButton
      class="button decrease"
      size="small"
      :disabled="disabled ?? false"
      :data-test="`${input.id}-decrease`"
      @click="decrease"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import UIButton from '@APP|Bundles/UIButtonBundle/Components/UIButton.vue'
  import UIInput from '@APP|Bundles/UIInputBundle/Components/UIInput.vue'
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'

  interface UIStepperProps {
    input: {
      id: string
    }
    fieldModification: boolean
    modelValue: number
    disabled?: boolean
  }

  interface UIStepperEmits {
    (e: 'increase'): void
    (e: 'decrease'): void
    (e: 'value', value: number): void
  }

  const props = defineProps<UIStepperProps>()

  const emit = defineEmits<UIStepperEmits>()

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('value', value)
    },
  })

  const increase = (): void => {
    emit('increase')
  }

  const decrease = (): void => {
    emit('decrease')
  }
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/UIStepperBundle/Styles/UIStepper.styles.scss"
/>
