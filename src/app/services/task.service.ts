import { Injectable } from '@angular/core';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [];
    /*this.tasks = [
      {title: 'write', description: 'I have to write', hide: true},
      {title: 'Create', description: 'I have to create', hide: true}
    ];*/
  }
  // Obtener todas las tareas
  getTask() {
    if (localStorage.getItem('tasks') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }
  }
  // Agregar tareas
  addTask(task: Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      // this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Indica a la memoria del navegadoro como voy a guarar
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks')); // String => arreglo
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  // Eliminar tareas
  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks' , JSON.stringify(this.tasks));
      }
    }
  }
}
