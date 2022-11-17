<template>
  <div class="MediaPlayerProgress">
    <progress id="progress-bar" class="progress" value="0" min="0"></progress>
    <input id="seek" class="input" value="0" min="0" type="range" step="1" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '@Bundles/MediaPlayerBundle/Styles/MediaPlayerProgress.styles.scss';
</style>
