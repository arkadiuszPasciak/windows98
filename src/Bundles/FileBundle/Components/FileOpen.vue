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
  import { Nullable } from 'vite-node'
  import { ref, Ref } from 'vue'

  const input = ref(null) as Ref<Nullable<HTMLInputElement>>

  const openFile = (): void => {
    if (!input?.value) {
      return
    }

    input.value.click()
  }

  const readFile = (event: Event): void => {
    console.log(event)
  }
</script>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/FileOpen.styles.scss';
</style>
