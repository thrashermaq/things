import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.styl']
})
export class TodoEditComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo);
  }

  update(): void {
    this.todoService.updateTodo(this.todo);
  }

}
