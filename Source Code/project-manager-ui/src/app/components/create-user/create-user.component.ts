import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [ApiService]
})
export class CreateUserComponent implements OnInit {
  parentTasks$: Observable<any>;
  userForm: FormGroup;
  submitted: boolean = false;
  maxPriority: number = 30;
  minPriority: number = 0;
  editedUserId: number;
  taskName: any;
  parentTask: any;
  startDate: any;
  endDate: any;
  priority: any;
  users$: any;
  firstName: string = '';
  lastName: string = '';
  employeeId: string = '';
  searchValue: string = '';
  validationError: string = '';

  constructor(
    private apiService: ApiService,
    private utilService: UtilService,
    private router: Router,
    route: ActivatedRoute) {
      this.editedUserId = route.snapshot.params['id'];
    }

  ngOnInit() {
    this.utilService.setHeader('Add User');
    this.userForm = new FormGroup({
      firstName: new FormControl('', [ Validators.required, Validators.maxLength(20),  Validators.minLength(2) ]),
      lastName: new FormControl('', [ Validators.required, Validators.maxLength(20),  Validators.minLength(2) ]),
      employeeId: new FormControl('', [ Validators.required ])
    });
    this.users$ = this.apiService.getAllUsers();
    if (this.editedUserId) {	
      this.users$.subscribe(users => {
        const editedUser = users.find(user => user.userId.toString() === this.editedUserId);
        this.firstName = editedUser.firstName;
        this.lastName = editedUser.lastName;
        this.employeeId = editedUser.employeeId;
      });
    }
  }

  onSubmit() {
    this.validationError = '';
    if (this.userForm.invalid) {
      this.validationError = 'Please enter the required fields';
      return;
    }
    this.submitted = true;
    if (this.editedUserId) {
      this.apiService.updateUser(this.userForm, this.editedUserId).subscribe(() => {
        this.users$ = this.apiService.getAllUsers();
        this.clearData();
      });
    } else {
      this.apiService.createUser(this.userForm).subscribe(() => {
        this.users$ = this.apiService.getAllUsers();
        this.clearData();
      });
    }
  }

  cancelEdit() {
    this.router.navigateByUrl('createUser');
  }

  updateSearchQuery(event) {
    this.searchValue = event.target.value;
  }

  sort(item, number) {
    this.users$ = this.users$
      .map((data) => {
        data.sort((a, b) => {
          var x = number ? parseInt(a[item], 10) : a[item].toLowerCase();
          var y = number ? parseInt(b[item], 10) : b[item].toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        return data;
      });
  }

  clearData() {
    this.editedUserId =  null;
    this.router.navigateByUrl('createUser');
  }

  deleteUser(userId) {
    this.apiService.deleteUser(userId).subscribe(() => {
      this.users$ = this.apiService.getAllUsers();
    });
  }
}
