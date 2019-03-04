import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.styl']
})
export class TodoEditComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  update(): void {
    this.todoService.updateTodo(this.todo);
  }

}
