<template>
  <UIFrame
    class="TimezoneSwitcher"
    :title="t('TimezoneBundle.title')"
  >
    <UISelect
      id="timezones"
      class="select"
      :model-value="currentTimezone ?? MTimezones[6].value"
      :options="MTimezones"
    />
  </UIFrame>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import UIFrame from "@APP|Bundles/UIFrameBundle/Components/UIFrame.vue"
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"
import { MTimezones } from "@APP|Bundles/TimezoneBundle/Mocks/Timezone.mocks"
import { getTimezone } from "@APP|Bundles/TimezoneBundle/Services/Timezone.services"

const currentTimezone = getTimezone(new Date())
const { t } = useI18n()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimezoneBundle/Styles/TimezoneSwitcher.styles.scss"
/>
