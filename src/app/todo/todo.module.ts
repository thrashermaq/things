import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {TodoService} from './service/todo.service';
import {TodoListComponent} from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFirestoreModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
