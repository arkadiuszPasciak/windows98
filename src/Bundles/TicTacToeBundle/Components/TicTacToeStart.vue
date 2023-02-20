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
    event.preventDefault()

    if (!event.target) {
      return
    }

    const formData = new FormData(event.target)

    console.log(formData)

    const playerNameValue = formData.get(
      'tic-tac-toe-enter-your-name',
    ) as string

    const choosePlayerValue = formData.get(
      'tic-tac-toc-choose-player',
    ) as string

    const chooseDimensionValue = formData.get(
      'tic-tac-toc-choose-dimension',
    ) as string
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeStart.styles.scss';
</style>
