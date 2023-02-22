<template>
  <div v-if="!ticTacToeStore.isStartValidate" class="TicTacToeGame">
    <TicTacToePlayers
      :user-name="ticTacToeStore.userName"
      :user-sign="ticTacToeStore.playerType"
    />

    <TicTacToeBoard :dimension-type="ticTacToeStore.dimensionType" />
  </div>
</template>

<script setup lang="ts">
  import TicTacToeBoard from '@Bundles/TicTacToeBundle/Components/TicTacToeBoard.vue'
  import TicTacToePlayers from '@Bundles/TicTacToeBundle/Components/TicTacToePlayers.vue'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'
  import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'

  const ticTacToeStore = useTicTacToeStore()

  const ticTacToeWinningStates = new TicTacToeWinningStates(
    ticTacToeStore.dimensionType,
  )
</script>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeGame.styles.scss';
</style>
