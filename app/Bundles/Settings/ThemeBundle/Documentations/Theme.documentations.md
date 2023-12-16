---
title: ThemeBundle
description: DocumentationBundle.description
description_content: ThemeBundle.description-content
services: DocumentationBundle.services
services_content_1: ThemeBundle.services-content-1
services_content_2: ThemeBundle.services-content-2
services_content_3: ThemeBundle.services-content-3
services_content_4: ThemeBundle.services-content-4
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}
- {{ t(services_content_3) }}
- {{ t(services_content_4) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
