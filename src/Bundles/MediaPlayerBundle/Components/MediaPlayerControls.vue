<template>
  <div class="MediaPlayerControls">
    <MediaPlayerButtonControl type="play" />
    <MediaPlayerButtonControl type="pauza" />
    <MediaPlayerButtonControl type="stop" />
    <MediaPlayerButtonControl type="mute" />
    <MediaPlayerVolumeControl />
  </div>
</template>

<script setup lang="ts">
  import MediaPlayerButtonControl from '@Bundles/MediaPlayerBundle/Components/MediaPlayerButtonControl.vue'
  import MediaPlayerVolumeControl from '@Bundles/MediaPlayerBundle/Components/MediaPlayerVolumeControl.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerControls.styles.scss';
</style>
