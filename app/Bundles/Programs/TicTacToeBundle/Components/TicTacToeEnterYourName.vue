<template>
  <div class="TicTacToeEnterYourName">
    <UIInput
      :id="ETicTacToeInputNames.ENTER_YOUR_NAME"
      v-model:modelValue="modelValue"
      class="input"
      :label-name="t('TicTacToeBundle.enter-your-name')"
      label-position="top"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIInput from '@APP|Bundles/UIInputBundle/Components/UIInput.vue'
  import { ETicTacToeInputNames } from '@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

  const { t } = useI18n()

  const modelValue = ref<string>(t('TicTacToeBundle.default-player'))
</script>

<i18n src="@APP|Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeEnterYourName.styles.scss"
/>
