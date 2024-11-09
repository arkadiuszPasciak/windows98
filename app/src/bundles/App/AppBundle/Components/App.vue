<template>
  <HomePage />
</template>

<script setup lang="ts">
import { useClockStore } from "@APP/src/bundles/Programs/ClockBundle/Stores/Clock.stores"
import { mountLanguageVersionByStorage } from "@APP/src/bundles/Settings/LanguageBundle/Services/Language.services"
import { mountThemeColorByStorage } from "@APP/src/bundles/Settings/ThemeBundle/Services/Theme.services"
import { useAppConfig } from "@APP/src/configs/app"
import HomePage from "@APP|Views/HomePage/HomePage.vue"
import { onBeforeMount, onMounted } from "vue"
import { useI18n } from "vue-i18n"

const clockStore = useClockStore()
const i18n = useI18n()

onBeforeMount(() => {
	clockStore.updateTime()
	const languageVersion = mountLanguageVersionByStorage()

	if (languageVersion) {
		i18n.locale.value = languageVersion
	}

	mountThemeColorByStorage()
})

onMounted(() => {
	useAppConfig()
})
</script>

<style lang="scss"></style>
