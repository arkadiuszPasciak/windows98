<template>
  <div
    v-if="modalState"
    ref="modalElement"
    class="UIModal"
    :class="classes"
    @mousemove="(event) => mouseMove(event)"
  >
    <div class="container" :style="{ width: `${width}`, height: `${height}` }">
      <div
        class="header"
        :style="`cursor: ${cursorType}`"
        @mousedown="(event) => mouseDownEvent(event)"
        @mouseup="mouseUpEvent"
      >
        <h3 class="title" data-test="modal-header-title">{{ title }}</h3>
        <UIButton
          class="button-close"
          size="small"
          data-test="ui-modal-button-close"
          @click="$emit('closeModal')"
        >
          <template #icon-left>
            <img
              class="button-close-icon"
              :width="8"
              :height="7"
              src="/icons/close-modal.svg"
              :alt="t('UIBundle.close-window')"
            />
          </template>
        </UIButton>
      </div>

      <UIModalNavigation v-if="$slots.options">
        <slot name="options" />
      </UIModalNavigation>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue'
  import { Nullable } from 'vitest'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModalNavigation from '@Bundles/UIBundle/Components/UIModalNavigation.vue'
  import { IUIModalCursorType } from '@Bundles/UIBundle/Supports/UIModal.supports'

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: `450px`,
    },
    height: {
      type: String,
      default: `150px`,
    },
    resizeWindow: {
      type: Boolean,
      default: false,
    },
    moveWindow: {
      type: Boolean,
      default: true,
    },
    modalState: {
      type: Boolean,
      default: false,
    },
  })

  const { t } = useI18n()

  const classes = [
    `${props.resizeWindow ? 'resize-window' : ''}`,
    `${props.moveWindow ? 'move-window' : ''}`,
  ] as Array<string>

  const modalElement = ref(null) as Ref<Nullable<HTMLElement>>
  const mouseState = ref(false) as Ref<boolean>
  const positionX = ref(0) as Ref<number>
  const positionY = ref(0) as Ref<number>
  const cursorType = ref('default') as Ref<IUIModalCursorType>

  const mouseDownEvent = (event: MouseEvent): void => {
    if (!modalElement.value || !props.moveWindow) {
      return
    }

    cursorType.value = 'move'
    mouseState.value = true
    positionX.value = modalElement.value.offsetLeft - event.clientX
    positionY.value = modalElement.value.offsetTop - event.clientY
  }

  const mouseUpEvent = (): void => {
    if (!props.moveWindow) {
      return
    }

    mouseState.value = false
    cursorType.value = 'default'
  }

  const mouseMove = (event: MouseEvent): void => {
    if (!mouseState.value || !modalElement.value || !props.moveWindow) {
      return
    }

    modalElement.value.style.left = event.clientX + positionX.value + 'px'
    modalElement.value.style.top = event.clientY + positionY.value + 'px'
  }

  defineEmits(['closeModal'])
</script>

<i18n src="@Bundles/UIBundle/Locales/UIBundle.locales.json"></i18n>

<style lang="scss" scoped src="@Bundles/UIBundle/Styles/UIModal.styles.scss" />
