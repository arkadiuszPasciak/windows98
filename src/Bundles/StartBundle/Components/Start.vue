<template>
  <div class="Start">
    <UIButton
      class="button-start"
      :disabled="!apps ? true : false"
      @click="togglePrimaryPanel"
    >
      <template #icon-left>
        <img
          class="button-icon"
          :width="23"
          :height="23"
          :src="`src/Assets/Icons/Applications/windows.png`"
          :alt="t('StartBundle.windows-logo')"
        />
      </template>
      {{ t('StartBundle.start') }}
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
          @open-program="openProgram(app.data.name)"
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
                @open-program="openProgram(appSecondary.data.name)"
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
                      @open-program="openProgram(appTertiary.data.name)"
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
  import { defineAsyncComponent, Ref, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import { useStartStore } from '@Bundles/StartBundle/Stores/Start.stores'
  import { IStartStoreApps } from '@Bundles/StartBundle/Supports/Start.supports'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const StartPanel = defineAsyncComponent(
    () => import('@Bundles/StartBundle/Components/StartPanel.vue'),
  )

  const StartPanelItem = defineAsyncComponent(
    () => import('@Bundles/StartBundle/Components/StartPanelItem.vue'),
  )

  const { t } = useI18n()
  const store = useStartStore()

  const apps = store.$state.apps as IStartStoreApps[]
  const programStore = useProgramStore()

  const primaryPanelStatus: Ref<boolean> = ref(false)

  const togglePrimaryPanel = () => {
    if (apps) {
      primaryPanelStatus.value = !primaryPanelStatus.value
    }
  }

  const openProgram = (programName: string): void => {
    switch (programName) {
      case 'StartBundle.shut-down':
        programStore.updateShutDownModal(true)
        break
      case 'StartBundle.calculator':
        programStore.updateCalculatorModal(true)
        break
    }
  }
</script>

<i18n src="@Bundles/StartBundle/Locales/Start.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/StartBundle/Styles/Start.styles.scss';
</style>
