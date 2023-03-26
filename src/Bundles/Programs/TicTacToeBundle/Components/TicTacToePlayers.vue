<template>
  <div class="TicTacToePlayers">
    <UIFrame class="player is-user" :title="userName">
      <span class="sign" :style="{ color: colors.user }">{{ signs.user }}</span>
    </UIFrame>
    <UIFrame class="player is-computer" :title="t('TicTacToeBundle.computer')">
      <span class="sign" :style="{ color: colors.computer }">
        {{ signs.computer }}
      </span>
    </UIFrame>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIFrame from '@Bundles/UIBundle/Components/UIFrame.vue'
  import { TicTacToePlayers } from '@Bundles/TicTacToeBundle/Services/TicTacToePlayers.services'
  import { TTicTacToeRadioPlayer } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
  import { ETicTacToePlayerType } from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

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
    computer: setSignByPlayerType(
      ETicTacToePlayerType.COMPUTER,
      props.userSign,
    ),
    user: setSignByPlayerType(ETicTacToePlayerType.USER, props.userSign),
  }

  const colors = {
    computer: setColorByPlayerType(signs.computer),
    user: setColorByPlayerType(signs.user),
  }
</script>

<i18n src="@Bundles/TicTacToeBundle/Locales/TicTacToe.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/TicTacToeBundle/Styles/TicTacToePlayers.styles.scss"
/>
