<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <input
    v-bind="$attrs"
    :class="$style.input"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module lang="scss">
.input {
  width: 100%;
  height: 50px;
  color: var(--gray);
  padding: 0 25px;
  border-radius: 8px;
  border: 2px solid #e9ecef;

  @media screen and (max-width: 768px) {
    height: 40px;
    padding: 0 15px;
  }
}
</style>
