import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDosToStart = [
    {
      id: 1,
      text: "get new task",
      status: true
    },
    {
      id: 2,
      text: "think about it",
      status: false
    },
    {
      id: 3,
      text: "smile",
      status: false
    },
    {
      id: 4,
      text: "cry",
      status: false
    },
    {
      id: 5,
      text: "try again 20 times",
      status: false
    }
  ]

  constructor() { }

  checkIfThereIsTasks() {
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify(this.toDosToStart))
      return JSON.parse(localStorage.getItem('tasks'))
    } else {
      return JSON.parse(localStorage.getItem('tasks'))
    }
  }

  updateTask(id, status) {
    let toDos = JSON.parse(localStorage.getItem('tasks'));
    for (let index = 0; index < toDos.length; index++) {
      if (toDos[index].id == id) {
        toDos[index].status = status;
      }
    }
    this.saveTasks(JSON.stringify(toDos));
  }

  createNew(task){
    let toDos = JSON.parse(localStorage.getItem('tasks'));
    toDos.push(
      {id: toDos.length + 1, text: task, status: false}
    )
    localStorage.setItem('tasks', JSON.stringify(toDos))
  }

  saveTasks(tasks) {
    localStorage.setItem('tasks', tasks)
  }
}
