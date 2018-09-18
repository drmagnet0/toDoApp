import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  toDos;

  constructor(
    private TodoService: TodoService
  ) {
    this.getData()
  }

  getData() {
    this.toDos = this.TodoService.checkIfThereIsTasks();
  }

  updateTask(id, status) {
    this.TodoService.updateTask(id, status);
  }

  ngOnInit() {
  }

}
