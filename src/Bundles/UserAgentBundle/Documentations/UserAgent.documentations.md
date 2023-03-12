---
title: UserAgentBundle
description: UserAgentDocumentations.description
---

# {{ title }}

## {{ t(description) }}

### h3

#### h4

##### h5

###### h6

> Dorothy followed her through many of the beautiful rooms in her castle.

Order list

1. First item
2. Second item
3. Third item
4. Fourth Item

Unordered list:

- first item
- second item
- third item
- fourth item

`one line code`

```html
<div class="test">
  <span>123</span>
</div>
```

```ts
const typescript = 'few lines typescript code' as string
```

```scss
.header {
  color: $test-scss;
}
```

```json
{
  "test": "test json"
}
```

| Name      | Description                             |
| --------- | --------------------------------------- |
| `label`   | Use this slot to set the label          |
| `default` | Use this slot to set the textarea value |

lines

---

link [Duck Duck Go](https://duckduckgo.com)

<i18n src="@Bundles/UserAgentBundle/Locales/UserAgentDocumentations.locales.json"></i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
