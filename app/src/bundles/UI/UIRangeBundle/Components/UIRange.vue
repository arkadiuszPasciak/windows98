<template>
  <div
    class="UIRange"
    :class="`position-${position}`"
  >
    <label
      v-if="labelNameStart"
      class="label is-start"
      :for="id"
    >
      {{ labelNameStart }}
    </label>

    <label
      v-if="labelNameMiddle && position === 'vertical'"
      class="label is-middle"
      :for="id"
    >
      {{ labelNameMiddle }}
    </label>

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
    >

    <label
      v-if="labelNameEnd"
      class="label is-end"
      :for="id"
    >
      {{ labelNameEnd }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

defineProps({
	id: {
		type: String,
		required: true,
	},
	minValue: {
		type: Number,
		default: 0,
	},
	maxValue: {
		type: Number,
		default: 10,
	},
	stepValue: {
		type: Number,
		default: 1,
	},
	modelValue: {
		type: Number,
		required: true,
	},
	position: {
		type: String as PropType<"horizontal" | "vertical">,
		default: "horizontal",
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

defineEmits(["update:modelValue"])
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/UIRangeBundle/Styles/UIRange.styles.scss"
/>
