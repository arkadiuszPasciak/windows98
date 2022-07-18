<template>
  <div class="Start">
    <UIButton
      class="button-start"
      variant="primary"
      size="medium"
      @click="togglePrimaryPanel"
    >
      {{ t('Pulpit.start') }}
    </UIButton>

    <StartPanel
      v-if="primaryPanelStatus"
      variant="primary"
      size="medium"
      :class="primaryPanelStatus ? 'is-active' : ''"
    >
      <StartPanelItem
        v-for="(app, id) in apps"
        :key="`start-primary-item-${id}`"
        size="medium"
        :name="app.data.name"
        :icon-name="app.data.iconName"
      />
    </StartPanel>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import StartPanel from '@Bundles/StartBundle/Components/StartPanel.vue'
  import StartPanelItem from '@Bundles/StartBundle/Components/StartPanelItem.vue'
  import { useStartStore } from '@Bundles/StartBundle/Stores/Start.stores'
  import { IStartStorePanels } from '@Bundles/StartBundle/Support/Start.support'

  const { t } = useI18n()
  const store = useStartStore()

  const apps = store.$state.apps as IStartStorePanels[]

  const primaryPanelStatus: Ref<boolean> = ref(false)

  const togglePrimaryPanel = () => {
    primaryPanelStatus.value = !primaryPanelStatus.value
  }
</script>

<i18n src="@Bundles/StartBundle/Locales/Start.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/StartBundle/Styles/Start.styles.scss';
</style>
