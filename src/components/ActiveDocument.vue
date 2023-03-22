<script setup lang="ts">
import Label from '@/components/Label.vue';
import Button from '@/components/Button.vue';
import placeholder from '@/assets/images/placeholder.jpg';
import { useDocumentsStore } from '@/stores/documents';

const documents = useDocumentsStore();

const download = () => {
  if (!documents.active) return;

  const anchor = document.createElement('a');
  const text = `data:text/plain;charset=utf-8,${encodeURIComponent(
    `${documents.active.name}\n${documents.active.description}`
  )}`;

  anchor.setAttribute('href', text);
  anchor.setAttribute('download', `${documents.active.name}.txt`);

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  if (documents.active.image) {
    window.open(documents.active.image, '_blank');
  }
};
</script>

<template>
  <div
    v-if="documents.active"
    :class="$style.active"
  >
    <img
      :src="documents.active.image || placeholder"
      :alt="documents.active.name"
    />

    <div>
      <Label>{{ documents.active.name }}</Label>

      <div :class="$style.actions">
        <Button @click="download">Скачать</Button>
        <Button
          :disabled="!documents.active.image"
          danger
          >Удалить</Button
        >
      </div>

      <Label>Описание</Label>

      <p
        :class="$style.description"
        v-text="documents.active.description"
      />
    </div>
  </div>
</template>

<style module lang="scss">
.active {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 30px;

  @media screen and (max-width: 960px) {
    grid-template-columns: auto;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
}

.actions {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
  }
}
</style>
