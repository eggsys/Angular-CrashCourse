import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-tasks'

// this components shall get data from json, Backend

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
