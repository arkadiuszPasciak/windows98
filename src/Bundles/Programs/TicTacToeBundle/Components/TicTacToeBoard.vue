<template>
  <div
    class="TicTacToeBoard"
    :class="
      ticTacToeStore.game.status !== ETicTacToeStatusGame.PLAYING
        ? 'is-blocked'
        : ''
    "
    :style="{
      'grid-template-columns': `repeat(${amountOfColumns}, 30px)`,
      'grid-template-rows': `repeat(${amountOfRows}, 30px)`,
    }"
  >
    <UIButton
      v-for="index in amountOfFields"
      :key="index"
      class="field"
      size="tic-tac-toe"
      :data-field="index"
      @click="($event) => clickButton($event)"
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
  import { useTicTacToeStore } from '@Bundles/TicTacToeBundle/Stores/TicTacToe.stores'
  import { ETicTacToeStatusGame } from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'
  import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

  const props = defineProps({
    dimensionType: {
      type: String as PropType<TTicTacToeRadioDimension>,
      required: true,
    },
  })

  const { amountOfColumns, amountOfFields, amountOfRows } = new TicTacToeBoard(
    props.dimensionType,
  )

  const ticTacToeStore = useTicTacToeStore()

  const clickButton = (event: Event): void => {
    ticTacToeStore.makeMove(event)
  }
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/TicTacToeBundle/Styles/TicTacToeBoard.styles.scss"
/>
