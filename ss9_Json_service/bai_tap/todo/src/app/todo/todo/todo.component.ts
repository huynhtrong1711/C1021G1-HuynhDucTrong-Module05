import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo';
import {FormControl} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {Router} from '@angular/router';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[];
  formGroup = new FormControl();
  constructor(private custom : ServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.custom.getTodo().subscribe(data => {
      this.todo = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
  }

  toggleTodo(i: number) {
    this.todo[i].complete = !this.todo[i].complete;
  }

  change() {
    const value = this.formGroup.value;
      if (value) {
        const todo: Todo = {
          content : this.formGroup.value,
          complete: false
        };
        this.custom.addTodo(todo).subscribe( () => {
          this.ngOnInit()
        });
        this.formGroup.reset();
      }

  }


  deleteTodo(id: number) {
    const todos = this.todo[id];
    this.custom.deleteTodo(id).subscribe(()=>{
      this.todo = this.todo.filter(
        t => t.id !== todos.id
      )
    })
  }
}
