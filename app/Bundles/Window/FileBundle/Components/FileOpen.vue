<template>
  <div class="FileOpen">
    <div
      class="open-file"
      data-test="file-open-button"
      @click="openFile"
    >
      <slot />
    </div>
    <input
      ref="input"
      class="read-file"
      type="file"
      @change="readFile($event)"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Nullable } from "vitest"
import { openTextFileFromUserDisk } from "@APP|Bundles/FileBundle/Services/File.services"

const emits = defineEmits(["update:textFileValue"])

const input = ref<Nullable<HTMLInputElement>>(null)

const openFile = (): void => {
	if (!input?.value) {
		return
	}

	input.value.click()
}

const readFile = async (event: Event): Promise<void> => {
	const result = await openTextFileFromUserDisk(event)

	emits("update:textFileValue", result)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/FileBundle/Styles/FileOpen.styles.scss"
/>
