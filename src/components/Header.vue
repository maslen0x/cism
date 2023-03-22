<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<template>
  <header :class="$style.header">
    <Title> MyApp </Title>

    <p :class="$style.username">Username</p>
  </header>
</template>

<style module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;

  @media screen and (max-width: 960px) {
    margin: 25px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }
}

.username {
  font-size: 16px;
}
</style>
