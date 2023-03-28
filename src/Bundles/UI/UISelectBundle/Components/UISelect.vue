<template>
  <div
    class="UISelect"
    :class="props.labelName ? `label-position-${labelPosition}` : ''"
  >
    <label
      v-if="labelName"
      class="label"
      :data-test="`ui-select-label-${id}`"
      :for="id"
    >
      {{ labelName }}
    </label>
    <select
      :id="id"
      v-model="value"
      class="select"
      :name="id"
      :data-test="`ui-select-${id}`"
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
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { TUISelectPropsObject } from '@Bundles/UISelectBundle/Supports/UISelect.supports'

  const props = defineProps({
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
      type: [String, Number],
      required: true,
    },
    options: {
      type: Object as PropType<TUISelectPropsObject>,
      required: true,
    },
    labelName: {
      type: String,
      required: false,
    },
    labelPosition: {
      type: String as PropType<'top' | 'left'>,
      default: 'top',
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
<i18n src="@Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>
<i18n src="@Bundles/TimezoneBundle/Locales/Timezone.locales.json"></i18n>
<i18n src="@Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/UISelectBundle/Styles/UISelect.styles.scss"
/>
