<template>
  <div class="UITabs">
    <div class="tabs">
      <button
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-button-${tab}-${id}`"
        class="tab"
        :class="id === activeIndex ? 'active' : ''"
        type="button"
        :data-test="`ui-tabs-button-${id}`"
        @click="setActiveTab(id)"
      >
        {{ t(tab.title) }}
      </button>
    </div>
    <div class="content">
      <component
        :is="tab.component"
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-content-${tab}-${id}`"
        class="content-tab"
        :class="id === activeIndex ? 'active' : ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, Ref, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { TUITabsProps } from '@Bundles/UITabsBundle/Supports/UITabs.supports'

  defineProps({
    tabs: {
      type: Object as PropType<TUITabsProps>,
      required: true,
    },
  })

  const { t } = useI18n()

  const activeIndex = ref(0) as Ref<number>

  const setActiveTab = (id: number): void => {
    if (activeIndex.value === id) {
      return
    }

    activeIndex.value = id
  }
</script>

<i18n src="@Bundles/SettingsBundle/Locales/Settings.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/UITabsBundle/Styles/UITabs.styles.scss"
/>
