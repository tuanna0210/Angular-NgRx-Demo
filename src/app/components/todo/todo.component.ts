import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectAllTodos } from '../../state/todo/todo.selectors';
import { addTodo, deleteTodo, loadTodos } from '../../state/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  public todo: string = '';
  public allTodos$ : Observable<Todo[]>;

  constructor(private store: Store<AppState>){
    this.allTodos$ = this.store.select<Todo[]>(selectAllTodos);
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos({ keyword: 'search keyword'}));
  }

  addTodo() {
    this.store.dispatch(addTodo({content: this.todo}));
    this.todo = '';
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(deleteTodo({todo}));
  }
}
