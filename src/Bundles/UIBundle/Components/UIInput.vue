<template>
  <div class="UIInput" :class="`v-${variant} l-p-${labelPosition}`">
    <label class="label" :for="id">{{ labelName }}</label>
    <input
      :id="id"
      class="input"
      :type="type"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    variant: {
      type: String as PropType<'primary'>,
      required: true,
    },
    type: {
      type: String as PropType<'text' | 'password' | 'email'>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    labelPosition: {
      type: String as PropType<'top' | 'left'>,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .UIInput {
    .input,
    .label {
      @include font('medium', 11, 14);
    }

    .input {
      padding: 3px 4px;
      height: 21px;

      &:focus {
        outline: none;
      }
    }

    &.v-primary {
      .input,
      .label {
        color: $cl-black22;
      }

      .input {
        box-shadow: $border-field-inner, $border-field-outer;
        background-color: $cl-white;

        &:disabled,
        &:read-only {
          background-color: $cl-greyC0;
        }

        &:disabled,
        &:disabled + .label,
        &[readonly],
        &[readonly] + .label {
          color: $cl-grey80;
        }
      }
    }

    &.l-p-left {
      .label {
        margin-right: 6px;
      }
    }

    &.l-p-top {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 200px;

      .label {
        margin-bottom: 5px;
      }
    }
  }
</style>
