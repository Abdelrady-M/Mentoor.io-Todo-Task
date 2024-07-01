import { trans } from "@mongez/localization";
import useLanguageStore from "../../../store/zustand/useLanguageStore";
import { Text } from "@mantine/core";

export default function Footer() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <div className="text-center  mt-80">
      <Text size="sm" >
        © {new Date().getFullYear()} 
        {' '}
        {trans("copyrights", lang)}
      </Text>
      <Text size="sm" >
        {trans("developedby", lang)}
        {' '}
        <a
          href="https://github.com/Abdelrady-M"
          target="_blank"
          rel="noreferrer"
        >
          {trans("author", lang)}
        </a>
      </Text>
    </div>
  );
}

