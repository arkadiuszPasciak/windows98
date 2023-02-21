<template>
  <div v-if="!ticTacToeStore.isStartValidate" class="TicTacToeGame">
    <TicTacToePlayers
      :user-name="ticTacToeStore.userName"
      :user-sign="ticTacToeStore.playerType"
    />
  </div>
</template>

<script setup lang="ts">
  import TicTacToePlayers from '@Bundles/TicTacToeBundle/Components/TicTacToePlayers.vue'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'

  const ticTacToeStore = useTicTacToeStore()
</script>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeGame.styles.scss';
</style>
