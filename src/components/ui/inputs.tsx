import {  Input } from '@mantine/core';
import { trans } from '@mongez/localization';
import {  HTMLAttributes } from 'react';

export function InputField({ ...props }: HTMLAttributes<HTMLInputElement> ) {

  return (
    <Input variant="filled"   placeholder={trans('todoTitle')} mt="md" {...props}>
    </Input>
  );
}
