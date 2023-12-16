---
title: TicTacToeBundle
description: DocumentationBundle.description
description_content: TicTacToeBundle.description-content
services: DocumentationBundle.services
services_content_1: TicTacToeBundle.services-content-1
services_content_2: TicTacToeBundle.services-content-2
services_content_3: TicTacToeBundle.services-content-3
services_content_4: TicTacToeBundle.services-content-4
services_content_5: TicTacToeBundle.services-content-5
services_content_6: TicTacToeBundle.services-content-6
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
