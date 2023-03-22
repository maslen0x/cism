<template>
  <div :class="$style.spinner">
    <span />
  </div>
</template>

<style module lang="scss">
.spinner {
  display: flex;
  justify-content: center;

  span {
    width: 30px;
    height: 30px;
    border: 3px solid var(--primary);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.7s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
