<template>
  <label class="UIRadio" :class="`variant-${variant}`">
    <input
      class="input"
      type="radio"
      :name="name"
      :disabled="disabled"
      :checked="checked"
    />

    <span class="radio"></span>

    <p v-if="$slots.default" class="text"><slot /></p>
  </label>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
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
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIRadio.styles.scss';
</style>
