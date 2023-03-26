<template>
  <div class="StartPanel" :class="`v-${variant}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      required: true,
    },
  })
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/StartBundle/Styles/StartPanel.styles.scss"
/>
