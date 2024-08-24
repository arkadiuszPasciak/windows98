<template>
  <form
    v-if="ticTacToeStore.form.status"
    class="TicTacToeFormStart"
    @submit="($event) => onSubmit($event)"
  >
    <TicTacToeEnterYourName />
    <TicTacToeChoosePlayer />
    <TicTacToeChooseDimension />
    <UIButton
      class="button"
      type="submit"
      data-test="tic-tac-toe-form-button"
    >
      {{ t('TicTacToeBundle.start') }}
    </UIButton>
  </form>
</template>

<script setup lang="ts">
import { useTicTacToeStore } from "@APP/src/bundles/Programs/TicTacToeBundle/Stores/TicTacToe.stores"
import TicTacToeChooseDimension from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue"
import TicTacToeChoosePlayer from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue"
import TicTacToeEnterYourName from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const ticTacToeStore = useTicTacToeStore()

const onSubmit = (event: Event): void => {
	ticTacToeStore.submitForm(event)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToeFormStart.styles.scss"
/>
