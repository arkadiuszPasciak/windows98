<template>
  <div class="UIFrame">
    <UIText v-if="title" class="title">{{ title }}</UIText>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
    title: {
      type: String,
      required: false,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIFrame.styles.scss';
</style>
