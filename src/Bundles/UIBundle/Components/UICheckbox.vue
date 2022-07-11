<template>
  <label class="UICheckbox" :class="`v-${variant}`">
    <input
      class="input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
    />

    <span class="checkmark">
      <i class="icon" />
    </span>

    <p v-if="$slots.default" class="text"><slot /></p>
  </label>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: true,
    },
  })
</script>

<style lang="scss" scoped>
  .UICheckbox {
    display: flex;

    &:hover {
      @include hover {
        cursor: pointer;
      }
    }

    .input {
      opacity: 0;
      width: 0;
      height: 0;

      &[disabled] {
        & + .checkmark {
          pointer-events: none;

          .icon {
            background: url('~@/Assets/Icons/checkmark-disabled.svg') center
              center no-repeat;
            opacity: 1;
          }
        }
      }
      &:checked {
        & + .checkmark > .icon {
          opacity: 1;
        }
      }
    }
    .icon {
      display: block;
      width: 100%;
      height: 100%;
      background: url('~@/Assets/Icons/checkmark.svg') center center no-repeat;
      opacity: 0;
    }

    .checkmark {
      display: block;
      height: 13px;
      width: 13px;
    }

    .text {
      margin-left: 6px;
      @include font('medium', 11, 13);
    }

    &.v-primary {
      &:active .checkmark {
        background: $cl-greyC0;
      }

      &:focus .text {
        outline: 1px dotted $cl-black;
      }

      .input {
        &[disabled] {
          & + .checkmark {
            background: $cl-greyC0;
          }

          & ~ .text {
            text-shadow: 1px 1px 0 $cl-white;
            color: $cl-grey80;
          }
        }
      }
      .checkmark {
        background-color: $cl-white;
        box-shadow: $border-sunken-outer, $border-sunken-inner;
      }
      .text {
        color: $cl-black22;
      }
    }
  }
</style>
