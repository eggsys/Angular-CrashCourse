import { Injectable } from '@angular/core';
import { Task } from '../Task'    // interface
import { TASKS } from '../mock-tasks' // mock data
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
