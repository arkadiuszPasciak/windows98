<template>
  <HomePage />
</template>

<script setup lang="ts">
import { initAppConfig } from "@APP/src/configs/app"
import HomePage from "@APP|Views/HomePage/HomePage.vue"
import { onBeforeMount } from "vue"

onBeforeMount(() => {
	initAppConfig()
})
</script>

<style lang="scss"></style>
