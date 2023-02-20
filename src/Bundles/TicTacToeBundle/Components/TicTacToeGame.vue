<template>
  <div v-if="!ticTacToeStore.isStartValidate" class="TicTacToeGame">board</div>
</template>

<script setup lang="ts">
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'
  const ticTacToeStore = useTicTacToeStore()
</script>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeGame.styles.scss';
</style>
