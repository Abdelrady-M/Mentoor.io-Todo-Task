import { useEffect, useState } from "react"
import { ITodo } from "../../types"
import { todoAtom } from "../../store/atoms/tod-do-atom"

const useMongez = ()=>{
    const [todos, setTodos] = todoAtom.useState()
    const [isLoading, setIsLoading] = useState(false)
    todoAtom.onChange((value) => {
        localStorage.setItem("mongez", JSON.stringify(value))
    })
    const addTodo = async (todo:ITodo)=>{
        setIsLoading(true)
        const newTodos = [...todos, todo]
        setTodos(newTodos)
        setIsLoading(false)
    }
    const toggleTodo = (id:number)=>{
        setIsLoading(true)
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        setTodos(newTodos)
        setIsLoading(false)
    } 
    const removeTodo = (id:number)=>{
        setIsLoading(true)
        const newTodos = todos.filter((todo)=> todo.id !== id)
        setTodos(newTodos)
        setIsLoading(false)
    }
    const updateTodo = (id:number, title:string)=>{
        setIsLoading(true)
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, title}
            }
            return todo
        })
        setTodos(newTodos)
        setIsLoading(false)
    }
    useEffect(() => {
        if (!localStorage.getItem("mongez")) return;
        const storedData = JSON.parse(localStorage.getItem("mongez") as string);
        if (Array.isArray(storedData)) {
            setTodos(storedData as ITodo[]);
        }
      }, []);
    return {todos, addTodo, toggleTodo, removeTodo, updateTodo, isLoading}
}
export default useMongez
