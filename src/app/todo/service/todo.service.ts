import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoService {

  private path = 'todos';

  constructor(private firestore: AngularFirestore) {
  }

  getTodos(): Observable<Todo[]> {
    return this.firestore.collection<Todo>(this.path).snapshotChanges().pipe(
      map(dcaArray => dcaArray.map(dca => {
        const todo = dca.payload.doc.data();
        todo.id = dca.payload.doc.id;
        return todo;
      }))
    );
  }

  getTodo(id: string): Observable<Todo> {
    return this.firestore.doc<Todo>(this.path + '/' + id).valueChanges();
  }

  deleteTodo(id: string): Promise<void> {
    return this.firestore.doc<Todo>(this.path + '/' + id).delete();
  }

  updateTodo(todo: Todo): Promise<void> {
    const id = todo.id;
    delete todo.id;
    return this.firestore.doc<Todo>(this.path + '/' + id).update({...todo});
  }

  createTodo(todo: Todo): Promise<DocumentReference> {
    delete todo.id;
    return this.firestore.collection<Todo>(this.path).add({...todo});
  }

}
