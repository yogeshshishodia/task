import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Tasks';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task ?: Task;
  faCoffee = faCoffee;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  taskToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
