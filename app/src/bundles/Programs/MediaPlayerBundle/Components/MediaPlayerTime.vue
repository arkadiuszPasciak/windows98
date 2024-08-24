<template>
  <div class="MediaPlayerTime">
    <p class="current-time">
      {{ currentTime }}
    </p>
    <span class="slash">/</span>
    <p class="max-time">
      {{ maxTime }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
	currentTime: {
		type: String,
		required: true,
	},
	maxTime: {
		type: String,
		required: true,
	},
})
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/MediaPlayerBundle/Styles/MediaPlayerTime.styles.scss"
/>
