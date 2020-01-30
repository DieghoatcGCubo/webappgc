import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService) {

  }

  ngOnInit() {
  }

  // Obtengo los valores del formulario

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    console.log('agregando', newTitle.value, newDescription.value);
  // Agrega tareas
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();
    console.log(this.taskService.getTask());
    return false; // Desactiva enentos
  }
}
