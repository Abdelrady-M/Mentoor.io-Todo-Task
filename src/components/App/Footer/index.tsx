import { transFrom } from "@mongez/localization";
import useLanguageStore from "../../../store/zustand/useLanguageStore";
import { Text } from "@mantine/core";

export default function Footer() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <div className="text-center  mt-80">
      <Text size="sm" >
        © {new Date().getFullYear()} 
        {' '}
        {transFrom(lang, "copyrights")}
      </Text>
      <Text size="sm" >
        {transFrom(lang, "developedby")}
        {' '}
        <a
          href="https://github.com/Abdelrady-M"
          target="_blank"
          rel="noreferrer"
        >
          {transFrom(lang, "author")}
        </a>
      </Text>
    </div>
  );
}

