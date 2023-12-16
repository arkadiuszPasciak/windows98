<template>
  <div
    class="StartPanelItem"
    :class="`s-${size}`"
    @click="$emit('openProgram')"
  >
    <img
      class="icon"
      :width="size === 'medium' ? 25 : 18"
      :height="size === 'medium' ? 25 : 18"
      :src="`/icons/applications/${iconName}.png`"
    />
    <UIText class="name">{{ t(name) }}</UIText>

    <div v-if="$slots.default" class="under-panel"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'

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

  defineEmits(['openProgram'])
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/StartBundle/Styles/StartPanelItem.styles.scss"
/>
