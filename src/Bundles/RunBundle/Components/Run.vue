<template>
  <UIModal
    class="Run"
    :title="t('RunBundle.title')"
    :resize-window="false"
    :width="330"
    :height="165"
    :modal-state="programStore.modalRun"
    @close-modal="closeModal"
  >
    <div class="content">
      <img
        class="icon"
        width="32"
        height="32"
        src="/icons/applications/run.png"
        alt="Run computer"
      />
      <UIText class="description">{{ t('RunBundle.description') }}</UIText>
      <UIInput
        id="run-input"
        v-model:modelValue="modelValue"
        variant="primary"
        class="input"
        :label-name="t('RunBundle.open')"
        label-position="left"
      />
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
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import { checkAndRunProgram } from '@Bundles/RunBundle/Services/Run.services'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateRunModal(false)
  }

  const openProgram = (): void => {
    checkAndRunProgram(modelValue.value, t)
  }

  const modelValue = ref('') as Ref<string>
</script>

<i18n src="@Bundles/RunBundle/Locales/Run.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/RunBundle/Styles/Run.styles.scss';
</style>
