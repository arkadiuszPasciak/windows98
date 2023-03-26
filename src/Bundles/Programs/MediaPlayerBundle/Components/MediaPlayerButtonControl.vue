<template>
  <UIButton
    class="MediaPlayerButtonControl"
    :class="classes"
    size="media-player"
    :aria-label="t(`MediaPlayer.button-control.${type}`)"
  />
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'

  const props = defineProps({
    type: {
      type: String as PropType<'play' | 'pauza' | 'stop' | 'mute'>,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  })

  const { t } = useI18n()

  const classes = [
    `type-${props.type}`,
    `${props.active ? 'active' : ''}`,
  ] as Array<string>
</script>

<i18n src="@Bundles/MediaPlayerBundle/Locales/MediaPlayer.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/MediaPlayerBundle/Styles/MediaPlayerButtonControl.styles.scss"
/>
