import  useMongez  from "./hooks/useMongez"
import { MantineProvider } from "@mantine/core"
import ModalTodo from "./components/ui/Model"
import { useState } from "react"
import { Plus } from 'lucide-react';
import { TableField } from "./components/ui/Table";
import '@mantine/core/styles.css';
import Footer from "./components/App/Footer";
import MantineButton from "./components/ui/Button";
import { InputField } from "./components/ui/inputs";
import { ITodo } from "./interfaces";
import { useForm } from '@mantine/form';


function App() {
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
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="container mx-auto flex flex-col space-y-8 justify-end items-end lg:w-1/2 mt-28">
        <MantineProvider defaultColorScheme="dark" cssVariablesSelector="html" withCssVariables={false} deduplicateCssVariables={false} withStaticClasses={false} withGlobalClasses={false}>
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
        </MantineProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App

