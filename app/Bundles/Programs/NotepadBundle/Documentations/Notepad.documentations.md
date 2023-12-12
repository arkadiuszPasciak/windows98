---
title: NotepadBundle
description: DocumentationBundle.description
description_content: NotepadBundle.description-content
services: DocumentationBundle.services
services_content_1: NotepadBundle.services-content-1
services_content_2: NotepadBundle.services-content-2
services_content_3: NotepadBundle.services-content-3
services_content_4: NotepadBundle.services-content-4
services_content_5: NotepadBundle.services-content-5
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

<i18n src="@APP|Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@APP|Bundles/NotepadBundle/Locales/Notepad.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
