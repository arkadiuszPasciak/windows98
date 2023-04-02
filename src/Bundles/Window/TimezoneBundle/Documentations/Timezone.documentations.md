---
title: TimezoneBundle
description: DocumentationBundle.description
description_content: TimezoneBundle.description-content
services: DocumentationBundle.services
services_content_1: TimezoneBundle.services-content-1
services_content_2: TimezoneBundle.services-content-2
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

```
const date = new Date() as Date;

date.getTimezoneOffset();
```

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@Bundles/TimezoneBundle/Locales/Timezone.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
