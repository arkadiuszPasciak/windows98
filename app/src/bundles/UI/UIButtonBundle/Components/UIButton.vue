<template>
  <button
    class="UIButton"
    :class="`size-${size}`"
    type="button"
    :disabled="disabled"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

defineProps({
	size: {
		type: String as PropType<
			"small" | "medium" | "media-player" | "tic-tac-toe"
		>,
		default: "medium",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})
</script>

<style lang="scss" scoped src="@APP|Bundles/UIButtonBundle/Styles/UIButton.styles.scss" />
