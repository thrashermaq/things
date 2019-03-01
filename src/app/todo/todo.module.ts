import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {TodoService} from './service/todo.service';
import {TodoListComponent} from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoCreateComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
