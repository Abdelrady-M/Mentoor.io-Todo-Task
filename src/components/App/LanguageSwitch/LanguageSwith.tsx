
import {Select } from "@mantine/core";
import useLanguageStore from "../../../store/zustand/useLanguageStore";

export default function LanguageSwitch() {
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLang);
  
  const handleLangChange = (value: string | null) => {
    if (value) {
      setLang(value);
    }
  };
  return (
    <Select
        name="lang"
        id="lang"
        className="w-32 border border-gray-400 rounded "
        value={lang}
        onChange={handleLangChange}
        data={[
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية' },
          ]}
      />
  );
}

