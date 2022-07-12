<template>
  <div class="UIRange" :class="`v-${variant} p-${position}`">
    <label v-if="labelNameStart" class="label is-start" :for="id">{{
      labelNameStart
    }}</label>

    <label
      v-if="labelNameMiddle && position === 'vertical'"
      class="label is-middle"
      :for="id"
      >{{ labelNameMiddle }}</label
    >

    <input
      :id="id"
      class="range"
      type="range"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <label v-if="labelNameEnd" class="label is-end" :for="id">{{
      labelNameEnd
    }}</label>
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
    minValue: {
      type: Number,
      required: false,
      default: 0,
    },
    maxValue: {
      type: Number,
      required: false,
      default: 10,
    },
    stepValue: {
      type: Number,
      required: false,
      default: 1,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    position: {
      type: String as PropType<'horizontal' | 'vertical'>,
      required: true,
    },
    labelNameStart: {
      type: String,
      required: false,
    },
    labelNameMiddle: {
      type: String,
      required: false,
    },
    labelNameEnd: {
      type: String,
      required: false,
    },
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIRange.styles.scss';
</style>
