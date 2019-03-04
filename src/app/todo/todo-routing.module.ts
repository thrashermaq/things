import {TodoListComponent} from './todo-list/todo-list.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: TodoCreateComponent
  },
  {
    path: 'edit/:id',
    component: TodoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
