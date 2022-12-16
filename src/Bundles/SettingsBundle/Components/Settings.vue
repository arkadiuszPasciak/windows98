<template>
  <UIModal
    class="Settings"
    :title="t('SettingsBundle.title')"
    :resize-window="false"
    :width="335"
    :height="415"
    :modal-state="programStore.modalRun"
    @close-modal="closeModal"
  >
    <div class="content">
      <!-- ... here will be content -->
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateRunModal(false)
  }
</script>

<i18n src="@Bundles/SettingsBundle/Locales/Settings.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/SettingsBundle/Styles/Settings.styles.scss';
</style>
