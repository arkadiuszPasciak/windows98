<template>
  <div class="Clock">
    <p
      v-if="time"
      class="time"
    >
      {{ time }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useClockStore } from "@APP/src/bundles/Programs/ClockBundle/Stores/Clock.stores"
import type { Maybe } from "@windows98/toolkit"
import { onBeforeUnmount, ref } from "vue"

const store = useClockStore()
const time = ref<Maybe<string>>(store.$state.time)

const updateTime = (): void => {
	store.updateTime()

	if (time.value !== store.$state.time) {
		time.value = store.$state.time
	}
}

const interval = setInterval(updateTime, 1000)

onBeforeUnmount(() => {
	clearInterval(interval)
})
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/ClockBundle/Styles/Clock.styles.scss"
/>
