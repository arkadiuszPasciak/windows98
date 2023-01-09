<!-- TODO add update model value @update:model-value=""  -->
<template>
  <UIInput
    id="year-switcher"
    type="number"
    model-value="2000"
    :min="1950"
    :max="2050"
  />
</template>

<script setup lang="ts">
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
</script>

<!-- TODO set styles with design -->
<!-- <style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/YearSwitcher.styles.scss';
</style> -->
