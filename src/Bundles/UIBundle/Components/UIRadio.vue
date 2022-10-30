<template>
  <label class="UIRadio" :class="`variant-${variant}`">
    <input
      class="input"
      type="radio"
      :value="modelValue"
      :disabled="disabled"
      :checked="checked"
      :name="name"
      @input="$emit('update:modelValue', modelValue)"
    />

    <span class="radio"></span>

    <UIText v-if="$slots.default" class="text"><slot /></UIText>
  </label>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
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

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIRadio.styles.scss';
</style>
