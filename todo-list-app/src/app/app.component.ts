import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
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
          [(ngModel)]="newTask"
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
          <br /><br />
          <button (click)="toggleTaskCompletion(task)">
            {{ task.completed ? 'Undo' : 'Complete' }}
          </button>
          <button (click)="editTask(task)">Edit</button>
          <button (click)="deleteTask(task)">Delete</button>
          <hr />
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
  taskIdCounter: number = 1; // Keeps track of the next ID to assign

  // Method to add a new task
  addTask(task: string): void {
    if (task === '' || task === null) {
      alert('Please enter a valid task!');
      return; // Prevent adding empty tasks
    }

    // Create a new task with an incremented ID
    this.tasks.push({ id: this.taskIdCounter++, task, completed: false });
    this.newTask = ''; // Clear the input field after adding
  }

  // Method to delete a task by ID
  deleteTask(task: Task): void {
    // Find the task by ID and remove it from the list
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Method to mark a task as completed or not
  toggleTaskCompletion(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed; // Toggle task completion
      // Check if the element exists before trying to access its properties
      const element = document.getElementById(`${task.id}`);
      if (element) {
        element.style.backgroundColor = 'green';
      }
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
