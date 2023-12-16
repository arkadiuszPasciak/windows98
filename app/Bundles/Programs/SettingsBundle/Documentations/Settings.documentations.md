---
title: SettingsBundle
description: DocumentationBundle.description
description_content: SettingsBundle.description-content
services: DocumentationBundle.services
services_content_1: SettingsBundle.services-content-1
services_content_2: SettingsBundle.services-content-2
services_content_3: SettingsBundle.services-content-3
services_content_4: SettingsBundle.services-content-4
services_content_5: SettingsBundle.services-content-5
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}
- {{ t(services_content_3) }}
- {{ t(services_content_4) }}
- {{ t(services_content_5) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
