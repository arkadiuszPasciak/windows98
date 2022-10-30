<template>
  <div class="StartPanelItem" :class="`s-${size}`">
    <img
      class="icon"
      :width="size === 'medium' ? 25 : 18"
      :height="size === 'medium' ? 25 : 18"
      :src="`src/Assets/Icons/Applications/${iconName}.png`"
    />
    <UIText>{{ t(name) }}</UIText>

    <div v-if="$slots.default" class="under-panel"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
    size: {
      type: String as PropType<'small' | 'medium'>,
    },
    name: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  })

  const { t } = useI18n()
</script>

<i18n src="@Bundles/StartBundle/Locales/Start.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/StartBundle/Styles/StartPanelItem.styles.scss';
</style>
