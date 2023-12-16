---
title: StorageBundle
description: DocumentationBundle.description
description_content: StorageBundle.description-content
services: DocumentationBundle.services
services_content_1: StorageBundle.services-content-1
services_content_2: StorageBundle.services-content-2
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

```
window.localStorage
```

```
window.sessionStorage
```

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
