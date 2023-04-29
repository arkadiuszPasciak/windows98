<template>
  <div class="UITextarea" :class="classes">
    <label
      v-if="labelName"
      class="label"
      :data-test="`ui-textarea-label-${id}`"
      :for="id"
    >
      {{ labelName }}
    </label>
    <textarea
      :id="id"
      class="textarea"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :data-test="`ui-textarea-${id}`"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  const props = defineProps({
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
    `label-position-${props.labelPosition}`,
    `${props.type === 'notepad' ? 'type-notepad' : ''}`,
  ] as Array<string>
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/UITextareaBundle/Styles/UITextarea.styles.scss"
/>
