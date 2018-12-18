import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ApiService]
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  submitted: boolean = false;
  maxPriority: number = 30;
  minPriority: number = 0;
  editedProjectId: number;
  startDate: any;
  endDate: any;
  priority = 0;
  users$: any;
  projects$: any;
  validationError: string = '';
  allowDates = false;
  selectedUser: string = '';
  searchValue: string = '';
  user: any;
  projectName: any;

  constructor(
    private apiService: ApiService,
    private utilService: UtilService,
    private router: Router,
    route: ActivatedRoute) {
      this.editedProjectId = route.snapshot.params['id'];
    }

  ngOnInit() {
    this.utilService.setHeader('Add Project');
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [ Validators.required, Validators.maxLength(20),  Validators.minLength(2) ]),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      priority: new FormControl('',  [ Validators.required]),
      user: new FormControl('', [ Validators.required ])
    });
    this.users$ = this.apiService.getAllUsers();
    this.projects$ = this.apiService.getProjects();
    this.startDate = this.utilService.getDate(new Date().toISOString());
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.endDate = this.utilService.getDate(tomorrow.toISOString());
    if (this.editedProjectId) {	
      this.projects$.subscribe(projects => {
        const editedProject = projects.find(project => project.projectId.toString() === this.editedProjectId);
        this.startDate = this.utilService.getDate(editedProject.startDate);
        this.endDate = this.utilService.getDate(editedProject.endDate);
        this.priority = editedProject.priority;
        this.projectName = editedProject.project;
        this.user = editedProject.userId;
        this.allowDates = editedProject.startDate ? true : false;
        this.selectUser(this.user);
      });
    }
  }

  onSubmit() {
    this.validationError = '';
    if (this.projectForm.invalid) {
      this.validationError = 'Please enter the required fields';
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
    if (this.editedProjectId) {
      this.apiService.updateProject(this.projectForm, this.editedProjectId).subscribe(() => {
        this.projects$ = this.apiService.getProjects();
        this.clearData();
      });
    } else {
      this.apiService.createProject(this.projectForm).subscribe(() => {
        this.projects$ = this.apiService.getProjects();
        this.clearData();
      });
    }
  }

  cancelEdit() {
    this.router.navigateByUrl('createProject');
  }

  sort(item, type) {
    this.projects$ = this.utilService.sort(this.projects$, item, type);
  }

  sortCompleted() {
    this.projects$ = this.utilService.sortCompleted(this.projects$);
  }

  clearData() {
    this.editedProjectId =  null;
    this.router.navigateByUrl('createProject');
  }

  deleteUser(userId) {
    this.apiService.deleteUser(userId).subscribe(() => {
      this.users$ = this.apiService.getAllUsers();
    });
  }

  changeAllowDates(event) {
    this.allowDates = event.target.checked;
  }

  updateSearchQuery(event) {
    this.searchValue = event.target.value;
  }

  selectUser(id) {
    this.users$.subscribe(users => {
      const selectedUserDetails = users.find(user => user.userId.toString() === id.toString());
      this.selectedUser = selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName;
    });
  }

  suspendProject(projectId) {
    this.apiService.deleteProject(projectId).subscribe(() => {
      this.projects$ = this.apiService.getProjects();
    });
  }
}
