<template>
  <div class="UIInput" :class="`label-position-${labelPosition}`">
    <label class="label" :for="id">{{ labelName }}</label>
    <input
      :id="id"
      class="input"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    type: {
      type: String as PropType<'text' | 'password' | 'email'>,
      default: 'text',
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
  @import '@Bundles/UIBundle/Styles/UIInput.styles.scss';
</style>
