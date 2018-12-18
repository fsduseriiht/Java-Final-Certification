import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UtilService } from '../../shared/services/util.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  @Input() searchValue: string = '';
  @Input() projects: any;
  @Input() editedProjectId: any;
  @Output() onSuspendProject = new EventEmitter<string>();
  tasksPerProject: any;

  constructor(private utilService: UtilService, private apiService: ApiService) { }

  ngOnInit() {
    this.utilService.setHeader('Add Project');
    this.apiService.tasksPerProject().subscribe((tasks) => {
      this.tasksPerProject = tasks;
    })
  }

  suspendProject(id) {
    this.onSuspendProject.emit(id);
  }

  getDate(isoDate) {
    return this.utilService.getDate(isoDate);
  }

  getCompleted(startDate, endDate) {
    var startDateObj = new Date(startDate);
    var endDateObj = new Date(endDate);
    var timeDiff = Math.abs(endDateObj.getTime() - startDateObj.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  getTaskNumber(projectId) {
    return this.tasksPerProject && this.tasksPerProject[projectId] || 0;
  }
}
