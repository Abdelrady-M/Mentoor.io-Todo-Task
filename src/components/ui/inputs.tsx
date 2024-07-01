import {  Input } from '@mantine/core';
import { trans } from '@mongez/localization';
import {  HTMLAttributes } from 'react';
import useLanguageStore from '../../store/zustand/useLanguageStore';

export function InputField({ ...props }: HTMLAttributes<HTMLInputElement> ) {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <Input variant="filled"   placeholder={trans('todoTitle', lang)} mt="md" {...props}>
    </Input>
  );
}
