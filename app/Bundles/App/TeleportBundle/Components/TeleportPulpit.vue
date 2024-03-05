<template>
  <TeleportGrid class="TeleportPulpit">
    <Calculator />
    <MediaPlayer />
    <Notepad />
    <Run />
    <Settings />
    <ShutDown />
    <TicTacToe />
    <Timer />
  </TeleportGrid>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import TeleportGrid from "@APP|Bundles/TeleportBundle/Components/TeleportGrid.vue"

const Calculator = defineAsyncComponent(
	() => import("@APP|Bundles/CalculatorBundle/Components/Calculator.vue"),
)

const MediaPlayer = defineAsyncComponent(
	() => import("@APP|Bundles/MediaPlayerBundle/Components/MediaPlayer.vue"),
)

const Notepad = defineAsyncComponent(
	() => import("@APP|Bundles/NotepadBundle/Components/Notepad.vue"),
)

const Run = defineAsyncComponent(
	() => import("@APP|Bundles/RunBundle/Components/Run.vue"),
)

const Settings = defineAsyncComponent(
	() => import("@APP|Bundles/SettingsBundle/Components/Settings.vue"),
)

const ShutDown = defineAsyncComponent(
	() => import("@APP|Bundles/ShutDownBundle/Components/ShutDown.vue"),
)

const TicTacToe = defineAsyncComponent(
	() => import("@APP|Bundles/TicTacToeBundle/Components/TicTacToe.vue"),
)

const Timer = defineAsyncComponent(
	() => import("@APP|Bundles/TimerBundle/Components/Timer.vue"),
)
</script>

<style lang="scss" scoped></style>
