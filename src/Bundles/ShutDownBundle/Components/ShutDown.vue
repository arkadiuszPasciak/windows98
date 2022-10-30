<template>
  <UIModal
    class="ShutDown"
    :title="t('ShutDownBundle.title')"
    :resize-window="false"
    :width="330"
    :height="180"
  >
    <p class="description">{{ t('ShutDownBundle.description') }}</p>
    <UIRadio
      class="checkbox-shut-down"
      name="shut-down-checkbox"
      :checked="true"
    >
      {{ t('ShutDownBundle.shut-down') }}
    </UIRadio>
    <UIRadio class="checkbox-restart" name="shut-down-checkbox">
      {{ t('ShutDownBundle.restart') }}
    </UIRadio>
    <UIButton class="button-ok">{{ t('ShutDownBundle.ok') }}</UIButton>
    <UIButton class="button-cancel">{{ t('ShutDownBundle.cancel') }}</UIButton>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'

  const { t } = useI18n()
</script>

<i18n src="@Bundles/ShutDownBundle/Locales/ShutDown.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/ShutDownBundle/Styles/ShutDown.styles.scss';
</style>
