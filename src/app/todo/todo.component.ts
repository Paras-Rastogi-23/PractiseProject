import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos=[
    {
      item:'Paras is a Coder',
    },
    {
      item:'Sona is a Coder',
    },
    {
      item:'Arun is a Coder',
    },
    {
      item:'Aditya is a Coder',
    },
    {
      item:'Deepak is a Coder',
    },
    {
      item:'Manish is a Coder',
    },
  ]

  addTodo(input:HTMLInputElement){
    this.todos = [{item:input.value}, ...this.todos];
    input.value = '';
  }

  removeTodo(todo,i){
    this.todos.splice(i,1);
  }

  ngOnInit(): void {
  }

}
