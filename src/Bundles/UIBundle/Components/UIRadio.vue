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
