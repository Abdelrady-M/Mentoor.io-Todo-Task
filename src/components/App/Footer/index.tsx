import { transFrom } from "@mongez/localization";
import useLanguageStore from "../../../store/zustand/useLanguageStore";

export default function Footer() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <div className="text-center text-slate-300 mt-80">
      <p className="text-xs">
        © {new Date().getFullYear()} 
        {' '}
        {transFrom(lang, "copyrights")}
      </p>
      <p className="text-xs">
        {transFrom(lang, "developedby")}
        {' '}
        <a
          href="https://github.com/Abdelrady-M"
          target="_blank"
          rel="noreferrer"
        >
          {transFrom(lang, "author")}
        </a>
      </p>
    </div>
  );
}

