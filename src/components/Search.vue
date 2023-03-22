<script setup lang="ts">
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import { useDocumentsStore } from '@/stores/documents';

const documents = useDocumentsStore();
</script>

<template>
  <Label>Поиск документа</Label>

  <Input
    v-model="documents.search"
    :class="$style.input"
    placeholder="Введите ID документа"
  />
</template>

<style module lang="scss">
.input {
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
}
</style>
