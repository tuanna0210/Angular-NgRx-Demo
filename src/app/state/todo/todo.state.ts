import { Todo } from "../../models/todo.model";

export interface TodoState {
    todos: Todo[],
    error: string,
    status: 'pending' | 'success'
}