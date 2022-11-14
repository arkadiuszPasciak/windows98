<template>
  <div class="MediaPlayerProgress">
    <progress id="progress-bar" value="0" min="0"></progress>
    <input id="seek" class="seek" value="0" min="0" type="range" step="1" />
    <div id="seek-tooltip" class="seek-tooltip">00:00</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerProgress.styles.scss';
</style>
