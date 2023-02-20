<template>
  <form class="TicTacToeStart" @submit="($event) => onSubmit($event)">
    <TicTacToeEnterYourName />
    <TicTacToeChoosePlayer />
    <TicTacToeChooseDimension />
    <UIButton class="button" type="submit">
      {{ t('TicTacToeBundle.start') }}
    </UIButton>
  </form>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import TicTacToeChooseDimension from '@Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue'
  import TicTacToeChoosePlayer from '@Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue'
  import TicTacToeEnterYourName from '@Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const { t } = useI18n()

  const ticTacToeStore = useTicTacToeStore()

  const onSubmit = (event: any) => {
    ticTacToeStore.submitForm(event)
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeStart.styles.scss';
</style>
