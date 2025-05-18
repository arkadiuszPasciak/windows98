<template>
  <mf-notepad v-if="programStore.modalNotepad" :on-close-program="closeProgram"></mf-notepad>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"

const programStore = useProgramStore()

const closeProgram = (): void => {
	programStore.updateCalculatorModal(false)
}
</script>
