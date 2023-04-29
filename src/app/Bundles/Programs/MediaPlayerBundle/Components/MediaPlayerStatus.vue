<template>
  <p class="MediaPlayerStatus">{{ status }}</p>
</template>

<script setup lang="ts">
  defineProps({
    status: {
      type: String,
      required: true,
    },
  })
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/MediaPlayerBundle/Styles/MediaPlayerStatus.styles.scss"
/>
