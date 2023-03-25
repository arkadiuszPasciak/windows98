---
title: UserAgentBundle
description: DocumentationBundle.description
description_content: UserAgentBundle.description-content
services: DocumentationBundle.services
services_content_1: UserAgentBundle.services-content-1
services_content_2: UserAgentBundle.services-content-2
services_content_3: UserAgentBundle.services-content-3
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

```
window.navigator.userAgent
```

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}
- {{ t(services_content_3) }}

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@Bundles/UserAgentBundle/Locales/UserAgent.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
