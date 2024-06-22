
import { Button, Dialog, Text } from "@mantine/core"
import { Trash } from "lucide-react"
import useMongez from "../../hooks/useMongez"
import { ITodo } from "../../interfaces"
import EditTodoForm from "../EditTodoForm"
import { useState } from "react"

const TodosTableActions = ({todo}:{todo:ITodo}) => {
  const { removeTodo } = useMongez()
  const [opened, setOpened] = useState(false)

  const handleRemove = () => {
    setOpened(true)
  }

  const handleConfirm = () => {
    removeTodo(todo.id)
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
        <Text size="lg" mb="xs">Delete Todo</Text>
        <Text size="md" mb="xs" fw={500}>Are you sure you want to delete this todo?</Text>
          <Button variant="subtle" className="mr-3" onClick={handleClose}>Cancel</Button>
          <Button color="red" onClick={handleConfirm}>Delete</Button>
      </Dialog>
      <Button variant="subtle" color="red" onClick={handleRemove}>
        <Trash size={16}/>
      </Button>
    </>
  ) 
}

export default TodosTableActions
