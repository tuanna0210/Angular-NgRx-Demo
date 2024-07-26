import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo.model";

export const addTodo = createAction(
    'Todo: Add Todo',
    props<{content: string}>()
)

export const deleteTodo = createAction(
    'Todo: Delete Todo',
    props<{todo: Todo}>()
)

export const loadTodos = createAction(
    'Todo: Load Todos',
    props<{keyword: string}>()
)

export const loadTodoFromServiceSuccess = createAction(
    'Todo: Load Todos From Service',
    props<{ todos: Todo[]}>()
)