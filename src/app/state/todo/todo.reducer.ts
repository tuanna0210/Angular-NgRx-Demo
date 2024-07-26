import { createReducer, on } from "@ngrx/store";
import { addTodo, deleteTodo, loadTodoFromServiceSuccess } from "./todo.actions";
import { TodoState } from "./todo.state";

const initialState : TodoState = {
    todos: [],
    error: '',
    status: 'pending'
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, {content}) => {
        console.log('Add todo action is executing');
        console.log(state);
        return {
            ...state,
            todos: [...state.todos, {id: Date.now().toString(), content}]
        }
    }),
    on(deleteTodo, (state, {todo}) => {
        console.log('Delete todo action is executing');
        return {
            ...state,
            todos: state.todos.filter(t => t.id != todo.id)
        }
    }),
    on(loadTodoFromServiceSuccess, (state, {todos}) => {
        console.log('Todos loaded from service, now updates to store');
        return {
            ...state,
            todos: todos
        }
    })
)