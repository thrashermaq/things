import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {

  private path = 'todos';

  constructor(private firestore: AngularFirestore) {
  }

  getTodos(): Observable<Todo[]> {
    return this.firestore.collection<Todo>(this.path).valueChanges();
  }

  getTodo(id: string): Observable<Todo> {
    return this.firestore.doc<Todo>(this.path + '/' + id).valueChanges();
  }

  deleteTodo(id: string): Promise<void> {
    return this.firestore.doc<Todo>(this.path + '/' + id).delete();
  }

  updateTodo(todo: Todo): Promise<void> {
    return this.firestore.doc<Todo>(this.path + '/' + todo.id).update(todo);
  }

  createTodo(todo: Todo): Promise<DocumentReference> {
    return this.firestore.collection<Todo>(this.path).add({...todo});
  }

}
