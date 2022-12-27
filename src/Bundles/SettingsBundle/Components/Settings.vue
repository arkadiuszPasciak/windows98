<template>
  <UIModal
    class="Settings"
    :title="t('Settings.title')"
    :resize-window="false"
    :width="335"
    :height="415"
    :modal-state="programStore.modalSettings"
    @close-modal="closeModal"
  >
    <UITabs :tabs="tabs" />
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UITabs from '@Bundles/UIBundle/Components/UITabs.vue'
  import SettingsGeneral from '@Bundles/SettingsBundle/Components/SettingsGeneral.vue'
  import SettingsLanguages from '@Bundles/SettingsBundle/Components/SettingsLanguages.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import { TUITabsProps } from '@Bundles/UIBundle/Supports/UITabs.supports'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const tabs = [
    {
      title: 'Settings.general',
      component: SettingsGeneral,
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

<i18n src="@Bundles/SettingsBundle/Locales/Settings.locales.json"></i18n>

<style lang="scss" scoped></style>
