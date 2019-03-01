import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.styl']
})
export class TodoCreateComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService) {
    this.todo = new Todo();
  }

  ngOnInit() {
  }

  create(): void {
    this.todoService.createTodo(this.todo);
  }

}
