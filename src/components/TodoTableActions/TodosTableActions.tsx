
import { Button } from "@mantine/core"
import {  Trash } from "lucide-react"



const TodosTableActions = () => {
  return (
    <>
        <Button variant="subtle" color="red">
         <Trash size={16}/>
        </Button>
    </>
  ) 
}

export default TodosTableActions