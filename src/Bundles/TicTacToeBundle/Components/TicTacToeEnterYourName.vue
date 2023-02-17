<template>
  <div class="TicTacToeEnterYourName">
    <UIInput
      id="run-input"
      v-model:modelValue="modelValue"
      class="input"
      :label-name="t('TicTacToeBundle.enter-your-name')"
      label-position="top"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

  const { t } = useI18n()

  const modelValue = ref(t('TicTacToeBundle.default-player')) as Ref<string>
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeEnterYourName.styles.scss';
</style>
