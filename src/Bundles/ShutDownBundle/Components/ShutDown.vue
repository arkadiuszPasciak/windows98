<template>
  <UIModal
    class="ShutDown"
    :title="t('ShutDownBundle.title')"
    :resize-window="false"
    :width="330"
    :height="180"
    :modal-state="shutDownStore.modal"
    @close-modal="closeModal"
  >
    <div class="content">
      <img
        class="icon"
        width="32"
        height="32"
        src="src/Assets/Icons/Applications/mycomputer.png"
        alt="My computer"
      />
      <UIText class="description">{{ t('ShutDownBundle.description') }}</UIText>
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
      <UIButton class="button is-ok" @click="triggerEvent">
        {{ t('ShutDownBundle.ok') }}
      </UIButton>
      <UIButton class="button is-cancel" @click="closeModal">
        {{ t('ShutDownBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import {
    restartSystem,
    shutDownSystem,
  } from '@Bundles/ShutDownBundle/Services/ShutDown.services'
  import { useShutDownStore } from '@Bundles/ShutDownBundle/Stores/ShutDown.stores'
  import {
    EShutDownRadioCheck,
    IShutDownRadioCheck,
    shutDownRadioInputName,
  } from '@Bundles/ShutDownBundle/Supports/ShutDown.supports'

  const { t } = useI18n()

  const shutDownStore = useShutDownStore()

  const checkedRadioBoxes = ref('shut-down') as Ref<IShutDownRadioCheck>

  const closeModal = (): void => {
    shutDownStore.updateModal(false)
  }

  const triggerEvent = () => {
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

<i18n src="@Bundles/ShutDownBundle/Locales/ShutDown.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/ShutDownBundle/Styles/ShutDown.styles.scss';
</style>
