<template>
  <label class="UICheckbox" :class="`variant-${variant}`">
    <input
      class="input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
    />

    <span class="checkmark">
      <i class="icon" />
    </span>

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
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UICheckbox.styles.scss';
</style>
