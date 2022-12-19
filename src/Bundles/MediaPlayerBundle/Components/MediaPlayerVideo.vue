<template>
  <video id="video" class="MediaPlayerVideo" controls preload="metadata">
    <source :src="src" type="video/mp4" />
  </video>
</template>

<script setup lang="ts">
  defineProps({
    src: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerVideo.styles.scss';
</style>
