import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../moduls/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos:Todo[];

inputTodo:string = "";

  constructor() { }

  ngOnInit() {
    this.todos = [{
      content: 'First Todo',
      completed: false
    },
    {
      content: "Seconde todo",
      completed: false

    }
  ]

  }

  toggleDone(id:number){
    this.todos.map((v, i)=>{
      if(i == id) v.completed = !v.completed

      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v, i)=> i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }
}