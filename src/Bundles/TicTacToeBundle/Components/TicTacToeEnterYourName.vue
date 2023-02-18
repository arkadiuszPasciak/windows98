<template>
  <div class="TicTacToeEnterYourName">
    <UIInput
      id="run-input"
      v-model:modelValue="ticTacToeStore.userName"
      class="input"
      :label-name="t('TicTacToeBundle.enter-your-name')"
      label-position="top"
    />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

  const { t } = useI18n()

  const ticTacToeStore = useTicTacToeStore()

  onMounted(() => {
    ticTacToeStore.userName = t('TicTacToeBundle.default-player')
  })
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeEnterYourName.styles.scss';
</style>
