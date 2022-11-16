<template>
  <div class="MediaPlayerControls">
    <MediaPlayerProgress class="progress" />
    <MediaPlayerButtonControl class="button-play" type="play" />
    <MediaPlayerButtonControl class="button-pauza" type="pauza" />
    <MediaPlayerButtonControl class="button-stop" type="stop" />
    <MediaPlayerButtonControl class="button-mute" type="mute" />
    <MediaPlayerVolumeControl class="volume-control" />
  </div>
</template>

<script setup lang="ts">
  import MediaPlayerButtonControl from '@Bundles/MediaPlayerBundle/Components/MediaPlayerButtonControl.vue'
  import MediaPlayerVolumeControl from '@Bundles/MediaPlayerBundle/Components/MediaPlayerVolumeControl.vue'
  import MediaPlayerProgress from '@Bundles/MediaPlayerBundle/Components/MediaPlayerProgress.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerControls.styles.scss';
</style>
