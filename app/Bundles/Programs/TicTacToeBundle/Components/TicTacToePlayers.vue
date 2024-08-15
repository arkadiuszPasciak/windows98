<template>
  <div class="TicTacToePlayers">
    <UIFrame
      class="player is-user"
      :title="userName"
    >
      <span
        class="sign"
        :style="{ color: colors.user }"
      >{{ signs.user }}</span>
    </UIFrame>
    <UIFrame
      class="player is-computer"
      :title="t('TicTacToeBundle.computer')"
    >
      <span
        class="sign"
        :style="{ color: colors.computer }"
      >
        {{ signs.computer }}
      </span>
    </UIFrame>
  </div>
</template>

<script setup lang="ts">
import { TicTacToePlayers } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToePlayers.services"
import type { TTicTacToeRadioPlayer } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import { ETicTacToePlayerType } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports"
import UIFrame from "@APP|Bundles/UIFrameBundle/Components/UIFrame.vue"
import type { PropType } from "vue"
import { useI18n } from "vue-i18n"

const props = defineProps({
	userName: {
		type: String,
		required: true,
	},
	userSign: {
		type: String as PropType<TTicTacToeRadioPlayer>,
		required: true,
	},
})

const { t } = useI18n()

const { setColorByPlayerType, setSignByPlayerType } = new TicTacToePlayers()

const signs = {
	computer: setSignByPlayerType(ETicTacToePlayerType.COMPUTER, props.userSign),
	user: setSignByPlayerType(ETicTacToePlayerType.USER, props.userSign),
}

const colors = {
	computer: setColorByPlayerType(signs.computer),
	user: setColorByPlayerType(signs.user),
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TicTacToeBundle/Styles/TicTacToePlayers.styles.scss"
/>
