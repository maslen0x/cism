import axios from 'axios';
import { Document } from '@/stores/documents';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const getDocuments = (search?: string) =>
  api.get<Document[]>('/user/docs', { params: { search } });
