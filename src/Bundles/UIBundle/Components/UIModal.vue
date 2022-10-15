<template>
  <div
    class="UIModal"
    :class="`variant-${variant}`"
    :style="`width: 800px; height: 800px;`"
  >
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <UIButton class="button-close" size="small">
        <template #icon-left>
          <img
            class="button-close-icon"
            :width="8"
            :height="7"
            src="src/Assets/Icons/close-modal.svg"
            :alt="t('UIBundle.close-window')"
          />
        </template>
      </UIButton>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import { useI18n } from 'vue-i18n'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
  })

  const { t } = useI18n()
</script>

<i18n src="@Bundles/UIBundle/Locales/UIBundle.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIModal.styles.scss';
</style>
