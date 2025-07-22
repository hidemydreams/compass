import { IDBSectionImage } from '@/types/types';

export interface Uploadable {
  type: 'local' | 'uploaded';
  toDelete: boolean;
}

export type UploadableImage = Uploadable & IDBSectionImage;

type StoreData = {
  sections?: string;
  settingsStringified?: string;
  linkImages?: { buttonId: string; file: File }[];
  imagesToDelete: string[];
  bgImage?: File | null;
  imagesToUpload: File[];
  imagesSection: UploadableImage[];
};

const memoryStore: StoreData = {
  imagesToDelete: [],
  imagesToUpload: [],
  imagesSection: [],
};

export const memory = {
  set<T extends keyof StoreData>(key: T, value: StoreData[T]) {
    memoryStore[key] = value;
  },
  get<T extends keyof StoreData>(key: T): StoreData[T] {
    return memoryStore[key];
  },
  remove<T extends keyof StoreData>(key: T) {
    delete memoryStore[key];
  },
  clear() {
    Object.keys(memoryStore).forEach(
      (key) => delete memoryStore[key as keyof StoreData],
    );
  },
};
