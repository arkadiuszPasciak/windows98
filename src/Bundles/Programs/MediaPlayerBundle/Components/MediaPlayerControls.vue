<template>
  <div class="MediaPlayerControls">
    <MediaPlayerProgress class="progress" />
    <MediaPlayerButtonControl class="button-play" type="play" :active="true" />
    <MediaPlayerButtonControl
      class="button-pauza"
      type="pauza"
      :active="true"
    />
    <MediaPlayerButtonControl class="button-stop" type="stop" :active="true" />
    <MediaPlayerButtonControl class="button-mute" type="mute" :active="true" />
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
