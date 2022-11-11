<template>
  <UIModal
    class="Run"
    :title="t('RunBundle.title')"
    :resize-window="false"
    :width="330"
    :height="180"
    :modal-state="programStore.modalShutDown"
    @close-modal="closeModal"
  >
    <div class="content">
      <img
        class="icon"
        width="32"
        height="32"
        src="src/Assets/Icons/Applications/mycomputer.png"
        alt="Run computer"
      />
      <UIText class="description">{{ t('RunBundle.description') }}</UIText>
      <!-- TODO here will be input to write name of program  -->
      <UIButton class="button is-ok" @click="openProgram">
        {{ t('RunBundle.ok') }}
      </UIButton>
      <UIButton class="button is-cancel" @click="closeModal">
        {{ t('RunBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateShutDownModal(false)
  }

  const openProgram = () => {
    closeModal()
  }
</script>

<i18n src="@Bundles/RunBundle/Locales/Run.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/RunBundle/Styles/Run.styles.scss';
</style>
