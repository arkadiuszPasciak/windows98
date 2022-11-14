<template>
  <input
    id="volume"
    class="MediaPlayerVolumeControl"
    value="1"
    data-mute="0.5"
    type="range"
    max="1"
    min="0"
    step="0.01"
  />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerVolumeControl.styles.scss';
</style>
