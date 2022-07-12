<template>
  <label class="UICheckbox" :class="`v-${variant}`">
    <input
      class="input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
    />

    <span class="checkmark">
      <i class="icon" />
    </span>

    <p v-if="$slots.default" class="text"><slot /></p>
  </label>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: true,
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UICheckbox.styles.scss';
</style>
