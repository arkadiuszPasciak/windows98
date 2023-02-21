<template>
  <div
    class="TicTacToeBoard"
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
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
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
</script>

<style lang="scss" scoped>
  @import '@Bundles/TicTacToeBundle/Styles/TicTacToeBoard.styles.scss';
</style>
