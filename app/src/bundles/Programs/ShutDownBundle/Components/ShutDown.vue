<template>
  <UIModal
    class="ShutDown"
    :title="t('ShutDownBundle.title')"
    :resize-window="false"
    width="330px"
    height="180px"
    :modal-state="programStore.modalShutDown"
    @close-modal="closeModal"
  >
    <div class="content">
      <img
        class="icon"
        width="32"
        height="32"
        src="/icons/applications/mycomputer.png"
        alt="My computer"
        data-test="shut-down-icon"
      >
      <UIText
        class="description"
        data-test="shut-down-description"
      >
        {{ t('ShutDownBundle.description') }}
      </UIText>
      <UIRadio
        class="checkbox-shut-down"
        :name="shutDownRadioInputName"
        :checked="true"
        :model-value="EShutDownRadioCheck.SHUT_DOWN"
        @update:model-value="checkedRadioBoxes = $event"
      >
        {{ t('ShutDownBundle.shut-down') }}
      </UIRadio>
      <UIRadio
        class="checkbox-restart"
        :name="shutDownRadioInputName"
        :model-value="EShutDownRadioCheck.RESTART"
        @update:model-value="checkedRadioBoxes = $event"
      >
        {{ t('ShutDownBundle.restart') }}
      </UIRadio>
      <UIButton
        class="button is-ok"
        data-test="shut-down-button-ok"
        @click="triggerEvent"
      >
        {{ t('ShutDownBundle.ok') }}
      </UIButton>
      <UIButton
        class="button is-cancel"
        data-test="shut-down-button-cancel"
        @click="closeModal"
      >
        {{ t('ShutDownBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import {
	restartSystem,
	shutDownSystem,
} from "@APP/src/bundles/Programs/ShutDownBundle/Services/ShutDown.services"
import {
	EShutDownRadioCheck,
	type IShutDownRadioCheck,
	shutDownRadioInputName,
} from "@APP/src/bundles/Programs/ShutDownBundle/Supports/ShutDown.supports"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UIRadio from "@APP|Bundles/UIRadioBundle/Components/UIRadio.vue"
import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const programStore = useProgramStore()

const checkedRadioBoxes = ref<IShutDownRadioCheck>(
	EShutDownRadioCheck.SHUT_DOWN,
)

const closeModal = (): void => {
	programStore.updateShutDownModal(false)
}

const triggerEvent = (): void => {
	if (checkedRadioBoxes.value === EShutDownRadioCheck.RESTART) {
		restartSystem(window)
	} else if (checkedRadioBoxes.value === EShutDownRadioCheck.SHUT_DOWN) {
		shutDownSystem(window)
	} else {
		return
	}

	closeModal()
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/ShutDownBundle/Styles/ShutDown.styles.scss"
/>
