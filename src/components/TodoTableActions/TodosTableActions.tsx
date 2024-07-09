
import { Button, Dialog, Text } from "@mantine/core"

import { Trash } from "lucide-react"
import useMongez from "../../shared/hooks/useMongez"
import { ITodo } from "../../types"
import EditTodoForm from "../EditTodoForm"
import { useState } from "react"
import { trans } from "@mongez/localization"
import {notifications } from "@mantine/notifications"

const TodosTableActions = ({todo}:{todo:ITodo}) => {

  const { removeTodo } = useMongez()
  const [opened, setOpened] = useState(false)

  const handleRemove = () => {
    setOpened(true)
  }

  const handleConfirm = () => {
    removeTodo(todo.id)
    notifications.show({
       maw: 2000,
      autoClose: 2000,
      title: 'Todo deleted',
      message: 'Todo deleted successfully',
    })
    setOpened(false)

  }

  const handleClose = () => {
    setOpened(false)
  }

  return (
    <>
      <EditTodoForm todo={todo}/>
      <Dialog
        opened={opened}
        onClose={handleClose}
        title="Delete Todo"
        
      >
        <Text size="lg" mb="xs">{trans("deleteTodo")}</Text>
        <Text size="md" mb="xs" fw={500}>{trans("titleDelete")}</Text>
          <Button variant="subtle" className="mr-3" onClick={handleClose}>{trans("cancel")}</Button>
          <Button color="red" onClick={handleConfirm}>{trans("delete")}</Button>
      </Dialog>
      <Button variant="subtle" color="red" onClick={handleRemove} > 
        <Trash size={16}/>
      </Button>
    </>
  ) 
}

export default TodosTableActions

