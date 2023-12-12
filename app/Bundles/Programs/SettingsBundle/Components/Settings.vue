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
  import { useI18n } from 'vue-i18n'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import UITabs from '@APP|Bundles/UITabsBundle/Components/UITabs.vue'
  import SettingsDateTime from '@APP|Bundles/SettingsBundle/Components/SettingsDateTime.vue'
  import SettingsGeneral from '@APP|Bundles/SettingsBundle/Components/SettingsGeneral.vue'
  import SettingsLanguages from '@APP|Bundles/SettingsBundle/Components/SettingsLanguages.vue'
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'
  import { TUITabsProps } from '@APP|Bundles/UITabsBundle/Supports/UITabs.supports'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const tabs = [
    {
      title: 'Settings.general',
      component: SettingsGeneral,
    },
    {
      title: 'Settings.date-time',
      component: SettingsDateTime,
    },
    {
      title: 'Settings.languages',
      component: SettingsLanguages,
    },
  ] as TUITabsProps

  const closeModal = (): void => {
    programStore.updateSettingsModal(false)
  }
</script>

<i18n src="@APP|Bundles/SettingsBundle/Locales/Settings.locales.json"></i18n>

<style lang="scss" scoped />
