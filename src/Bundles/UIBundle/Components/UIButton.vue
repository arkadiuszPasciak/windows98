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
  .UIButton {
    @include font('medium', 11, 11);
    border: none;
    box-shadow: $border-raised-outer, $border-raised-inner;
    border-radius: 0;

    &:disabled {
      text-shadow: 1px 1px 0 $cl-white;
      pointer-events: none;
    }

    &:not(:disabled):active {
      box-shadow: $border-sunken-outer, $border-sunken-inner;
    }

    &.s-small {
      width: 16px;
      height: 14px;
      padding: 1px;
    }

    &.s-medium {
      height: 23px;
      min-width: 75px;
      padding: 0 12px;

      &:not(:disabled):active {
        padding: 2px 11px 0 13px;
      }

      &:focus {
        outline: 1px dotted $cl-black;
        outline-offset: -4px;
      }
    }

    &.v-primary {
      background-color: $cl-greyC0;
      color: $cl-black22;
    }
  }
</style>
