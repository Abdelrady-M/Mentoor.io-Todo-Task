import { trans } from "@mongez/localization";
import { Text } from "@mantine/core";

export default function Footer() {

  return (
    <div className="text-center  mt-80">
      <Text size="sm" >
        © {new Date().getFullYear()} 
        {' '}
        {trans("copyrights")}
      </Text>
      <Text size="sm" >
        {trans("developedby")}
        {' '}
        <a
          href="https://github.com/Abdelrady-M"
          target="_blank"
          rel="noreferrer"
        >
          {trans("author")}
        </a>
      </Text>
    </div>
  );
}

