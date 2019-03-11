import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../../auth/service/auth.service';

@Injectable()
export class TodoService implements OnInit {

  private todos: AngularFirestoreCollection<Todo>;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.user.pipe(
      map(usr => {
        if (usr != null) {
          return this.firestore.collection<Todo>(`users/${usr.uid}/todos`);
        } else {
          return null;
        }
      })
    ).subscribe(todos => this.todos = todos);
  }

  ngOnInit(): void {
  }

  getTodos(): Observable<Todo[]> {
    return this.todos.snapshotChanges().pipe(
      map(dcaArray => dcaArray.map(dca => {
        const todo = dca.payload.doc.data();
        todo.id = dca.payload.doc.id;
        return todo;
      }))
    );
  }

  getTodo(id: string): Observable<Todo> {
    return this.todos.doc<Todo>(id).valueChanges().pipe(
      map(todo => {
        todo.id = id;
        return todo;
      })
    );
  }

  deleteTodo(id: string): Promise<void> {
    return this.todos.doc<Todo>(id).delete();
  }

  updateTodo(todo: Todo): Promise<void> {
    const id = todo.id;
    delete todo.id;
    return this.todos.doc<Todo>(id).update({...todo});
  }

  createTodo(todo: Todo): Promise<DocumentReference> {
    delete todo.id;
    return this.todos.add({...todo});
  }

}
