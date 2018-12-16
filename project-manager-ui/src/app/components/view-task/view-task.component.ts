import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [ApiService , UtilService]
})
export class ViewTaskComponent implements OnInit {
  tasks$: Observable<any>;
  projects$: Observable<any>;
  searchText: string = '';
  
  taskName: string = '';
  parentTaskName: string = '';
  priorityFrom: string = '';
  priorityTo: string = '';
  startDate: string = '';
  endDate: string = '';
  searchValue: string = '';
  project: string = '1';
  selectedProject: string = '';


  constructor(private apiService: ApiService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.tasks$ = this.apiService.getAllTasks();
    this.projects$ = this.apiService.getProjects();
    this.utilService.setHeader('View Task');
  }

  getDate(isoDate) {
    return this.utilService.getDate(isoDate);
  }

  endTask(taskId) {
    this.apiService.deleteTask(taskId).subscribe(() => {
      this.tasks$ = this.apiService.getAllTasks();
    });
  }

 /* searchTask(event) {
    if (event.target.placeholder === "Search By Task") {
      this.taskName = event.target.value + ":" + event.target.placeholder;
    } else if (event.target.placeholder === "Search By Parent Task") {
      this.parentTaskName = event.target.value + ":" + event.target.placeholder;
    }
    this.searchText = this.taskName + this.parentTaskName;

    console.log(this.searchText);
    console.log(event);
  }*/

  updateTaskNameModel(event) {
    this.taskName = event.target.value;
  }

  updateParentTaskModel(event) {
    this.parentTaskName = event.target.value;
  }
  
  updatePriorityFromModel(event) {
    this.priorityFrom = event.target.value;
  }

  updatePriorityToModel(event) {
    this.priorityTo = event.target.value;
  }

  updateStartDateModel(event) {
    this.startDate = this.getDate(event.target.value);
  }

  updateEndDateModel(event) {
    this.endDate = this.getDate(event.target.value);
  }

  updateSearchQuery(event) {
    this.searchValue = event.target.value;
  }

  sort(item, type) {
    this.tasks$ = this.utilService.sort(this.tasks$, item, type);
  }

  sortCompleted() {
    this.tasks$ = this.utilService.sortCompleted(this.tasks$);
  }

  changeProject(event) {
    this.project = event.target.value;
  }

  selectProjectname(id) {
    this.projects$.subscribe(projects => {
      this.selectedProject = projects.find(project => project.projectId.toString() === id).project;
      this.tasks$ = this.apiService.getTaskByProjectId(id);
    });
  }

}
