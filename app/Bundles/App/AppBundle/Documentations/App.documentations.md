---
title: AppBundle
description: DocumentationBundle.description
description_content: AppBundle.description-content
services: DocumentationBundle.services
services_content_1: AppBundle.services-content-1
services_content_2: AppBundle.services-content-2
services_content_3: AppBundle.services-content-3
services_content_4: AppBundle.services-content-4
services_content_5: AppBundle.services-content-5
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

```
createApp(App)
```

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}
- {{ t(services_content_3) }}
- {{ t(services_content_4) }}
- {{ t(services_content_5) }}

<i18n src="@APP|Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@APP|Bundles/AppBundle/Locales/App.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
