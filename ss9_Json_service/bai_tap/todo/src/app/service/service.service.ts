import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly DATA_API='http://localhost:3000/todo';

  constructor(private http : HttpClient) { }

  getTodo() {
    return this.http.get<Todo[]>(this.DATA_API);
  }

  addTodo(todo) {
    return this.http.post<Todo>(this.DATA_API, todo)
  }

  deleteTodo(id : number) {
    return this.http.delete(this.DATA_API + '/' + id)
  }


}
