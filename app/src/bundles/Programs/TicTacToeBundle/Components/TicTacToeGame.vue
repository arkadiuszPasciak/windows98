<template>
  <div
    v-if="!ticTacToeStore.form.status"
    class="TicTacToeGame"
  >
    <TicTacToePlayers
      :user-name="ticTacToeStore.form.data.userName"
      :user-sign="ticTacToeStore.form.data.playerType"
    />

    <TicTacToeBoard :dimension-type="ticTacToeStore.form.data.dimensionType" />
  </div>
</template>

<script setup lang="ts">
import { useTicTacToeStore } from "@APP/src/bundles/Programs/TicTacToeBundle/Stores/TicTacToe.stores"
import TicTacToeBoard from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeBoard.vue"
import TicTacToePlayers from "@APP|Bundles/TicTacToeBundle/Components/TicTacToePlayers.vue"

const ticTacToeStore = useTicTacToeStore()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeGame.styles.scss"
/>
