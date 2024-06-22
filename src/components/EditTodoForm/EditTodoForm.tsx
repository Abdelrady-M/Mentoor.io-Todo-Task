import { useForm } from '@mantine/form';
import useMongez from '../../hooks/useMongez';
import { ITodo } from '../../interfaces';
import ModalTodo from '../ui/Model';
import { InputField } from '../ui/inputs';
import MantineButton from '../ui/Button';
import { useState } from 'react';
import { Pen } from 'lucide-react';

export default function EditTodoForm({ todo }: { todo: ITodo }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { updateTodo } = useMongez();

  const form = useForm<ITodo>({
    mode: 'uncontrolled',
    initialValues: todo,
    validate: {
      title: (value) => (/^\S+\S+$/.test(value) ? null : 'Invalid title'),
    },
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values: ITodo) => {
    updateTodo(values.id, values.title);
    form.reset();
    handleCloseModal();
  };

  return (
    <>
      <MantineButton
        variant="subtle"
        color="teal"
        onClick={handleOpenModal}
      >
        <Pen size={14} className="mr-1" />
      </MantineButton>
      <ModalTodo
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        title="Edit Todo"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <InputField  key={form.key('title')} {...form.getInputProps('title')}/>
          <MantineButton variant="filled" color="teal" type="submit">
            Save
          </MantineButton>
        </form>
      </ModalTodo>
    </>
  );
}

