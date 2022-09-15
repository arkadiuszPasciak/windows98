<template>
  <button
    class="UIButton"
    :class="`variant-${variant} size-${size}`"
    type="button"
  >
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    size: {
      type: String as PropType<'small' | 'medium'>,
      default: 'medium',
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIButton.styles.scss';
</style>
