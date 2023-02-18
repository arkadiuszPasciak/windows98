<template>
  <div class="TicTacToeStart">
    <TicTacToeEnterYourName />
    <TicTacToeChoosePlayer />
    <TicTacToeChooseDimension />
    <UIButton class="button">
      {{ t('TicTacToeBundle.start') }}
    </UIButton>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import TicTacToeChooseDimension from '@Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue'
  import TicTacToeChoosePlayer from '@Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue'
  import TicTacToeEnterYourName from '@Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue'

  const { t } = useI18n()
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeStart.styles.scss';
</style>
