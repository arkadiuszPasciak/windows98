---
title: TeleportBundle
description: DocumentationBundle.description
description_content: TeleportBundle.description-content
services: DocumentationBundle.services
services_content_1: TeleportBundle.services-content-1
---

# {{ title }}

## {{ t(description) }}

<p v-html="t(description_content)" />

## {{ t(services) }}

- {{ t(services_content_1) }}

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json"></i18n>
<i18n src="@Bundles/TeleportBundle/Locales/Teleport.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>