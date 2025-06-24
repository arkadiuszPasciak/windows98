<template>
  <div class="Start">
    <UIButton
      class="button-start"
      data-test="start-button-open"
      :disabled="!apps ? true : false"
      @click="togglePrimaryPanel"
    >
      <template #icon-left>
        <img
          class="button-icon"
          :width="23"
          :height="23"
          src="/icons/applications/windows.png"
          :alt="t('StartBundle.windows-logo')"
        >
      </template>
      {{ t('StartBundle.start') }}
    </UIButton>

    <StartPanel
      v-if="primaryPanelStatus && apps"
      variant="primary"
      :class="primaryPanelStatus ? 'is-active' : ''"
    >
      <template
        v-for="(app) in apps"
        :key="`start-primary-item-${app}`"
      >
        <StartPanelItem
          size="medium"
          :name="app.data.name"
          :icon-name="app.data.iconName"
          :class="app.items ? 'is-arrow' : ''"
          @open-program="openProgram(app.data.name)"
        >
          <StartPanel
            v-if="app.items"
            variant="secondary"
          >
            <template
              v-for="(appSecondary) in app.items"
              :key="`start-primary-item-${appSecondary}`"
            >
              <StartPanelItem
                v-if="appSecondary.data"
                size="small"
                :name="appSecondary.data.name"
                :icon-name="appSecondary.data.iconName"
                :class="appSecondary.items ? 'is-arrow' : ''"
                @open-program="openProgram(appSecondary.data.name)"
              >
                <StartPanel
                  v-if="appSecondary.items"
                  variant="secondary"
                >
                  <template
                    v-for="(appTertiary) in appSecondary.items"
                    :key="`start-primary-item-${appTertiary}`"
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
import { useStartStore } from "@APP/src/bundles/Programs/StartBundle/Stores/Start.stores"
import type { IStartStoreApps } from "@APP/src/bundles/Programs/StartBundle/Supports/Start.supports"
import { useProgramManager } from "@APP/src/configs/app/hooks"
import StartPanel from "@APP|Bundles/StartBundle/Components/StartPanel.vue"
import StartPanelItem from "@APP|Bundles/StartBundle/Components/StartPanelItem.vue"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const store = useStartStore()

const apps = store.$state.apps as IStartStoreApps[]
const { runProgram } = useProgramManager()

const primaryPanelStatus = ref<boolean>(false)

const togglePrimaryPanel = (): void => {
	if (apps) {
		primaryPanelStatus.value = !primaryPanelStatus.value
	}
}

const openProgram = (programName: string): void => {
	switch (programName) {
		case "StartBundle.calculator":
			runProgram("calculator", true)
			break
		case "StartBundle.notepad":
			runProgram("notepad", true)
			break
		case "StartBundle.run":
			runProgram("run", true)
			break
		case "StartBundle.settings":
			runProgram("settings", true)
			break
		case "StartBundle.shut-down":
			runProgram("shutDown", true)
			break
		case "StartBundle.tic-tac-toe":
			runProgram("ticTacToe", true)
			break
		case "StartBundle.timer":
			runProgram("timer", true)
			break
	}

	togglePrimaryPanel()
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/StartBundle/Styles/Start.styles.scss"
/>
