<script setup lang="ts">
import Search from '@/components/Search.vue';
import DocumentsList from '@/components/DocumentsList.vue';
</script>

<template>
  <div :class="$style.sidebar">
    <Search />
    <DocumentsList />
  </div>
</template>

<style module lang="scss">
.sidebar {
  padding: 20px;
  border-right: 1px solid var(--light-gray);

  @media screen and (max-width: 768px) {
    padding: 15px;
  }

  @media screen and (max-width: 640px) {
    border: none;
  }
}
</style>
