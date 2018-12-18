webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_task_create_task_component__ = __webpack_require__("./src/app/components/create-task/create-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_view_task_view_task_component__ = __webpack_require__("./src/app/components/view-task/view-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_create_project_create_project_component__ = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_create_user_create_user_component__ = __webpack_require__("./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_view_project_view_project_component__ = __webpack_require__("./src/app/components/view-project/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_view_users_view_users_component__ = __webpack_require__("./src/app/components/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_create_task_create_task_component__["a" /* CreateTaskComponent */], pathMatch: 'full' },
    { path: 'viewTask', component: __WEBPACK_IMPORTED_MODULE_4__components_view_task_view_task_component__["a" /* ViewTaskComponent */] },
    { path: 'createTask', component: __WEBPACK_IMPORTED_MODULE_3__components_create_task_create_task_component__["a" /* CreateTaskComponent */] },
    { path: 'editTask/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_create_task_create_task_component__["a" /* CreateTaskComponent */] },
    { path: 'editUser/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_create_user_create_user_component__["a" /* CreateUserComponent */] },
    { path: 'editProject/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_create_project_create_project_component__["a" /* CreateProjectComponent */] },
    { path: 'viewUser ', component: __WEBPACK_IMPORTED_MODULE_8__components_view_users_view_users_component__["a" /* ViewUsersComponent */] },
    { path: 'createProject', component: __WEBPACK_IMPORTED_MODULE_5__components_create_project_create_project_component__["a" /* CreateProjectComponent */] },
    { path: 'createUser', component: __WEBPACK_IMPORTED_MODULE_6__components_create_user_create_user_component__["a" /* CreateUserComponent */] },
    { path: 'viewProject', component: __WEBPACK_IMPORTED_MODULE_7__components_view_project_view_project_component__["a" /* ViewProjectComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "hr {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.active {\r\n  font-weight: 900;\r\n}\r\n\r\n.header {\r\n  text-align: center;\r\n  background: #2d2d2c;\r\n  color: white;\r\n  margin-bottom: 40px;\r\n  padding: 14px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"header\">\r\n  <h3>\r\n    Project Manager\r\n  </h3>\r\n  <span id=\"subHeading\">{{subHeading}}</span>\r\n</div>\r\n<div class=\"container\">\r\n  <nav class=\"nav\">\r\n    <a (click)=\"clicked($event)\" class=\"nav-link\" routerLink=\"/createProject\">Add Project</a>\r\n    <a (click)=\"clicked($event)\" class=\"nav-link active\" routerLink=\"/createTask\">Add Task</a>\r\n    <a (click)=\"clicked($event)\" class=\"nav-link\" routerLink=\"/createUser\">Add User</a>\r\n    <a (click)=\"clicked($event)\" class=\"nav-link\" routerLink=\"/viewTask\">View Task</a>\r\n  </nav>\r\n  <hr>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(utilService) {
        this.utilService = utilService;
        this.title = 'app';
        this.subHeading = 'Add Task';
    }
    AppComponent.prototype.clicked = function (event) {
        this.subHeading = event.target.text;
        this.utilService.setHeader(this.subHeading);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__["a" /* UtilService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_create_task_create_task_component__ = __webpack_require__("./src/app/components/create-task/create-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_view_task_view_task_component__ = __webpack_require__("./src/app/components/view-task/view-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_pipes_search_content_pipe__ = __webpack_require__("./src/app/shared/pipes/search-content.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_user_create_user_component__ = __webpack_require__("./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_project_create_project_component__ = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_view_project_view_project_component__ = __webpack_require__("./src/app/components/view-project/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_pipes_search_table_pipe__ = __webpack_require__("./src/app/shared/pipes/search-table.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_view_users_view_users_component__ = __webpack_require__("./src/app/components/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_create_task_create_task_component__["a" /* CreateTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_view_task_view_task_component__["a" /* ViewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_pipes_search_content_pipe__["a" /* SearchContentPipe */],
                __WEBPACK_IMPORTED_MODULE_11__components_create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_create_project_create_project_component__["a" /* CreateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_view_project_view_project_component__["a" /* ViewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_pipes_search_table_pipe__["a" /* SearchTablePipe */],
                __WEBPACK_IMPORTED_MODULE_15__components_view_users_view_users_component__["a" /* ViewUsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_util_service__["a" /* UtilService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-project/create-project.component.css":
/***/ (function(module, exports) {

module.exports = ".date-field {\r\n    width: 200px;\r\n    display: inline;\r\n}\r\n\r\n.minPriority {\r\n    float: left;\r\n}\r\n\r\n.maxPriority {\r\n   float: right; \r\n}\r\n\r\n.error {\r\n    color: red;\r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"projectForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                <p>\r\n                    Project:\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"projectName\" [(ngModel)]=\"projectName\"/>\r\n                <span *ngIf=\"projectForm.controls.projectName.errors && (projectForm.controls.projectName.dirty || projectForm.controls.projectName.touched)\">Please enter proper project name.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                <input type=\"checkbox\" [checked]=\"allowDates\" (change)=\"changeAllowDates($event)\"/>\r\n                <label>Set start and end date</label>\r\n                <span *ngIf=\"allowDates\">\r\n                    <input type=\"date\" class=\"form-control date-field\" formControlName=\"startDate\" [(ngModel)]=\"startDate\"/>\r\n                    <span *ngIf=\"projectForm.controls.startDate.errors && (projectForm.controls.startDate.dirty || projectForm.controls.startDate.touched)\">Please enter start date.</span>\r\n                    <input type=\"date\" class=\"form-control date-field\" formControlName=\"endDate\" [(ngModel)]=\"endDate\"/>\r\n                <span *ngIf=\"projectForm.controls.endDate.errors && (projectForm.controls.endDate.dirty || projectForm.controls.endDate.touched)\">Please enter end date.</span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n            <p>\r\n              Priority:\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n            <span class=\"minPriority\">{{minPriority}}</span>\r\n            <span class=\"maxPriority\">{{maxPriority}}</span>\r\n            <input type=\"range\" [(ngModel)]=\"priority\" [max]=\"maxPriority\" [min]=\"minPriority\" class=\"form-control\" formControlName=\"priority\"/>\r\n            <span [hidden]=\"projectForm.controls.priority.valid || (projectForm.controls.priority.pristine && !submitted)\">Please select proper Priority.</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n            <p>\r\n              Manager\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n            <input type=\"text\" disabled class=\"form-control\" [value]=\"selectedUser\"/>\r\n          </div>\r\n          <button type=\"button\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn btn-info btn-sm search\" data-toggle=\"modal\" data-target=\"#userModal\">Search</button>\r\n          <div id=\"userModal\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title\">User Modal</h4>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p>Select manager from the list</p>\r\n                  <select class=\"form-control\" [(ngModel)]=\"user\" formControlName=\"user\">\r\n                    <option *ngFor=\"let user of (users$ | async)\" [value]=\"user.userId\">\r\n                      {{user.firstName}} {{user.lastName}}\r\n                    </option>\r\n                  </select>\r\n                  <span *ngIf=\"projectForm.controls.user.errors\">Please select manager.</span>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectUser(user)\" data-dismiss=\"modal\">Select</button>\r\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row form-group\" *ngIf=\"!editedProjectId\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary form-control\">Add</button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                <button type=\"reset\" class=\"btn btn-primary form-control\">Reset</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\" *ngIf=\"editedProjectId\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n              <button type=\"submit\" class=\"btn btn-primary form-control\">Update</button>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n              <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"cancelEdit()\">Cancel</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n</form>\r\n<div class-=\"row form-group\" *ngIf=\"validationError\">\r\n    <span class=\"error\">{{validationError}}</span>\r\n  </div>\r\n<div class=\"row\">\r\n  <span class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7 search-field\">\r\n    <input type=\"text\" class=\"form-control\" [value]=\"searchValue\" (input)=\"updateSearchQuery($event)\" placeholder=\"Search...\" >\r\n  </span>\r\n  <span class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\r\n    <span>\r\n      <label>Sort By:</label>\r\n      <button class=\"btn btn-default\" (click)=\"sort('startDate', 'date')\">Start Date</button>\r\n    </span>\r\n    <span>\r\n      <button class=\"btn btn-default\" (click)=\"sort('endDate', 'date')\">End Date</button>\r\n    </span>\r\n    <span>\r\n      <button class=\"btn btn-default\" (click)=\"sort('priority', 'number')\">Priority</button>\r\n    </span>\r\n    <span>\r\n        <button class=\"btn btn-default\" (click)=\"sortCompleted()\">Completed</button>\r\n      </span>\r\n  </span>\r\n</div>\r\n<app-view-project [projects]=\"(projects$ | async)\"\r\n                  [editedProjectId]=\"editedProjectId\"\r\n                  [searchValue]=\"searchValue\"\r\n                  (onSuspendProject)=\"suspendProject($event)\"></app-view-project>\r\n"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateProjectComponent = /** @class */ (function () {
    function CreateProjectComponent(apiService, utilService, router, route) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.router = router;
        this.submitted = false;
        this.maxPriority = 30;
        this.minPriority = 0;
        this.priority = 0;
        this.validationError = '';
        this.allowDates = false;
        this.selectedUser = '';
        this.searchValue = '';
        this.editedProjectId = route.snapshot.params['id'];
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.setHeader('Add Project');
        this.projectForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            projectName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
            startDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            endDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            priority: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            user: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
        this.users$ = this.apiService.getAllUsers();
        this.projects$ = this.apiService.getProjects();
        this.startDate = this.utilService.getDate(new Date().toISOString());
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.endDate = this.utilService.getDate(tomorrow.toISOString());
        if (this.editedProjectId) {
            this.projects$.subscribe(function (projects) {
                var editedProject = projects.find(function (project) { return project.projectId.toString() === _this.editedProjectId; });
                _this.startDate = _this.utilService.getDate(editedProject.startDate);
                _this.endDate = _this.utilService.getDate(editedProject.endDate);
                _this.priority = editedProject.priority;
                _this.projectName = editedProject.project;
                _this.user = editedProject.userId;
                _this.allowDates = editedProject.startDate ? true : false;
                _this.selectUser(_this.user);
            });
        }
    };
    CreateProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validationError = '';
        if (this.projectForm.invalid) {
            this.validationError = 'Please enter the required fields';
            return;
        }
        var today = new Date();
        var startDate = new Date(this.startDate);
        var endDate = new Date(this.endDate);
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
            this.apiService.updateProject(this.projectForm, this.editedProjectId).subscribe(function () {
                _this.projects$ = _this.apiService.getProjects();
                _this.clearData();
            });
        }
        else {
            this.apiService.createProject(this.projectForm).subscribe(function () {
                _this.projects$ = _this.apiService.getProjects();
                _this.clearData();
            });
        }
    };
    CreateProjectComponent.prototype.cancelEdit = function () {
        this.router.navigateByUrl('createProject');
    };
    CreateProjectComponent.prototype.sort = function (item, type) {
        this.projects$ = this.utilService.sort(this.projects$, item, type);
    };
    CreateProjectComponent.prototype.sortCompleted = function () {
        this.projects$ = this.utilService.sortCompleted(this.projects$);
    };
    CreateProjectComponent.prototype.clearData = function () {
        this.editedProjectId = null;
        this.router.navigateByUrl('createProject');
    };
    CreateProjectComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.apiService.deleteUser(userId).subscribe(function () {
            _this.users$ = _this.apiService.getAllUsers();
        });
    };
    CreateProjectComponent.prototype.changeAllowDates = function (event) {
        this.allowDates = event.target.checked;
    };
    CreateProjectComponent.prototype.updateSearchQuery = function (event) {
        this.searchValue = event.target.value;
    };
    CreateProjectComponent.prototype.selectUser = function (id) {
        var _this = this;
        this.users$.subscribe(function (users) {
            var selectedUserDetails = users.find(function (user) { return user.userId.toString() === id.toString(); });
            _this.selectedUser = selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName;
        });
    };
    CreateProjectComponent.prototype.suspendProject = function (projectId) {
        var _this = this;
        this.apiService.deleteProject(projectId).subscribe(function () {
            _this.projects$ = _this.apiService.getProjects();
        });
    };
    CreateProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-project',
            template: __webpack_require__("./src/app/components/create-project/create-project.component.html"),
            styles: [__webpack_require__("./src/app/components/create-project/create-project.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/create-task/create-task.component.css":
/***/ (function(module, exports) {

module.exports = ".minPriority {\r\n    float: left;\r\n}\r\n\r\n.maxPriority {\r\n   float: right; \r\n}\r\n\r\n.heading {\r\n\tfont-size: x-large;\r\n}\r\n\r\n.search {\r\n    height: 37px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Project\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <input type=\"text\" disabled class=\"form-control\" [value]=\"selectedProject\"/>\r\n        </div>\r\n        <button type=\"button\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn btn-info btn-sm search\" data-toggle=\"modal\" data-target=\"#projectModal\">Search</button>\r\n        <div id=\"projectModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Project</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Select project</p>\r\n                <select class=\"form-control\" [(ngModel)]=\"project\" formControlName=\"project\">\r\n                  <option *ngFor=\"let project of (projects$ | async)\" [value]=\"project.projectId\">\r\n                    {{project.project}}\r\n                  </option>\r\n                </select>\r\n                <span *ngIf=\"myForm.controls.project.errors\">Please select project name.</span>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectProject(project)\" data-dismiss=\"modal\">Select</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Task:\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"task\" [(ngModel)]=\"taskName\"/>\r\n          <span [hidden]=\"myForm.controls.task.valid || (myForm.controls.task.pristine && !submitted)\">Please enter proper Task Name.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n          <input type=\"checkbox\" class=\"\" formControlName=\"isParentTask\" [(ngModel)]=\"isParentTask\"/>\r\n            Parent Task\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Priority:\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n          <span class=\"minPriority\">{{minPriority}}</span>\r\n          <span class=\"maxPriority\">{{maxPriority}}</span>\r\n          <input type=\"range\" [disabled]=\"isParentTask\" [(ngModel)]=\"priority\" [max]=\"maxPriority\" [min]=\"minPriority\" class=\"form-control\" formControlName=\"priority\"/>\r\n          <span [hidden]=\"myForm.controls.priority.valid || (myForm.controls.priority.pristine && !submitted)\">Please select proper Priority.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Parent Task\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <input type=\"text\" disabled class=\"form-control\" [value]=\"selectedTask\"/>\r\n        </div>\r\n        <button type=\"button\" [disabled]=\"isParentTask\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn btn-info btn-sm search\" data-toggle=\"modal\" data-target=\"#parentTaskModal\">Search</button>\r\n        <div id=\"parentTaskModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Parent task</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Select parent task</p>\r\n                <select class=\"form-control\" [(ngModel)]=\"parentTask\" formControlName=\"parentTask\">\r\n                  <option *ngFor=\"let task of (parentTasks$ | async)\" [value]=\"task.parentId\">\r\n                    {{task.parentTask}}\r\n                  </option>\r\n                </select>\r\n                <span *ngIf=\"myForm.controls.parentTask.errors\">Please select parent task.</span>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectParentTask(parentTask)\" data-dismiss=\"modal\">Select</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Start Date:\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <input type=\"date\" [disabled]=\"isParentTask\" class=\"form-control\" formControlName=\"sdate\" [(ngModel)]=\"startDate\"/>\r\n          <span [hidden]=\"myForm.controls.sdate.valid || (myForm.controls.sdate.pristine && !submitted)\">Please enter proper Start Date.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            End Date:\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <input type=\"date\" [disabled]=\"isParentTask\" class=\"form-control\" formControlName=\"edate\" [(ngModel)]=\"endDate\"/>\r\n          <span [hidden]=\"myForm.controls.edate.valid || (myForm.controls.edate.pristine && !submitted)\">Please enter proper End Date.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <p>\r\n            Users\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <input type=\"text\" disabled class=\"form-control\" [value]=\"selectedUser\"/>\r\n        </div>\r\n        <button [disabled]=\"isParentTask\" type=\"button\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 btn btn-info btn-sm search\" data-toggle=\"modal\" data-target=\"#userModal\">Search</button>\r\n        <div id=\"userModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Project</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Select project</p>\r\n                <select class=\"form-control\" [(ngModel)]=\"user\" formControlName=\"user\">\r\n                  <option *ngFor=\"let userDetails of (users$ | async)\" [value]=\"userDetails.userId\">\r\n                    {{userDetails.firstName}} {{userDetails.lastName}}\r\n                  </option>\r\n                </select>\r\n                <span *ngIf=\"myForm.controls.user.errors\">Please select an user.</span>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectUser(user)\" data-dismiss=\"modal\">Select</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class-=\"row form-group\" *ngIf=\"validationError\">\r\n        <span class=\"error\">{{validationError}}</span>\r\n      </div>\r\n      <div class=\"row form-group\" *ngIf=\"!editedTaskId\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <button type=\"submit\" class=\"btn btn-primary form-control\">Add Task</button>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <button type=\"reset\" class=\"btn btn-primary form-control\">Reset</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\" *ngIf=\"editedTaskId\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <button type=\"submit\" class=\"btn btn-primary form-control\">Update Task</button>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n          <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"cancelEdit()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(apiService, utilService, router, route) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.router = router;
        this.submitted = false;
        this.maxPriority = 30;
        this.minPriority = 0;
        this.priority = 0;
        this.selectedTask = '';
        this.selectedProject = '';
        this.selectedUser = '';
        this.isParentTask = false;
        this.validationError = '';
        this.editedTaskId = route.snapshot.params['id'];
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.setHeader('Add Task');
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            task: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
            priority: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            parentTask: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            project: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            user: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            sdate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            edate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            isParentTask: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.parentTasks$ = this.apiService.getParentTasks();
        this.projects$ = this.apiService.getProjects();
        this.users$ = this.apiService.getAllUsers();
        if (this.editedTaskId) {
            this.apiService.getAllTasks().subscribe(function (tasks) {
                var editedTask = tasks.find(function (task) { return task.taskId.toString() === _this.editedTaskId; });
                _this.taskName = editedTask.task;
                _this.priority = editedTask.priority;
                _this.parentTask = editedTask.parentId;
                _this.user = editedTask.userId;
                _this.project = editedTask.projectId;
                _this.startDate = _this.utilService.getDate(editedTask.startDate);
                _this.endDate = _this.utilService.getDate(editedTask.endDate);
                _this.selectProject(_this.project);
                _this.selectParentTask(_this.parentTask);
                _this.selectUser(_this.user);
            });
        }
    };
    CreateTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validationError = '';
        if (!this.myForm.valid && this.isParentTask) {
            this.validationError = 'Please fill the required fields.';
            return;
        }
        var today = new Date();
        var startDate = new Date(this.startDate);
        var endDate = new Date(this.endDate);
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
            this.apiService.updateTask(this.myForm, this.editedTaskId).subscribe(function () {
                _this.loadViewTask();
            });
        }
        else {
            this.apiService.createTask(this.myForm).subscribe(function () {
                _this.loadViewTask();
            });
        }
    };
    CreateTaskComponent.prototype.loadViewTask = function () {
        this.router.navigateByUrl('viewTask');
        var links = document.querySelectorAll('.nav-link');
        links.forEach(function (link) {
            link.classList.remove('active');
            if (link.innerHTML.trim() === 'View Task') {
                link.classList.add('active');
            }
        });
    };
    CreateTaskComponent.prototype.cancelEdit = function () {
        this.loadViewTask();
    };
    CreateTaskComponent.prototype.selectParentTask = function (id) {
        var _this = this;
        this.parentTasks$.subscribe(function (parentTasks) {
            _this.selectedTask = parentTasks.find(function (parentTask) { return parentTask.parentId.toString() === id.toString(); }).parentTask;
        });
    };
    CreateTaskComponent.prototype.selectProject = function (id) {
        var _this = this;
        this.projects$.subscribe(function (projects) {
            _this.selectedProject = projects.find(function (project) { return project.projectId.toString() === id.toString(); }).project;
        });
    };
    CreateTaskComponent.prototype.selectUser = function (id) {
        var _this = this;
        this.users$.subscribe(function (users) {
            var selectedUserDetails = users.find(function (user) { return user.userId.toString() === id.toString(); });
            _this.selectedUser = selectedUserDetails.firstName + ' ' + selectedUserDetails.lastName;
        });
    };
    CreateTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-task',
            template: __webpack_require__("./src/app/components/create-task/create-task.component.html"),
            styles: [__webpack_require__("./src/app/components/create-task/create-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/create-user/create-user.component.css":
/***/ (function(module, exports) {

module.exports = ".error {\r\n    color: red;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                <p>\r\n                    First Name:\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [(ngModel)]=\"firstName\"/>\r\n                <span *ngIf=\"userForm.controls.firstName.errors && (userForm.controls.firstName.dirty || userForm.controls.firstName.touched)\">Please enter proper first Name.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                <p>\r\n                    Last Name:\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [(ngModel)]=\"lastName\"/>\r\n                <span *ngIf=\"userForm.controls.lastName.errors && (userForm.controls.lastName.dirty || userForm.controls.lastName.touched)\">Please enter proper last Name.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                <p>\r\n                    Employee id:\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                <input type=\"text\" class=\"form-control\" type=\"number\" formControlName=\"employeeId\" [(ngModel)]=\"employeeId\"/>\r\n                <span *ngIf=\"userForm.controls.employeeId.errors && (userForm.controls.employeeId.dirty ||userForm.controls.employeeId.touched)\">Please enter proper last Name.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\" *ngIf=\"!editedUserId\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                <button type=\"submit\" class=\"btn btn-primary form-control\">Add</button>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                <button type=\"reset\" class=\"btn btn-primary form-control\">Reset</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\" *ngIf=\"editedUserId\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n              <button type=\"submit\" class=\"btn btn-primary form-control\">Update</button>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n              <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"cancelEdit()\">Cancel</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n</form>\r\n<div class=\"row\" *ngIf=\"validationError\"><span class=\"error\">{{validationError}}</span></div>\r\n<div class=\"row\">\r\n  <span class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 search-field\">\r\n    <input type=\"text\" class=\"form-control\" [value]=\"searchValue\" (input)=\"updateSearchQuery($event)\" placeholder=\"Search...\" >\r\n  </span>\r\n  <span class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5 align-right\">\r\n    <span>\r\n      <label>Sort By:</label>\r\n      <button class=\"btn btn-default\" (click)=\"sort('firstName')\">First Name</button>\r\n    </span>\r\n    <span>\r\n      <button class=\"btn btn-default\" (click)=\"sort('lastName')\">Last Name</button>\r\n    </span>\r\n    <span>\r\n      <button class=\"btn btn-default\" (click)=\"sort('employeeId', true)\">Id</button>\r\n    </span>\r\n  </span>\r\n</div>\r\n<app-view-users [users]=\"(users$ | async)\"\r\n                [editedUserId]=\"editedUserId\"\r\n                [searchValue]=\"searchValue\"\r\n                (onDeleteUser)=\"deleteUser($event)\"></app-view-users>\r\n"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(apiService, utilService, router, route) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.router = router;
        this.submitted = false;
        this.maxPriority = 30;
        this.minPriority = 0;
        this.firstName = '';
        this.lastName = '';
        this.employeeId = '';
        this.searchValue = '';
        this.validationError = '';
        this.editedUserId = route.snapshot.params['id'];
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.setHeader('Add User');
        this.userForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
            employeeId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
        this.users$ = this.apiService.getAllUsers();
        if (this.editedUserId) {
            this.users$.subscribe(function (users) {
                var editedUser = users.find(function (user) { return user.userId.toString() === _this.editedUserId; });
                _this.firstName = editedUser.firstName;
                _this.lastName = editedUser.lastName;
                _this.employeeId = editedUser.employeeId;
            });
        }
    };
    CreateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validationError = '';
        if (this.userForm.invalid) {
            this.validationError = 'Please enter the required fields';
            return;
        }
        this.submitted = true;
        if (this.editedUserId) {
            this.apiService.updateUser(this.userForm, this.editedUserId).subscribe(function () {
                _this.users$ = _this.apiService.getAllUsers();
                _this.clearData();
            });
        }
        else {
            this.apiService.createUser(this.userForm).subscribe(function () {
                _this.users$ = _this.apiService.getAllUsers();
                _this.clearData();
            });
        }
    };
    CreateUserComponent.prototype.cancelEdit = function () {
        this.router.navigateByUrl('createUser');
    };
    CreateUserComponent.prototype.updateSearchQuery = function (event) {
        this.searchValue = event.target.value;
    };
    CreateUserComponent.prototype.sort = function (item, number) {
        this.users$ = this.users$
            .map(function (data) {
            data.sort(function (a, b) {
                var x = number ? parseInt(a[item], 10) : a[item].toLowerCase();
                var y = number ? parseInt(b[item], 10) : b[item].toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
            return data;
        });
    };
    CreateUserComponent.prototype.clearData = function () {
        this.editedUserId = null;
        this.router.navigateByUrl('createUser');
    };
    CreateUserComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.apiService.deleteUser(userId).subscribe(function () {
            _this.users$ = _this.apiService.getAllUsers();
        });
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-user',
            template: __webpack_require__("./src/app/components/create-user/create-user.component.html"),
            styles: [__webpack_require__("./src/app/components/create-user/create-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-project/view-project.component.css":
/***/ (function(module, exports) {

module.exports = ".project-wrapper {\r\n    height: 500px;\r\n    overflow: auto;\r\n}\r\n\r\n.project-container {\r\n    background: #eee;\r\n    margin:20px 0;\r\n}\r\n\r\nbutton {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/view-project/view-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 project-wrapper\">\r\n    <div *ngFor=\"let project of projects | searchTable: searchValue\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 project-container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                  Project: {{project.project}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                    No. of tasks: {{ getTaskNumber(project.projectId) }}\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                    Completed: {{ getCompleted(project.startDate,project.endDate) }}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                    Start Date: {{ getDate(project.startDate) }}\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                    End Date: {{ getDate(project.endDate) }}\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n            Priority: {{project.priority}}\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n              <span> <button class=\"btn btn-secondary separator\" [disabled]=\"editedProjectId\" [routerLink]=\"['/editProject', project.projectId]\">Update</button></span>\r\n              <span><button type=\"button\" [disabled]=\"editedProjectId\" class=\"btn btn-secondary\" (click)=\"suspendProject(project.projectId)\" >Suspend</button></span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/components/view-project/view-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProjectComponent = /** @class */ (function () {
    function ViewProjectComponent(utilService, apiService) {
        this.utilService = utilService;
        this.apiService = apiService;
        this.searchValue = '';
        this.onSuspendProject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.setHeader('Add Project');
        this.apiService.tasksPerProject().subscribe(function (tasks) {
            _this.tasksPerProject = tasks;
        });
    };
    ViewProjectComponent.prototype.suspendProject = function (id) {
        this.onSuspendProject.emit(id);
    };
    ViewProjectComponent.prototype.getDate = function (isoDate) {
        return this.utilService.getDate(isoDate);
    };
    ViewProjectComponent.prototype.getCompleted = function (startDate, endDate) {
        var startDateObj = new Date(startDate);
        var endDateObj = new Date(endDate);
        var timeDiff = Math.abs(endDateObj.getTime() - startDateObj.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };
    ViewProjectComponent.prototype.getTaskNumber = function (projectId) {
        return this.tasksPerProject && this.tasksPerProject[projectId] || 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ViewProjectComponent.prototype, "searchValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ViewProjectComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ViewProjectComponent.prototype, "editedProjectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewProjectComponent.prototype, "onSuspendProject", void 0);
    ViewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-project',
            template: __webpack_require__("./src/app/components/view-project/view-project.component.html"),
            styles: [__webpack_require__("./src/app/components/view-project/view-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/view-task/view-task.component.css":
/***/ (function(module, exports) {

module.exports = ".heading {\r\n    font-weight: bold;\r\n}\r\n\r\n.search {\r\n    height: 37px;\r\n}\r\n\r\n.search-text {\r\n    height: 35px;\r\n    width: 150px;\r\n    margin: 0 10px;\r\n    padding: 0 10px;\r\n}\r\n\r\n.task-details {\r\n    background: #eee;\r\n}"

/***/ }),

/***/ "./src/app/components/view-task/view-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <label>Project:</label>\r\n  <input type=\"text\" class=\"search-text\" placeholder=\"Select...\" [value]=\"selectedProject\" disabled />\r\n  <button type=\"button\" class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-info btn-sm search\" data-toggle=\"modal\" data-target=\"#projectModal\">Search</button>\r\n  <div id=\"projectModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Choose a project</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <select class=\"form-control\" [value]=\"project\" (change)=\"changeProject($event)\">\r\n            <option *ngFor=\"let project of (projects$ | async)\" [value]=\"project.projectId\">\r\n              {{project.project}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectProjectname(project)\" data-dismiss=\"modal\">Select</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <span class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7 align-right\">\r\n      <span>\r\n        <label>Sort Task By:</label>\r\n        <button class=\"btn btn-default\" (click)=\"sort('startDate', 'date')\">Start Date</button>\r\n      </span>\r\n      <span>\r\n        <button class=\"btn btn-default\" (click)=\"sort('endDate', 'date')\">End Date</button>\r\n      </span>\r\n      <span>\r\n        <button class=\"btn btn-default\" (click)=\"sort('priority', 'number')\">Priority</button>\r\n      </span>\r\n      <span>\r\n        <button class=\"btn btn-default\" (click)=\"sortCompleted()\">Completed</button>\r\n      </span>\r\n    </span>\r\n  </div>\r\n<hr>\r\n<div *ngIf=\"(tasks$ | async)?.length\">\r\n  <div *ngFor=\"let task of (tasks$ | async)\">\r\n    <div class=\"row heading\">\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">Task</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">Parent</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">Priority</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">Start</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">End</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"></span>\r\n    </div>\r\n    <div class=\"row task-details\">\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">{{ task.task }}</span>\r\n      <span *ngIf=\"task.parentTask\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">{{ task.parentTask }}</span>\r\n      <span *ngIf=\"!task.parentTask\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">NA</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">{{ task.priority }}</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">{{ getDate(task.startDate) }}</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">{{ getDate(task.endDate) }}</span>\r\n      <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n        <span> <button class=\"btn btn-default\" [routerLink]=\"['/editTask', task.taskId]\">Edit</button></span>\r\n        <span><button type=\"button\" class=\"btn btn-default\" (click)=\"endTask(task.taskId)\">End Task</button></span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!(tasks$ | async)?.length\">No tasks available</div>"

/***/ }),

/***/ "./src/app/components/view-task/view-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(apiService, utilService) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.searchText = '';
        this.taskName = '';
        this.parentTaskName = '';
        this.priorityFrom = '';
        this.priorityTo = '';
        this.startDate = '';
        this.endDate = '';
        this.searchValue = '';
        this.project = '1';
        this.selectedProject = '';
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.tasks$ = this.apiService.getAllTasks();
        this.projects$ = this.apiService.getProjects();
        this.utilService.setHeader('View Task');
    };
    ViewTaskComponent.prototype.getDate = function (isoDate) {
        return this.utilService.getDate(isoDate);
    };
    ViewTaskComponent.prototype.endTask = function (taskId) {
        var _this = this;
        this.apiService.deleteTask(taskId).subscribe(function () {
            _this.tasks$ = _this.apiService.getAllTasks();
        });
    };
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
    ViewTaskComponent.prototype.updateTaskNameModel = function (event) {
        this.taskName = event.target.value;
    };
    ViewTaskComponent.prototype.updateParentTaskModel = function (event) {
        this.parentTaskName = event.target.value;
    };
    ViewTaskComponent.prototype.updatePriorityFromModel = function (event) {
        this.priorityFrom = event.target.value;
    };
    ViewTaskComponent.prototype.updatePriorityToModel = function (event) {
        this.priorityTo = event.target.value;
    };
    ViewTaskComponent.prototype.updateStartDateModel = function (event) {
        this.startDate = this.getDate(event.target.value);
    };
    ViewTaskComponent.prototype.updateEndDateModel = function (event) {
        this.endDate = this.getDate(event.target.value);
    };
    ViewTaskComponent.prototype.updateSearchQuery = function (event) {
        this.searchValue = event.target.value;
    };
    ViewTaskComponent.prototype.sort = function (item, type) {
        this.tasks$ = this.utilService.sort(this.tasks$, item, type);
    };
    ViewTaskComponent.prototype.sortCompleted = function () {
        this.tasks$ = this.utilService.sortCompleted(this.tasks$);
    };
    ViewTaskComponent.prototype.changeProject = function (event) {
        this.project = event.target.value;
    };
    ViewTaskComponent.prototype.selectProjectname = function (id) {
        var _this = this;
        this.projects$.subscribe(function (projects) {
            _this.selectedProject = projects.find(function (project) { return project.projectId.toString() === id; }).project;
            _this.tasks$ = _this.apiService.getTaskByProjectId(id);
        });
    };
    ViewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-task',
            template: __webpack_require__("./src/app/components/view-task/view-task.component.html"),
            styles: [__webpack_require__("./src/app/components/view-task/view-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_util_service__["a" /* UtilService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_util_service__["a" /* UtilService */]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/view-users/view-users.component.css":
/***/ (function(module, exports) {

module.exports = ".separator {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.user-container {\r\n\tborder: 1px solid #ccc;\r\n\tpadding: 20px;\r\n}\r\n\r\n.user-container .fields {\r\n\tbackground: #eee;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.user-wrapper {\r\n\toverflow: auto;\r\n\tmax-height: 400px;\r\n}"

/***/ }),

/***/ "./src/app/components/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 user-wrapper\">\r\n    <div *ngFor=\"let user of users | searchTable: searchValue\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 user-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 fields\">{{ user.firstName }}</div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <span> <button class=\"btn btn-secondary separator\" [disabled]=\"editedUserId\" [routerLink]=\"['/editUser', user.userId]\">Edit</button></span>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 fields\">{{ user.lastName }}</div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <span><button type=\"button\" [disabled]=\"editedUserId\" class=\"btn btn-secondary\" (click)=\"deleteUser(user.userId)\" >Delete</button></span>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 fields\">{{ user.employeeId }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/view-users/view-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewUsersComponent = /** @class */ (function () {
    function ViewUsersComponent(utilService) {
        this.utilService = utilService;
        this.searchValue = '';
        this.onDeleteUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        this.utilService.setHeader('Add User');
    };
    ViewUsersComponent.prototype.deleteUser = function (userId) {
        this.onDeleteUser.emit(userId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ViewUsersComponent.prototype, "searchValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ViewUsersComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ViewUsersComponent.prototype, "editedUserId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewUsersComponent.prototype, "onDeleteUser", void 0);
    ViewUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-users',
            template: __webpack_require__("./src/app/components/view-users/view-users.component.html"),
            styles: [__webpack_require__("./src/app/components/view-users/view-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_util_service__["a" /* UtilService */]])
    ], ViewUsersComponent);
    return ViewUsersComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search-content.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("./src/app/shared/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchContentPipe = /** @class */ (function () {
    function SearchContentPipe(utilService) {
        this.utilService = utilService;
        this.searchValue = '';
    }
    SearchContentPipe.prototype.transform = function (tasks, args) {
        if (!tasks)
            return [];
        var searchValue = args.trim().toLowerCase();
        return tasks.filter(function (task) {
            return task.task.toLowerCase().includes(searchValue)
                || (task.parentTask && task.parentTask.toLowerCase().includes(searchValue))
                || task.sdate.toLowerCase().includes(searchValue)
                || task.edate.toLowerCase().includes(searchValue)
                || task.priority.toLowerCase().includes(searchValue);
        });
    };
    SearchContentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'searchContent'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]])
    ], SearchContentPipe);
    return SearchContentPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search-table.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTablePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchTablePipe = /** @class */ (function () {
    function SearchTablePipe() {
    }
    SearchTablePipe.prototype.transform = function (data, args) {
        if (!data)
            return [];
        var searchValue = args.trim().toLowerCase();
        return data.filter(function (elem) {
            if (elem.firstName) {
                return elem.firstName.toLowerCase().includes(searchValue)
                    || elem.lastName.toLowerCase().includes(searchValue)
                    || elem.employeeId.toLowerCase().includes(searchValue);
            }
            else {
                return elem.project.toLowerCase().includes(searchValue);
            }
        });
    };
    SearchTablePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'searchTable'
        })
    ], SearchTablePipe);
    return SearchTablePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        var appProto = window.location.href.split('/')[0];
        var appDNS = window.location.href.split('/')[2];
        var appPORT = ':8080';
        var locationUrl = appProto + '//' + appDNS.split(':')[0] + appPORT;
        this.baseUrl = locationUrl + '/projectmanagerbackend/';
    }
    /******* Service Call To CREATE New Task Details *******/
    ApiService.prototype.createTask = function (form) {
        var formVal = form.value;
        var payload = {};
        if (formVal.isParentTask) {
            payload = {
                parentTask: formVal.task,
            };
            return this.http.post(this.baseUrl + 'parent/', payload);
        }
        else {
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
    };
    /******* Service Call To Update Existing Task Details *******/
    ApiService.prototype.updateTask = function (form, taskId) {
        var formVal = form.value;
        var payload;
        if (formVal.isParentTask) {
            payload = {
                taskId: taskId,
                task: formVal.task
            };
            return this.http.put(this.baseUrl + 'task/convert/' + taskId, payload);
        }
        else {
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
            return this.http.put(this.baseUrl + 'task/' + taskId, payload);
        }
    };
    ApiService.prototype.getParentTasks = function () {
        return this.http.get(this.baseUrl + 'parent/list').map(function (res) { return res.json(); });
    };
    ApiService.prototype.getProjects = function () {
        return this.http.get(this.baseUrl + 'project/list').map(function (res) { return res.json(); });
    };
    ApiService.prototype.getAllTasks = function () {
        this.allTasks$ = this.http.get(this.baseUrl + 'task/list').map(function (res) { return res.json(); });
        return this.allTasks$;
    };
    ApiService.prototype.deleteTask = function (taskId) {
        return this.http.delete(this.baseUrl + 'task/' + taskId);
    };
    ApiService.prototype.getEditTask = function () {
        return {
            taskId: 1,
            task: "task1",
            parentId: 105,
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
            priority: 30
        };
    };
    ApiService.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl + 'user/list').map(function (res) { return res.json(); });
    };
    ApiService.prototype.createUser = function (form) {
        var formVal = form.value;
        var payload = {
            firstName: formVal.firstName,
            lastName: formVal.lastName,
            employeeId: formVal.employeeId
        };
        return this.http.post(this.baseUrl + 'user/', payload);
    };
    ApiService.prototype.updateUser = function (form, userId) {
        var formVal = form.value;
        var payload = {
            firstName: formVal.firstName,
            lastName: formVal.lastName,
            employeeId: formVal.employeeId,
            userId: userId
        };
        return this.http.put(this.baseUrl + 'user/' + userId, payload);
    };
    ApiService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + 'user/' + userId);
    };
    ApiService.prototype.getTaskByProjectId = function (projectId) {
        return this.http.get(this.baseUrl + 'task/list/' + projectId).map(function (res) { return res.json(); });
    };
    ApiService.prototype.createProject = function (form) {
        var formVal = form.value;
        var payload = {
            startDate: formVal.startDate ? formVal.startDate : null,
            endDate: formVal.endDate ? formVal.endDate : null,
            project: formVal.projectName,
            priority: formVal.priority,
            userId: formVal.user
        };
        return this.http.post(this.baseUrl + 'project/', payload);
    };
    ApiService.prototype.updateProject = function (form, projectId) {
        var formVal = form.value;
        var payload = {
            startDate: formVal.startDate ? formVal.startDate : null,
            endDate: formVal.endDate ? formVal.endDate : null,
            project: formVal.projectName,
            priority: formVal.priority,
            userId: formVal.user,
            projectId: projectId
        };
        return this.http.put(this.baseUrl + 'project/' + projectId, payload);
    };
    ApiService.prototype.deleteProject = function (projectId) {
        return this.http.delete(this.baseUrl + 'project/' + projectId);
    };
    ApiService.prototype.tasksPerProject = function () {
        return this.http.get(this.baseUrl + 'task/countperproject/').map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    // format Date to "yyyy-MM-dd"
    UtilService.prototype.getDate = function (isoDate) {
        var date = new Date(isoDate);
        var month = date.getMonth() + 1;
        var taskDate = date.getDate();
        //yyyy-MM-dd
        var newDate = '';
        if (taskDate < 10) {
            newDate = '0' + taskDate;
        }
        else {
            newDate = taskDate + '';
        }
        var newMonth = '';
        if (month < 10) {
            newMonth = '0' + month;
        }
        else {
            newMonth = month + '';
        }
        return date.getFullYear() + '-' + newMonth + '-' + newDate;
    };
    UtilService.prototype.sortCompleted = function (data$) {
        return data$
            .map(function (data) {
            data.sort(function (a, b) {
                var aStartDateObj = new Date(a.startDate);
                var aEndDateObj = new Date(a.endDate);
                var bStartDateObj = new Date(b.startDate);
                var bEndDateObj = new Date(b.endDate);
                var aTimeDiff = Math.abs(aEndDateObj.getTime() - aStartDateObj.getTime());
                var x = Math.ceil(aTimeDiff / (1000 * 3600 * 24));
                var bTimeDiff = Math.abs(bEndDateObj.getTime() - bStartDateObj.getTime());
                var y = Math.ceil(bTimeDiff / (1000 * 3600 * 24));
                return x < y ? -1 : x > y ? 1 : 0;
            });
            return data;
        });
    };
    UtilService.prototype.sort = function (data$, item, type) {
        return data$
            .map(function (data) {
            if (type === 'date') {
                data.sort(function (a, b) {
                    var x = new Date(a[item]);
                    var y = new Date(b[item]);
                    return x < y ? -1 : x > y ? 1 : 0;
                });
            }
            else {
                var isNumber_1 = type === 'number';
                data.sort(function (a, b) {
                    var x = isNumber_1 ? parseInt(a[item], 10) : a[item].toLowerCase();
                    var y = isNumber_1 ? parseInt(b[item], 10) : b[item].toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
            }
            return data;
        });
    };
    UtilService.prototype.getCalculatdDate = function (date) {
        var tDate = date.getDate();
        var tMonth = date.getMonth() + 1;
        var tYear = date.getFullYear();
        return new Date(tYear, tMonth, tDate);
    };
    UtilService.prototype.setHeader = function (subHeading) {
        var links = document.querySelectorAll('.nav-link');
        links.forEach(function (link) {
            link.classList.remove('active');
            if (link.innerHTML.trim() === subHeading) {
                link.classList.add('active');
            }
        });
        document.getElementById('subHeading').innerText = subHeading;
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map