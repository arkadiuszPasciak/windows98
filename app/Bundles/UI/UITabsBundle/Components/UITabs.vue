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
import { PropType, ref } from "vue"
import { useI18n } from "vue-i18n"
import { TUITabsProps } from "@APP|Bundles/UITabsBundle/Supports/UITabs.supports"

defineProps({
	tabs: {
		type: Object as PropType<TUITabsProps>,
		required: true,
	},
})

const { t } = useI18n()

const activeIndex = ref<number>(0)

const setActiveTab = (id: number): void => {
	if (activeIndex.value === id) {
		return
	}

	activeIndex.value = id
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/UITabsBundle/Styles/UITabs.styles.scss"
/>
