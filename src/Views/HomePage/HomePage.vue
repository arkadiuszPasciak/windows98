<template>
  <div class="HomePage">
    test 123
    <TestBundle />
  </div>
</template>

<script setup lang="ts">
  import TestBundle from '@Bundles/TestBundle/Components/TestBundle.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    color: black;
    @include font('bold', 10, 12);
  }
</style>
