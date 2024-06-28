import {  Input } from '@mantine/core';
import { transFrom } from '@mongez/localization';
import {  HTMLAttributes } from 'react';
import useLanguageStore from '../../store/zustand/useLanguageStore';

export function InputField({ ...props }: HTMLAttributes<HTMLInputElement> ) {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <Input variant="filled"   placeholder={transFrom(lang, 'todoTitle')} mt="md" {...props}>
    </Input>
  );
}
