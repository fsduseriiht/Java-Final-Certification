import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { ViewTaskComponent } from '../components/view-task/view-task.component';
import { CreateProjectComponent } from '../components/create-project/create-project.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { ViewProjectComponent } from '../components/view-project/view-project.component';
import { ViewUsersComponent } from '../components/view-users/view-users.component';

const routes: Routes = [
  { path: '', component: CreateTaskComponent, pathMatch: 'full' },
  { path: 'viewTask', component: ViewTaskComponent },
  { path: 'createTask', component: CreateTaskComponent },
  { path: 'editTask/:id', component: CreateTaskComponent },
  { path: 'editUser/:id', component: CreateUserComponent },
  { path: 'editProject/:id', component: CreateProjectComponent },
  { path: 'viewUser ', component: ViewUsersComponent },
  { path: 'createProject', component: CreateProjectComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'viewProject', component: ViewProjectComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
