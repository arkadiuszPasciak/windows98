<template>
  <div
    class="UIModal"
    :class="`variant-${variant}`"
    :style="`width: 800px; height: 800px;`"
  >
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <UIButton class="button-close">
        x
        <!-- <template #icon-left>
          <img
            class="button-icon"
            :width="23"
            :height="23"
            src="src of image"
            alt="close window"
          />
        </template> -->
      </UIButton>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIModal.styles.scss';
</style>
