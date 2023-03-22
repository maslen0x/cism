import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getDocuments } from '@/api';

export interface Document {
  id: number;
  name: string;
  description: string;
  image: string | null;
}

export const useDocumentsStore = defineStore('documents', () => {
  const items = ref<Document[]>([]);
  const loading = ref(false);
  const error = ref(false);
  const search = ref('');
  const activeId = ref<number | null>(null);

  const active = computed(() => items.value.find((document) => document.id === activeId.value));

  const count = computed(() => items.value.length);

  const fetchDocuments = async () => {
    error.value = false;
    loading.value = true;
    try {
      const { data } = await getDocuments(search.value);
      items.value = data;
    } catch {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    error,
    search,
    activeId,
    active,
    count,
    fetchDocuments,
  };
});
