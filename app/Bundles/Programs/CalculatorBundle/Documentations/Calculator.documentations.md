---
title: CalculatorBundle
description: DocumentationBundle.description
description_content: CalculatorBundle.description-content
services: DocumentationBundle.services
services_content_1: CalculatorBundle.services-content-1
services_content_2: CalculatorBundle.services-content-2
services_content_3: CalculatorBundle.services-content-3
services_content_4: CalculatorBundle.services-content-4
services_content_5: CalculatorBundle.services-content-5
services_content_6: CalculatorBundle.services-content-6
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
- {{ t(services_content_6) }}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
