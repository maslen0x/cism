<script setup lang="ts">
defineProps<{
  danger?: boolean;
}>();
</script>

<template>
  <button :class="[$style.button, danger && $style.danger]">
    <slot />
  </button>
</template>

<style module lang="scss">
.button {
  color: var(--primary);
  height: 30px;
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 0 30px;
  cursor: pointer;

  &:not(:disabled):active {
    transform: translateY(1px);
  }

  &:not(:disabled):hover {
    box-shadow: 0 0 10px transparentize(blue, 0.9);
  }

  &:disabled {
    color: var(--gray);
    background-color: var(--light-gray);
    border-color: var(--light-gray);
    cursor: default;
  }
}

.danger {
  color: var(--danger);
  border-color: var(--danger);

  &:not(:disabled):hover {
    box-shadow: 0 0 10px transparentize(red, 0.9);
  }
}
</style>
