---
title: LanguageBundle
description: DocumentationBundle.description
description_content: LanguageBundle.description-content
services: DocumentationBundle.services
services_content_1: LanguageBundle.services-content-1
services_content_2: LanguageBundle.services-content-2
services_content_3: LanguageBundle.services-content-3
services_content_4: LanguageBundle.services-content-4
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}
- {{ t(services_content_3) }}
- {{ t(services_content_4) }}

<i18n src="@APP|Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@APP|Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
