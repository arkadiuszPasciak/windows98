<template>
  <button class="UIButton" :class="`v-${variant} s-${size}`" type="button">
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
      required: true,
    },
    size: {
      type: String as PropType<'small' | 'medium'>,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIButton.styles.scss';
</style>
