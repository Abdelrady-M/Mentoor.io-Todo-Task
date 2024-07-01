
import { Select } from "@mantine/core";
import useLanguageStore from "../../../store/zustand/useLanguageStore";
import { setCurrentLocaleCode } from "@mongez/localization";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguageStore((state) => ({
    lang: state.lang,
    setLang: state.setLang,
  }));

  const handleLangChange = (value: string | null) => {
    if (value) {
      setLang(value);
      setCurrentLocaleCode(value);
    }
  };

  return (
    <Select
      name="lang"
      id="lang"
      className="w-32 border border-gray-400 rounded"
      value={lang}
      onChange={handleLangChange}
      data={[
        { value: "ar", label: "العربية" },
        { value: "en", label: "English" },
      ]}
    />
  );
}

