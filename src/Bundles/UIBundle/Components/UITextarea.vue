<template>
  <div
    class="UITextarea"
    :class="`variant-${variant} label-position-${labelPosition}`"
  >
    <label class="label" :for="id">{{ labelName }}</label>
    <textarea
      :id="id"
      class="textarea"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    id: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    labelPosition: {
      type: String as PropType<'top' | 'left'>,
      default: 'top',
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITextarea.styles.scss';
</style>
