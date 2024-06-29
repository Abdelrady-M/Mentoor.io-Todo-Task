import { ILanguageType } from '../../types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const namespace = 'TodoList';

const getStorage = () => {
  const storage = localStorage;
  const setItem = (key: string, value: string) => storage.setItem(`${namespace}/${key}`, value);
  const getItem = (key: string) => storage.getItem(`${namespace}/${key}`);
  const removeItem = (key: string) => storage.removeItem(`${namespace}/${key}`);

  return {
    getItem,
    setItem,
    removeItem,
  };
};

const useLanguageStore = create<ILanguageType, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang: string) => (lang === 'en' || lang === 'ar') && set(() => ({ lang })),
    }),
    {
      name: 'lang',
      getStorage,
    }
  )
);

export default useLanguageStore;

