<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import Container from '@/components/Container.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import ActiveDocument from '@/components/ActiveDocument.vue';
import { useDocumentsStore } from '@/stores/documents';
import { useDebounce } from '@/composables/debounce';

const documents = useDocumentsStore();
const { search } = storeToRefs(documents);
const debounce = useDebounce();

watch(search, () => debounce(documents.fetchDocuments), { immediate: true });
</script>

<template>
  <Container>
    <Header />

    <div :class="$style.dashboard">
      <Sidebar />
      <ActiveDocument />
    </div>
  </Container>
</template>

<style module lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: 280px 1fr;
  box-shadow: var(--shadow);
  border-radius: 10px;

  @media screen and (max-width: 640px) {
    grid-template-columns: auto;
  }
}
</style>
