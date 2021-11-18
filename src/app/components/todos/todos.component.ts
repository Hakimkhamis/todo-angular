import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../moduls/Todo";
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos:Todo[];

inputTodo:string = "";

  constructor(private dataService: DataService, private dialog: MatDialog) { }

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

  onFormSubmit(Form: NgForm){

  }

  editTodo(todo: Todo){

    const index = this.todos.indexOf(todo)
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '00px',
    });
  }
}
