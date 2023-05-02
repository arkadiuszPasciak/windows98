<template>
  <label class="UIRadio">
    <input
      class="input"
      type="radio"
      :value="modelValue"
      :disabled="disabled"
      :checked="checked"
      :name="name"
      :data-test="generateDataTestName('input', name, modelValue)"
      @input="$emit('update:modelValue', modelValue)"
    />

    <span
      class="radio"
      :data-test="generateDataTestName('icon', name, modelValue)"
    ></span>

    <UIText
      v-if="$slots.default"
      class="text"
      :data-test="generateDataTestName('label', name, modelValue)"
    >
      <slot />
    </UIText>
  </label>
</template>

<script setup lang="ts">
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'
  import { generateDataTestName } from '@APP|Bundles/UIRadioBundle/Services/UIRadio.services'

  defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/UIRadioBundle/Styles/UIRadio.styles.scss"
/>
