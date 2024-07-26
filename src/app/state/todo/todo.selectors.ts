import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const todoState = (state: AppState) => state.todoState;

export const selectAllTodos = createSelector(
  todoState,
  (todoState) => { 
    console.log(todoState);
    return todoState.todos
  }
);

export const countTodos = createSelector(
    todoState,
    (state) => state.todos.length
)