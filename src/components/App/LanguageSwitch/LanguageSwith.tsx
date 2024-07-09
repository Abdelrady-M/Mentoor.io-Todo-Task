import { useRef, useState } from "react";
import { Select } from "@mantine/core";
import useLanguageStore from "../../../store/zustand/useLanguageStore";
import { setCurrentLocaleCode } from "@mongez/localization";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguageStore((state) => ({
    lang: state.lang,
    setLang: state.setLang,
  }));

  const [selectedLang, setSelectedLang] = useState(lang);
  const ref = useRef<HTMLInputElement>(null);

  const handleLangChange = (value: string | null) => {
    if (value) {
      setCurrentLocaleCode(value);
      console.log(value);
      setLang(value);
      setSelectedLang(value);
    }
  };

  return (
    <Select
      ref={ref}
      checkIconPosition="right"
      placeholder="select language"
      name="lang"
      id="lang"
      className="w-32 border border-gray-400 rounded"
      comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
      value={selectedLang}
      onChange={handleLangChange}
      data={[
        { value: "ar", label: "العربية" },
        { value: "en", label: "English" },
      ]}
    />
  );
}

