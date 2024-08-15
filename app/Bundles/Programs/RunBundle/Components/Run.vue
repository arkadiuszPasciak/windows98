<template>
  <UIModal
    class="Run"
    :title="t('RunBundle.title')"
    :resize-window="false"
    width="330px"
    height="165px"
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
        data-test="run-icon"
      >
      <UIText
        class="description"
        data-test="run-description"
      >
        {{ t('RunBundle.description') }}
      </UIText>
      <UIInput
        id="run-input"
        v-model:modelValue="modelValue"
        class="input"
        :label-name="t('RunBundle.open')"
        label-position="left"
      />
      <UIButton
        class="button is-ok"
        data-test="run-button-ok"
        @click="openProgram"
      >
        {{ t('RunBundle.ok') }}
      </UIButton>
      <UIButton
        class="button is-cancel"
        data-test="run-button-cancel"
        @click="closeModal"
      >
        {{ t('RunBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP|Bundles/ProgramBundle/Stores/Program.stores"
import { checkAndRunProgram } from "@APP|Bundles/RunBundle/Services/Run.services"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import UIInput from "@APP|Bundles/UIInputBundle/Components/UIInput.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const programStore = useProgramStore()

const closeModal = (): void => {
	programStore.updateRunModal(false)
}

const openProgram = (): void => {
	checkAndRunProgram(modelValue.value, t)
}

const modelValue = ref<string>("")
</script>

<style lang="scss" scoped src="@APP|Bundles/RunBundle/Styles/Run.styles.scss" />
