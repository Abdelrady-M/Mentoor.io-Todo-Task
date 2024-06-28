export type ITodo = {
    id: number;
    title: string;
    completed: boolean;
}
export type ILanguageType = {
    lang: string;
    setLang: (lang: string) => void;
  };
