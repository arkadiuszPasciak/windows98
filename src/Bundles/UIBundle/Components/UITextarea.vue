<template>
  <div class="UITextarea" :class="classes">
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

  const props = defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    type: {
      type: String as PropType<'basic' | 'notepad'>,
      default: 'basic',
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

  const classes = [
    `variant-${props.variant} label-position-${props.labelPosition}`,
    `${props.type === 'notepad' ? 'type-notepad' : ''}`,
  ] as Array<string>
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITextarea.styles.scss';
</style>
