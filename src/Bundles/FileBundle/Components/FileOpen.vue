<template>
  <div class="FileOpen">
    <div class="open-file" @click="openFile">
      <slot />
    </div>
    <input
      ref="input"
      class="read-file"
      type="file"
      @change="readFile($event)"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { Nullable } from 'vitest'
  import { openFileFromUserDisk } from '@Bundles/FileBundle/Services/File.services'

  const input = ref(null) as Ref<Nullable<HTMLInputElement>>

  const openFile = (): void => {
    if (!input?.value) {
      return
    }

    input.value.click()
  }

  const readFile = async (event: Event): Promise<void> => {
    const result = await openFileFromUserDisk(event)

    console.log(result)
  }
</script>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/FileOpen.styles.scss';
</style>
