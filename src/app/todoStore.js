import {create} from 'zustand'

const store = (set) => ({
    todos : [],
    input : '',
   
    setInput : (value) => {
        set((state) => ({
            input : value
        }))
    },
    addTodo : (todo) => {
        if (todo.length > 0) {
            set((state) => ({
                todos : [...state.todos, todo]
            }))
        }
    },
    removeTodo : (todo) => {
        set((state) =>  ({
            todos : state.todos.filter(item => item != todo)
        }))
    },
    updateTodo : (todo) => {
        set((state) => ({
            input : state.todos.filter(item => item === todo),
            todos : state.todos.filter(item => item !== todo)
        }))
    },
})

export const todoStore = create(store);
