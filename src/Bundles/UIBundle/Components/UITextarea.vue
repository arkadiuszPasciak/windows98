<template>
  <div class="UITextarea" :class="`v-${variant} l-p-${labelPosition}`">
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
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    readonly: {
      type: Boolean,
      required: false,
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
      required: true,
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITextarea.styles.scss';
</style>
