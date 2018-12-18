import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [ApiService]
})
export class CreateTaskComponent implements OnInit {
  parentTasks$: Observable<any>;
  myForm: FormGroup;
  submitted: boolean = false;
  maxPriority: number = 30;
  minPriority: number = 0;
  editedTaskId: number;
  taskName: any;
  parentTask: any;
  startDate: any;
  endDate: any;
  priority = 0;
  selectedTask: string = '';
  selectedProject: string = '';
  selectedUser: string = '';
  projects$: any;
  users$: any;
  user: any;
  project: any;
  isParentTask = false;
  validationError: string = '';

  constructor(
    private apiService: ApiService,
    private utilService: UtilService,
    private router: Router,
    route: ActivatedRoute) {
      this.editedTaskId = route.snapshot.params['id'];
    }

  ngOnInit() {
    this.utilService.setHeader('Add Task');
    this.myForm = new FormGroup({
      task: new FormControl('', [ Validators.required, Validators.maxLength(20),  Validators.minLength(2) ]),
      priority: new FormControl(0, [ Validators.required ]),
      parentTask: new FormControl(''),
      project: new FormControl('', [ Validators.required ]),
      user: new FormControl('', [ Validators.required ]),
      sdate: new FormControl('', Validators.required),
      edate: new FormControl('', Validators.required),
      isParentTask: new FormControl()
    });
    this.parentTasks$ = this.apiService.getParentTasks();
    this.projects$ = this.apiService.getProjects();
    this.users$ = this.apiService.getAllUsers();
    if (this.editedTaskId) {
      this.apiService.getAllTasks().subscribe(tasks => {
        const editedTask = tasks.find(task => task.taskId.toString() === this.editedTaskId);
        this.taskName = editedTask.task;
        this.priority = editedTask.priority;
        this.parentTask = editedTask.parentId;
        this.user = editedTask.userId;
        this.project = editedTask.projectId;
        this.startDate = this.utilService.getDate(editedTask.startDate);
        this.endDate =  this.utilService.getDate(editedTask.endDate);
        this.selectProject(this.project);
        this.selectParentTask(this.parentTask);
        this.selectUser(this.user);
      });
    }
  }

  onSubmit() {
    this.validationError = '';
    if(!this.myForm.valid && this.isParentTask) {
      this.validationError = 'Please fill the required fields.';
      return;
    }
    const today = new Date();
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    
    if (endDate < startDate) {
      this.validationError = 'The end date cannot be less than the start date.';
      return;
    }

    if (this.utilService.getCalculatdDate(today) > this.utilService.getCalculatdDate(startDate)) {
      this.validationError = 'The start date cannot be less than today.';
      return;
    }

    this.submitted = true;
    if (this.editedTaskId) {
      this.apiService.updateTask(this.myForm, this.editedTaskId).subscribe(() => {
        this.loadViewTask();
      });
    } else {
      this.apiService.createTask(this.myForm).subscribe(() => {
        this.loadViewTask();
      });
    }
  }

  loadViewTask() {
    this.router.navigateByUrl('viewTask');
    const links: any = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.innerHTML.trim() ===  'View Task') {
        link.classList.add('active');
      }
    });
  }

  cancelEdit() {
    this.loadViewTask();
  }

  selectParentTask(id) {
    this.parentTasks$.subscribe(parentTasks => {
      this.selectedTask = parentTasks.find(parentTask => parentTask.parentId.toString() === id.toString()).parentTask;
    });
  }

  selectProject(id) {
    this.projects$.subscribe(projects => {
      this.selectedProject = projects.find(project => project.projectId.toString() === id.toString()).project;
    });
  }

  selectUser(id) {
    this.users$.subscribe(users => {
      const selectedUserDetails = users.find(user => user.userId.toString() === id.toString());
      this.selectedUser = selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName;
    });
  }

}
