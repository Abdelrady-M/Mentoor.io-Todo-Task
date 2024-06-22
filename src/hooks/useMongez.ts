import { useEffect } from "react"
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
    const updateTodo = (id:number, title:string)=>{
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, title}
            }
            return todo
        })
        setTodos(newTodos)
    }
    useEffect(() => {
        if (!localStorage.getItem("mongez")) return;
        const storedData = JSON.parse(localStorage.getItem("mongez") as string);
        if (Array.isArray(storedData)) {
          setTodos(storedData as ITodo[]);
        }
      }, []);
    return {todos, addTodo, toggleTodo, removeTodo, updateTodo}
}
export default useMongez