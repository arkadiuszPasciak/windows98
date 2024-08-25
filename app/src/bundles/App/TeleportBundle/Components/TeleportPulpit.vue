<template>
  <TeleportGrid class="TeleportPulpit">
    <Calculator />
    <Notepad />
    <Run />
    <Settings />
    <ShutDown />
    <TicTacToe />
    <Timer />
  </TeleportGrid>
</template>

<script setup lang="ts">
import TeleportGrid from "@APP|Bundles/TeleportBundle/Components/TeleportGrid.vue"
import { defineAsyncComponent } from "vue"

const Calculator = defineAsyncComponent(
	() => import("@APP|Bundles/ProgramBundle/Components/Calculator.vue"),
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
	() => import("@APP|Bundles/ProgramBundle/Components/Timer.vue"),
)
</script>

<style lang="scss" scoped></style>
