<template>
  <div
    class="StartPanel"
    :class="`v-${variant}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

defineProps({
	variant: {
		type: String as PropType<"primary" | "secondary">,
		required: true,
	},
})
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/StartBundle/Styles/StartPanel.styles.scss"
/>
