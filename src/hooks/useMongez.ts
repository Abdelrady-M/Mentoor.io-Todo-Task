import { ITodo } from "../interfaces"
import { todoAtom } from "../store/mongez/mongezStore"

const useMongez = ()=>{
    const [todos, setTodos] = todoAtom.useState()
    todoAtom.onChange((value) => {
        localStorage.setItem("mongez", JSON.stringify(value))
    })
    const addTodo = (todo:ITodo)=>{
        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }
    const toggleTodo = (id:number)=>{
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        setTodos(newTodos)
    } 
    const removeTodo = (id:number)=>{
        const newTodos = todos.filter((todo)=> todo.id !== id)
        setTodos(newTodos)
    }
    return {todos, addTodo, toggleTodo, removeTodo}
}
export default useMongez