<template>
  <mf-notepad v-if="programs.notepad" :on-close-program="closeProgram"></mf-notepad>
</template>

<script setup lang="ts">
import { useProgramManager } from "@APP/src/configs/app"
const { runProgram, programs } = useProgramManager()

const closeProgram = (): void => {
	runProgram("notepad", false)
}
</script>
