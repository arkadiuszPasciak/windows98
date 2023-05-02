<template>
  <div class="MediaPlayerInformation">
    <MediaPlayerStatus status="playing" />
    <MediaPlayerTime current-time="00:00" max-time="01:10" />
  </div>
</template>

<script setup lang="ts">
  import MediaPlayerStatus from '@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerStatus.vue'
  import MediaPlayerTime from '@APP|Bundles/MediaPlayerBundle/Components/MediaPlayerTime.vue'
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/MediaPlayerBundle/Styles/MediaPlayerInformation.styles.scss"
/>
