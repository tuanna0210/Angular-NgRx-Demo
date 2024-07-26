import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState } from '../../state/todo/todo.state';
import { countTodos } from '../../state/todo/todo.selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  todoCount$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.todoCount$ = this.store.select(countTodos);
  }
}
