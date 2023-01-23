<template>
  <UIModal
    class="FileSave"
    :title="t('FileBundle.title-save')"
    :resize-window="false"
    :move-window="false"
    :width="320"
    :height="100"
    :modal-state="modalState"
    @close-modal="$emit('closeModal')"
  >
    <div class="content">
      <UIInput
        id="file-save-name"
        class="input"
        :model-value="fileNameModelValue"
        :label-name="t('FileBundle.file-name')"
        label-position="left"
      />

      <UIButton @click="saveFile">{{ t('FileBundle.save') }}</UIButton>

      <UISelect
        id="file-types"
        class="select"
        :options="MFilesTextTypes"
        :model-value="MFilesTextTypes[0].value"
        :label-name="t('FileBundle.save-as-type')"
        label-position="left"
      />

      <UIButton @click="$emit('closeModal')">
        {{ t('FileBundle.cancel') }}
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
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { MFilesTextTypes } from '@Bundles/FileBundle/Mocks/File.mocks'

  defineProps({
    modalState: {
      type: Boolean,
      required: true,
    },
  })

  defineEmits(['closeModal'])

  const { t } = useI18n()

  const fileNameModelValue = ref(t('FileBundle.untitled')) as Ref<string>

  const saveFile = () => {
    console.log(123)
  }
</script>

<i18n src="@Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/FileSave.styles.scss';
</style>
