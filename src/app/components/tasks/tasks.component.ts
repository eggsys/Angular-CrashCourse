import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'    // interface
import {TASKS} from '../../mock-tasks' // mock data

// this components shall get data from json, Backend

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS
  constructor() { }

  ngOnInit(): void {
  }

}
