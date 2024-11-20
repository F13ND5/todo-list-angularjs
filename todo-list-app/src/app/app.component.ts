import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>

      <!-- Input and Button for Adding Task -->
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          (ngModel)="newTask"
          (keyup.enter)="addTask(newTask)"
          [disabled]="isTaskInputDisabled"
        />
        <button (click)="addTask(newTask)" [disabled]="isTaskInputDisabled">
          Add Task
        </button>
      </div>

      <!-- Task List -->
      <ul id="taskList">
        <li *ngFor="let task of tasks">
          <span [class.completed]="task.completed">{{ task.task }}</span>

          <!-- Action Buttons -->
          <button (click)="completeTask(task)" [disabled]="task.completed">
            Complete
          </button>
          <button (click)="editTask(task)">Edit</button>
          <button (click)="deleteTask(task)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.scss'], // Adjust to your CSS/SCSS file if needed
})
export class AppComponent {
  title = 'To-Do List App';
  tasks: Task[] = [];
  newTask: string = ''; // Two-way binding variable for input field
  isTaskInputDisabled: boolean = false; // Disables the input when task is being added

  // Method to add a new task
  addTask(task: string): void {
    if (task === '' || task === null) {
      alert('Please enter a valid task!');
      return; // Prevent adding empty tasks
    }

    this.tasks.push({ task, completed: false });
    this.newTask = ''; // Clear the input field after adding
  }

  // Method to delete a task
  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Method to mark a task as completed
  completeTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t === task);
    if (index !== -1) {
      this.tasks[index].completed = true; // Mark task as completed
    }
  }

  // Method to edit a task
  editTask(task: Task): void {
    const newTaskName = prompt('Edit Task:', task.task);
    if (newTaskName !== null && newTaskName.trim()) {
      task.task = newTaskName.trim(); // Update task name
    }
  }

}
