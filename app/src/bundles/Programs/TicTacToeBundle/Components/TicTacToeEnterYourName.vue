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
import { ETicTacToeInputNames } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import UIInput from "@APP|Bundles/UIInputBundle/Components/UIInput.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const modelValue = ref<string>(t("TicTacToeBundle.default-player"))
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeEnterYourName.styles.scss"
/>
