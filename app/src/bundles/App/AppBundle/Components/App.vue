<template>
  <HomePage />
</template>

<script setup lang="ts">
import { useClockStore } from "@APP/src/bundles/Programs/ClockBundle/Stores/Clock.stores"
import { initAppConfig } from "@APP/src/configs/app"
import HomePage from "@APP|Views/HomePage/HomePage.vue"
import { onBeforeMount } from "vue"

const clockStore = useClockStore()

onBeforeMount(() => {
	initAppConfig()

	clockStore.updateTime()
})
</script>

<style lang="scss"></style>
