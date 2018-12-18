import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  baseUrl: string
  allTasks$: Observable<any>;

  constructor(private http: Http) {
    const appProto = window.location.href.split('/')[0];
    const appDNS = window.location.href.split('/')[2];
    const appPORT = ':8080';

    const locationUrl = appProto + '//' + appDNS.split(':')[0] + appPORT;
    this.baseUrl = locationUrl + '/projectmanagerbackend/';
   }

  /******* Service Call To CREATE New Task Details *******/
  createTask(form) {
    const formVal = form.value;
    let payload = {};
    if (formVal.isParentTask) {
      payload = {
        parentTask: formVal.task,
      };
      return this.http.post(this.baseUrl + 'parent/', payload);
    } else {
      payload = {
        task: formVal.task,
        parentId: formVal.parentTask || -1,
        startDate: new Date(formVal.sdate).toISOString(),
        endDate: new Date(formVal.edate).toISOString(),
        priority: formVal.priority,
        projectId: formVal.project,
        userId: formVal.user
      };
      return this.http.post(this.baseUrl + 'task/', payload);
    }
  }

  /******* Service Call To Update Existing Task Details *******/
  updateTask(form, taskId) {
    const formVal = form.value;
    let payload;
    if (formVal.isParentTask) {
      payload = {
        taskId: taskId,
        task: formVal.task
      };
      return this.http.put(this.baseUrl + 'task/convert/'+taskId, payload);
    } else {
      payload = {
        taskId: taskId,
        task: formVal.task,
        parentId: formVal.parentTask,
        startDate: new Date(formVal.sdate).toISOString(),
        endDate: new Date(formVal.edate).toISOString(),
        priority: formVal.priority,
        projectId: formVal.project,
        userId: formVal.user
      };
      return this.http.put(this.baseUrl + 'task/'+taskId, payload);
    }
  }

  getParentTasks() {
    return this.http.get(this.baseUrl + 'parent/list').map(res => res.json());
  }

  getProjects() {
    return this.http.get(this.baseUrl + 'project/list').map(res => res.json());
  }

  getAllTasks() {
    this.allTasks$ = this.http.get(this.baseUrl + 'task/list').map(res => res.json());
    return this.allTasks$;
  }

  deleteTask(taskId) {
    return this.http.delete(this.baseUrl + 'task/' + taskId);
  }

  getEditTask() {
    return {
        taskId: 1,
        task: "task1",
        parentId: 105,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        priority: 30
    };
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + 'user/list').map(res => res.json());
  }

  createUser(form) {
    const formVal = form.value;
    const payload = {
      firstName: formVal.firstName,
      lastName: formVal.lastName,
      employeeId: formVal.employeeId
    };
    return this.http.post(this.baseUrl + 'user/', payload);
  }

  updateUser(form, userId) {
    const formVal = form.value;
    const payload = {
      firstName: formVal.firstName,
      lastName: formVal.lastName,
      employeeId: formVal.employeeId,
      userId: userId
    };
    return this.http.put(this.baseUrl + 'user/'+userId, payload);
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + 'user/'+userId);
  }

  getTaskByProjectId(projectId) {
    return this.http.get(this.baseUrl + 'task/list/' + projectId).map(res => res.json());
  }

  createProject(form) {
    const formVal = form.value;
    const payload = {
      startDate: formVal.startDate ? formVal.startDate: null,
      endDate: formVal.endDate ? formVal.endDate: null,
      project: formVal.projectName,
      priority: formVal.priority,
      userId: formVal.user
    };
    return this.http.post(this.baseUrl + 'project/', payload);
  }

  updateProject(form, projectId) {
    const formVal = form.value;
    const payload = {
      startDate: formVal.startDate ? formVal.startDate: null,
      endDate: formVal.endDate ? formVal.endDate: null,
      project: formVal.projectName,
      priority: formVal.priority,
      userId: formVal.user,
      projectId: projectId
    };
    return this.http.put(this.baseUrl + 'project/'+projectId, payload);
  }

  deleteProject(projectId) {
    return this.http.delete(this.baseUrl + 'project/'+projectId);
  }

  tasksPerProject() {
    return this.http.get(this.baseUrl + 'task/countperproject/').map(res => res.json());
  }
}
