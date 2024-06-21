import {  Input } from '@mantine/core';
import {  HTMLAttributes } from 'react';

export function InputField({ ...props }: HTMLAttributes<HTMLInputElement> ) {
  return (
    <Input variant="filled" placeholder="Filled input" mt="md" {...props}>
    </Input>
  );
}
