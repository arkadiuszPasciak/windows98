<template>
  <div class="UITeleport">
    <UIModal title="A Complete Window" :resize-window="true" />
  </div>
</template>

<script setup lang="ts">
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITeleport.styles.scss';
</style>
