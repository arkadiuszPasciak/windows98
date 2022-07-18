<template>
  <div class="Start">
    <UIButton
      class="button-start"
      variant="primary"
      size="medium"
      :disabled="!apps ? true : false"
      @click="togglePrimaryPanel"
    >
      {{ t('Pulpit.start') }}
    </UIButton>

    <StartPanel
      v-if="primaryPanelStatus && apps"
      variant="primary"
      :class="primaryPanelStatus ? 'is-active' : ''"
    >
      <template v-for="(app, id) in apps" :key="`start-primary-item-${id}`">
        <StartPanelItem
          size="medium"
          :name="app.data.name"
          :icon-name="app.data.iconName"
          :class="app.items ? 'is-arrow' : ''"
        >
          <StartPanel v-if="app.items" variant="secondary">
            <template
              v-for="(appSecondary, idSecondary) in app.items"
              :key="`start-primary-item-${idSecondary}`"
            >
              <StartPanelItem
                v-if="appSecondary.data"
                size="small"
                :name="appSecondary.data.name"
                :icon-name="appSecondary.data.iconName"
                :class="appSecondary.items ? 'is-arrow' : ''"
              >
                <StartPanel v-if="appSecondary.items" variant="secondary">
                  <template
                    v-for="(appTertiary, idTertiary) in appSecondary.items"
                    :key="`start-primary-item-${idTertiary}`"
                  >
                    <StartPanelItem
                      v-if="appTertiary"
                      size="small"
                      :name="appTertiary.data.name"
                      :icon-name="appTertiary.data.iconName"
                    />
                  </template>
                </StartPanel>
              </StartPanelItem>
            </template>
          </StartPanel>
        </StartPanelItem>
      </template>
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
  import { IStartStoreApps } from '@Bundles/StartBundle/Support/Start.support'

  const { t } = useI18n()
  const store = useStartStore()

  const apps = store.$state.apps as IStartStoreApps[]

  const primaryPanelStatus: Ref<boolean> = ref(false)

  const togglePrimaryPanel = () => {
    if (apps) {
      primaryPanelStatus.value = !primaryPanelStatus.value
    }
  }
</script>

<i18n src="@Bundles/StartBundle/Locales/Start.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/StartBundle/Styles/Start.styles.scss';
</style>
