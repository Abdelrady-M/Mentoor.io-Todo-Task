import {ReactNode } from "react";
import { Modal } from '@mantine/core';
import { trans } from "@mongez/localization";
// import { InputField } from "./inputs";
// import MantineButton from "./Button";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title?: string;
}

/**
 * Renders a modal for adding a new todo.
 * @param {IProps} props - Component props.
 * @return {JSX.Element} The rendered modal component.
 */
function ModalTodo(props: IProps) {

  const { isOpen, closeModal, children, title } = props;

  return (
    <Modal
      opened={isOpen}
      onClose={closeModal}

      title={title ?? trans('newtitle')}
      centered
    >
      {children}
      
    </Modal>
  );
}

export default ModalTodo;
