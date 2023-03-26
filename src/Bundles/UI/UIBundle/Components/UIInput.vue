<template>
  <div
    class="UIInput"
    :class="labelName ? `label-position-${labelPosition}` : ''"
  >
    <label
      v-if="labelName"
      class="label"
      :data-test="`ui-input-label-${id}`"
      :for="id"
    >
      {{ labelName }}
    </label>
    <input
      :id="id"
      class="input"
      :data-test="`ui-input-${id}`"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :min="min"
      :max="max"
      :name="id"
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
      type: String as PropType<'text' | 'password' | 'email' | 'number'>,
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
      type: [String, Number],
      required: true,
    },
    labelName: {
      type: String,
      required: false,
    },
    labelPosition: {
      type: String as PropType<'top' | 'left'>,
      default: 'top',
    },
    min: {
      type: Number,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIInput.styles.scss';
</style>
