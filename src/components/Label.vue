<template>
  <p :class="$style.label">
    <slot />
  </p>
</template>

<style module lang="scss">
.label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
}
</style>
