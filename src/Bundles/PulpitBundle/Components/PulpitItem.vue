<template>
  <div class="PulpitItem">
    <img
      class="icon"
      width="32"
      height="32"
      :src="`src/Assets/Icons/Applications/${iconName}.png`"
    />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
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
