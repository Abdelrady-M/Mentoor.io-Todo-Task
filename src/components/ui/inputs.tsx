import {  Input } from '@mantine/core';
import {  HTMLAttributes } from 'react';

export function InputField({ ...props }: HTMLAttributes<HTMLInputElement> ) {
  return (
    <Input variant="filled" placeholder="Add todo title" mt="md" {...props}>
    </Input>
  );
}
