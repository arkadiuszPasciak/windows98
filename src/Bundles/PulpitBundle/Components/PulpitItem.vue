<template>
  <div class="PulpitItem">
    <img
      class="icon"
      width="32"
      height="32"
      :src="`src/Assets/Icons/Applications/${iconName}.png`"
      :alt="name"
    />
    <UIText class="name">{{ name }}</UIText>
  </div>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
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
  @import '@Bundles/PulpitBundle/Styles/PulpitItem.styles.scss';
</style>
