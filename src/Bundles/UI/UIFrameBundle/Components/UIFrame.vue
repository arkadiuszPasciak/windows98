<template>
  <div class="UIFrame" :data-test="`ui-frame-${title?.toLowerCase()}`">
    <UIText
      v-if="title"
      class="title"
      :data-test="`frame-title-${title}`.toLowerCase()"
    >
      {{ title }}
    </UIText>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UITextBundle/Components/UIText.vue'

  defineProps({
    title: {
      type: String,
      required: false,
    },
  })
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/UIFrameBundle/Styles/UIFrame.styles.scss"
/>
