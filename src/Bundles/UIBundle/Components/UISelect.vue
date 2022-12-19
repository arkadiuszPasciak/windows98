<template>
  <select
    :id="id"
    v-model="value"
    class="UISelect"
    :class="`variant-${variant}`"
    :name="id"
    :disabled="disabled"
    :required="required"
  >
    <option
      v-for="option in options"
      :key="`${id}-${option}`"
      :value="option.value"
      class="option"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { TUISelectPropsObject } from '@Bundles/UIBundle/Supports/UISelect.supports'

  const props = defineProps({
    variant: {
      type: String as PropType<'primary'>,
      defaut: 'primary',
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<TUISelectPropsObject>,
      required: true,
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UISelect.styles.scss';
</style>
