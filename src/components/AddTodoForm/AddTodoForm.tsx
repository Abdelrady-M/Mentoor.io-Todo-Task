import ModalTodo from '../ui/Model';
import { Plus } from 'lucide-react';
import { TableField } from "../ui/Table";
import MantineButton from "../ui/Button";
import { InputField } from "../ui/inputs";
import { useForm } from '@mantine/form';
import useMongez from '../../shared/hooks/useMongez';
import { useState } from 'react';
import { ITodo } from '../../types';
import LanguageSwitch from '../App/LanguageSwitch';
import {trans } from '@mongez/localization';
import useLanguageStore from '../../store/zustand/useLanguageStore';
import { notifications } from '@mantine/notifications';
import SkeletonUi from '../ui/Skeleton';
export default function AddTodoForm() {
  const lang = useLanguageStore((state) => state.lang);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { todos, addTodo, isLoading } = useMongez()
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
  notifications.show({
    maw: 2000,
   autoClose: 2000,
   title: 'Todo added',
   message: 'Todo added successfully',
 })
  handleCloseModal();
};

  return (
    <>

       <div className='flex justify-between w-full'>
        <LanguageSwitch/>
       <MantineButton
            variant="filled"
            color="teal"
            onClick={handleOpenModal}
            style={{ maxWidth: 150 }}
          >
            <Plus size={14} className="mr-1" />
            {trans('addTodo', lang)}
          </MantineButton>
       </div>
          {isLoading ? <SkeletonUi /> : <TableField todos={todos}  />}
          <ModalTodo isOpen={isModalOpen} closeModal={handleCloseModal}>
            <form  onSubmit={form.onSubmit(handleSubmit)}>
              <InputField   key={form.key('title')} {...form.getInputProps('title')}/>
              <MantineButton variant="filled" color="teal" style={{ width: 100, marginTop: 10 }} type="submit">
              {trans('save', lang)}
              </MantineButton>
            </form>
          </ModalTodo>
    </>
  );
}

