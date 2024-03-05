<template>
  <button
    class="AudioButton"
    type="button"
    @click="getMedia"
  >
    <img
      class="image"
      :src="`/icons/audio-button${status ? '' : '-off'}.png`"
      :alt="t('AudioBundle.button-description')"
      width="16"
      height="16"
    >
  </button>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { muteAllSound } from "@APP|Bundles/AudioBundle/Services/Audio.services"
import { ref } from "vue"

const { t } = useI18n()
const status = ref<boolean>(true)

const getMedia = () => {
	status.value = !status.value
	muteAllSound(status.value)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/AudioBundle/Styles/AudioButton.styles.scss"
/>
