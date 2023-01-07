<template>
  <button class="UIButton" :class="`size-${size}`" type="button">
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    size: {
      type: String as PropType<
        'small' | 'medium' | 'calculator' | 'media-player'
      >,
      default: 'medium',
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIButton.styles.scss';
</style>
