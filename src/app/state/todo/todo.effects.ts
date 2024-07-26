import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../services/todo.service";
import { map, switchMap, tap } from "rxjs";
import { loadTodoFromServiceSuccess, loadTodos } from "./todo.actions";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) { 
    }

    getAllTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadTodos),
            tap((a) => console.log(a)),
            switchMap((props) => this.todoService.getAllTodos$(props.keyword).pipe(
                    map(todos => loadTodoFromServiceSuccess({todos: todos}))
                )
            )
        )
    });
}