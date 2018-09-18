import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {

  constructor(
    private TodoService: TodoService,
    private router: Router
  ) { }

  createNewTask(task) {
    if(task){
      this.TodoService.createNew(task);
      this.router.navigate(['/toDos']);
    }else {
      console.log('err')
    }
  }

  ngOnInit() {
  }

}
