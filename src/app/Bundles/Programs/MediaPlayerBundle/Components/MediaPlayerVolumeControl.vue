<template>
  <div class="MediaPlayerVolumeControl">
    <progress id="progress-bar" class="progress" value="0" min="0"></progress>
    <input
      id="volume"
      class="input"
      value="1"
      data-mute="0.5"
      type="range"
      max="1"
      min="0"
      step="0.01"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/MediaPlayerBundle/Styles/MediaPlayerVolumeControl.styles.scss"
/>
