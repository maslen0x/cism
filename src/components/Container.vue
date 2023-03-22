<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module lang="scss">
.container {
  width: 100%;
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
