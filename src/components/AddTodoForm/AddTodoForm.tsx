import ModalTodo from '../ui/Model';
import { Plus } from 'lucide-react';
import { TableField } from "../ui/Table";
import MantineButton from "../ui/Button";
import { InputField } from "../ui/inputs";
import { useForm } from '@mantine/form';
import useMongez from '../../hooks/useMongez';
import { useState } from 'react';
import { ITodo } from '../../interfaces';
export default function AddTodoForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { todos, addTodo } = useMongez()
  const form = useForm<ITodo>({
    mode: 'uncontrolled',
    initialValues: {
      id: Math.floor(Math.random() * 1000),
      title: '',
      completed: false,
    },

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
  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    title: values.title,
    completed: false,
  };
  addTodo(newTodo);
  form.reset();
  handleCloseModal();
};

  return (
    <>
       <MantineButton
            variant="filled"
            color="teal"
            onClick={handleOpenModal}
            style={{ maxWidth: 150 }}
          >
            <Plus size={14} className="mr-1" />
            New Todo
          </MantineButton>
          <TableField todos={todos}  />
          <ModalTodo isOpen={isModalOpen} closeModal={handleCloseModal}>
            <form  onSubmit={form.onSubmit(handleSubmit)}>
              <InputField   key={form.key('title')} {...form.getInputProps('title')}/>
              <MantineButton variant="filled" color="teal" style={{ width: 100, marginTop: 10 }} type="submit">
                 Save
              </MantineButton>
            </form>
          </ModalTodo>
    </>
  );
}
