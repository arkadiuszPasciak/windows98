---
title: PulpitBundle
description: DocumentationBundle.description
description_content: PulpitBundle.description-content
services: DocumentationBundle.services
services_content_1: PulpitBundle.services-content-1
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>