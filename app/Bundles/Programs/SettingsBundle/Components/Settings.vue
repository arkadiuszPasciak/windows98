<template>
  <UIModal
    class="Settings"
    :title="t('Settings.title')"
    :resize-window="false"
    width="420px"
    height="415px"
    :modal-state="programStore.modalSettings"
    @close-modal="closeModal"
  >
    <UITabs :tabs="tabs" />
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP|Bundles/ProgramBundle/Stores/Program.stores"
import SettingsDateTime from "@APP|Bundles/SettingsBundle/Components/SettingsDateTime.vue"
import SettingsGeneral from "@APP|Bundles/SettingsBundle/Components/SettingsGeneral.vue"
import SettingsLanguages from "@APP|Bundles/SettingsBundle/Components/SettingsLanguages.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UITabs from "@APP|Bundles/UITabsBundle/Components/UITabs.vue"
import type { TUITabsProps } from "@APP|Bundles/UITabsBundle/Supports/UITabs.supports"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const programStore = useProgramStore()

const tabs = [
	{
		title: "Settings.general",
		component: SettingsGeneral,
	},
	{
		title: "Settings.date-time",
		component: SettingsDateTime,
	},
	{
		title: "Settings.languages",
		component: SettingsLanguages,
	},
] as TUITabsProps

const closeModal = (): void => {
	programStore.updateSettingsModal(false)
}
</script>

<style lang="scss" scoped />
