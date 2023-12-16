---
title: FileBundle
description: DocumentationBundle.description
description_content: FileBundle.description-content
services: DocumentationBundle.services
services_content_1: FileBundle.services-content-1
services_content_2: FileBundle.services-content-2
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}
- {{ t(services_content_2) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
