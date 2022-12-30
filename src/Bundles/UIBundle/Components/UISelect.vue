<template>
  <select
    :id="id"
    v-model="value"
    class="UISelect"
    :class="`variant-${variant}`"
    :name="id"
    :disabled="disabled"
    :required="required"
  >
    <option
      v-for="option in options"
      :key="`${id}-${option}`"
      :value="option.value"
      class="option"
    >
      {{ t(option.name) }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { TUISelectPropsObject } from '@Bundles/UIBundle/Supports/UISelect.supports'

  const props = defineProps({
    variant: {
      type: String as PropType<'primary'>,
      defaut: 'primary',
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<TUISelectPropsObject>,
      required: true,
    },
  })

  const { t } = useI18n()

  const emit = defineEmits(['update:modelValue'])

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>

<i18n src="@Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>
<i18n src="@Bundles/ThemeBundle/Locales/Theme.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UISelect.styles.scss';
</style>
