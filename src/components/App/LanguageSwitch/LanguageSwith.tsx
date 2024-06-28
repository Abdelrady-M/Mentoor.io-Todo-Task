
import { NativeSelect } from "@mantine/core";
import useLanguageStore from "../../../store/zustand/useLanguageStore";

export default function LanguageSwitch() {
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLang);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <NativeSelect
        name="lang"
        id="lang"
        className="w-32 border border-gray-400 rounded "
        value={lang}
        onChange={handleLangChange}
      >
          <option value="en">English</option>
          <option value="ar">العربية</option>
  </NativeSelect>
  );
}

