<template>
  <h1 :class="$style.title">
    <slot />
  </h1>
</template>

<style module lang="scss">
.title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
}
</style>
