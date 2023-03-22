<script setup lang="ts">
import Label from '@/components/Label.vue';
import Spinner from '@/components/Spinner.vue';
import placeholder from '@/assets/images/placeholder.jpg';
import { useDocumentsStore } from '@/stores/documents';

const documents = useDocumentsStore();
</script>

<template>
  <Label>Результаты</Label>

  <Spinner v-if="documents.loading" />

  <p
    v-else-if="documents.error"
    :class="$style.error"
  >
    Не удалось загрузить документы
  </p>

  <ul
    v-else-if="documents.count"
    :class="$style.list"
  >
    <li
      v-for="item in documents.items"
      :key="item.id"
      :class="[$style.item, documents.activeId === item.id && $style.active]"
      @click="documents.activeId = item.id"
    >
      <img
        :class="$style.image"
        :src="item.image || placeholder"
        :alt="item.name"
      />

      <div :class="$style.content">
        <p
          :class="$style.name"
          v-text="item.name"
        />
        <p :class="$style.size">12 MB</p>
      </div>
    </li>
  </ul>

  <p v-else>Документов не найдено</p>
</template>

<style module lang="scss">
.error {
  color: var(--danger);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 640px) {
    flex-direction: row;
    padding: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  border-right: 1px solid var(--light-gray);
  cursor: pointer;

  @media screen and (max-width: 640px) {
    flex-shrink: 0;
  }
}

.active {
  background-color: var(--primary);
  cursor: default;
  pointer-events: none;

  .name {
    color: #f8f9fa;
  }

  .size {
    color: #dee2e6;
  }
}

.image {
  width: 70px;
  height: 70px;
}

.content {
  padding: 15px;
}

.name {
  font-weight: 600;
  margin-bottom: 5px;
}

.size {
  color: var(--gray);
}
</style>
