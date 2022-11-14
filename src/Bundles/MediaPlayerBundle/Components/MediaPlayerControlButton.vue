<template>
  <button
    class="MediaPlayerControlButton"
    :class="`type-${type}`"
    type="button"
    :aria-label="t(`MediaPlayer.control-button.${type}`)"
  />
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'

  defineProps({
    type: {
      type: String as PropType<'play' | 'pauza' | 'stop'>,
      required: true,
    },
  })

  const { t } = useI18n()
</script>

<i18n src="@Bundles/MediaPlayerBundle/Locales/MediaPlayer.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerControlButton.styles.scss';
</style>
