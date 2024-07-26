import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getAllTodos$ = (keyword: string):Observable<Todo[]> => {
    console.log(keyword);
    return of(
      [
        {
          id: Date.now().toString(),
          content: 'Do first thing'
        },
        {
          id: Date.now().toString()+ 1,
          content: 'Do second thing'
        }
      ]
    )
  }
}
