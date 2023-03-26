<template>
  <div class="Clock">
    <p v-if="time" class="time">{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref, onBeforeUnmount } from 'vue'
  import { Nullable } from 'vitest'
  import { useClockStore } from '@Bundles/ClockBundle/Stores/Clock.stores'

  const store = useClockStore()
  const time = ref(store.$state.time) as Ref<Nullable<string>>

  const updateTime = (): void => {
    store.updateTime()

    if (time.value !== store.$state.time) {
      time.value = store.$state.time
    }
  }

  const interval = setInterval(updateTime, 1000)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/ClockBundle/Styles/Clock.styles.scss';
</style>
