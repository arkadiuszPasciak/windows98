<template>
  <div
    ref="modalElement"
    class="UIModal"
    :class="classes"
    :style="`width: 150px; top: ${positionY}px; left: ${positionX}px`"
    @mousemove="(event) => mouseMove(event)"
  >
    <div
      class="header"
      :style="`cursor: ${cursorType}`"
      @mousedown="(event) => mouseDownEvent(event)"
      @mouseup="mouseUpEvent"
    >
      <h3 class="title">{{ title }}</h3>
      <UIButton class="button-close" size="small">
        <template #icon-left>
          <img
            class="button-close-icon"
            :width="8"
            :height="7"
            src="src/Assets/Icons/close-modal.svg"
            :alt="t('UIBundle.close-window')"
          />
        </template>
      </UIButton>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, Ref, ref } from 'vue'
  import { Nullable } from 'vitest'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import { ICursorType } from '@Bundles/UIBundle/Supports/UIModal.supports'

  const props = defineProps({
    variant: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
    resizeWindow: {
      type: Boolean,
      default: false,
    },
    moveWindow: {
      type: Boolean,
      default: true,
    },
  })

  const { t } = useI18n()

  const classes = [
    `variant-${props.variant}`,
    `${props.resizeWindow ? 'resize-window' : ''}`,
    `${props.moveWindow ? 'move-window' : ''}`,
  ] as Array<string>

  const modalElement = ref(null) as Ref<Nullable<HTMLElement>>
  const mouseState = ref(false) as Ref<boolean>
  const positionX = ref(0) as Ref<number>
  const positionY = ref(0) as Ref<number>
  const cursorType = ref('default') as Ref<ICursorType>

  const mouseDownEvent = (event: MouseEvent): void => {
    if (!modalElement.value) {
      return
    }
    //console.log('mousedown event')

    cursorType.value = 'move'
    mouseState.value = true
    positionX.value = modalElement.value.offsetLeft - event.clientX
    positionY.value = modalElement.value.offsetTop - event.clientY
  }

  const mouseUpEvent = (): void => {
    //console.log('mouseup event')
    mouseState.value = false
    cursorType.value = 'default'
  }

  const mouseMove = (event: MouseEvent): void => {
    if (!mouseState.value || !modalElement.value) {
      return
    }
    //console.log('mousemove event')

    modalElement.value.style.left = event.clientX + positionX.value + 'px'
    modalElement.value.style.top = event.clientY + positionY.value + 'px'
  }
</script>

<i18n src="@Bundles/UIBundle/Locales/UIBundle.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UIModal.styles.scss';
</style>
