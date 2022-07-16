<template>
  <div class="StartPanelItem" :class="`s-${size}`">
    <img
      class="icon"
      :width="size === 'medium' ? 25 : 18"
      :height="size === 'medium' ? 25 : 18"
      :src="`src/Assets/Icons/${iconName}.png`"
    />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    size: {
      type: String as PropType<'small' | 'medium'>,
    },
    name: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/StartBundle/Styles/StartPanelItem.styles.scss';
</style>
