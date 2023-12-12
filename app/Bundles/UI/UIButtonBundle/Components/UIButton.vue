<template>
  <button
    class="UIButton"
    :class="`size-${size}`"
    type="button"
    :disabled="disabled"
  >
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
        'small' | 'medium' | 'calculator' | 'media-player' | 'tic-tac-toe'
      >,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/UIButtonBundle/Styles/UIButton.styles.scss"
/>
