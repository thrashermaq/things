import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {Observable} from "rxjs";
import {Todo} from "../model/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todo$ = this.todoService.getTodos();
  }

}
