<template>
  <label class="UICheckbox">
    <input
      class="input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      :data-test="`ui-checkbox-input-${id}`"
    />

    <span class="checkmark" :data-test="`ui-checkbox-checkmark-${id}`">
      <i class="icon" />
    </span>

    <UIText
      v-if="$slots.default"
      :data-test="`ui-checkbox-text-${id}`"
      class="text"
    >
      <slot />
    </UIText>
  </label>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
    id: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/UIBundle/Styles/UICheckbox.styles.scss"
/>
