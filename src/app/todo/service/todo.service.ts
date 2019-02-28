import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Todo} from "../model/todo.model";
import {Observable} from "rxjs";

@Injectable()
export class TodoService {


  constructor(private firestore: AngularFirestore) {
  }

  getTodos(): Observable<Todo> {
    return this.firestore.doc<Todo>('todos/1').valueChanges();
  }


}
