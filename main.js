(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/employees/list-employees.component */ "./src/app/employees/list-employees.component.ts");
/* harmony import */ var src_app_employees_create_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/employees/create-employee.component */ "./src/app/employees/create-employee.component.ts");
/* harmony import */ var src_app_employees_employee_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/employees/employee.guard.service */ "./src/app/employees/employee.guard.service.ts");
/* harmony import */ var src_app_employees_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/employees/employee-details.component */ "./src/app/employees/employee-details.component.ts");
/* harmony import */ var src_app_employees_emloyee_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/employees/emloyee-list-resolver.service */ "./src/app/employees/emloyee-list-resolver.service.ts");
/* harmony import */ var src_app_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var src_app_employees_employee_details_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/employees/employee-details-guard.service */ "./src/app/employees/employee-details-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'list',
        component: src_app_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_2__["ListEmployeesComponent"],
        resolve: { employeeList: src_app_employees_emloyee_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__["EmloyeeListResolverService"] }
    },
    {
        path: 'edit/:id',
        component: src_app_employees_create_employee_component__WEBPACK_IMPORTED_MODULE_3__["CreateEmployeeComponent"],
        canDeactivate: [src_app_employees_employee_guard_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeGuardService"]]
    },
    {
        path: 'employees/:id',
        component: src_app_employees_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"],
        canActivate: [src_app_employees_employee_details_guard_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailsGuardService"]]
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'notfound',
        component: src_app_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  color: blue;\r\n  font-size: 90px;\r\n  text-indent: -9999em;\r\n  overflow: hidden;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  margin: 72px auto;\r\n  position: fixed;\r\n  top: 50%;\r\n  right: 50%;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n}\r\n@-webkit-keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%,\r\n  95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%,\r\n  59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n@keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%,\r\n  95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%,\r\n  59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n@-webkit-keyframes round {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes round {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlDQUFpQztFQUVqQyx5QkFBeUI7RUFDekIsc0VBQXNFO0VBQ3RFLDhEQUE4RDtDQUMvRDtBQUNEO0VBQ0U7SUFDRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSkFBb0o7R0FDcko7RUFDRDtJQUNFLG1KQUFtSjtHQUNwSjtFQUNEO0lBQ0UsaUpBQWlKO0dBQ2xKO0VBQ0Q7SUFDRSxvSEFBb0g7R0FDckg7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSkFBb0o7R0FDcko7RUFDRDtJQUNFLG1KQUFtSjtHQUNwSjtFQUNEO0lBQ0UsaUpBQWlKO0dBQ2xKO0VBQ0Q7SUFDRSxvSEFBb0g7R0FDckg7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0dBQzNCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtHQUMzQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDcycHggYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDUlLFxyXG4gIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDUlLFxyXG4gIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm91bmQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <nav class='navbar navbar-inverse'>\n    <ul class='nav navbar-nav'>\n      <li>\n        <a routerLink='list'>List</a>\n      </li>\n      <li>\n        <a routerLink='edit/0'>Create</a>\n      </li>\n      <!-- <li>\n        <a [routerLink]=\"['/employees', 2]\">Go to details page for second employee</a>\n      </li> -->\n    </ul>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n<div *ngIf='showLoadingIndicator' class=\"loader\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this.showLoadingIndicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.showLoadingIndicator = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees/list-employees.component */ "./src/app/employees/list-employees.component.ts");
/* harmony import */ var _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/create-employee.component */ "./src/app/employees/create-employee.component.ts");
/* harmony import */ var _shared_select_required_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/select-required-validator.directive */ "./src/app/shared/select-required-validator.directive.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _employees_display_employees_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employees/display-employees.component */ "./src/app/employees/display-employees.component.ts");
/* harmony import */ var src_app_employees_employee_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/employees/employee.guard.service */ "./src/app/employees/employee.guard.service.ts");
/* harmony import */ var _employees_employee_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employees/employee-details.component */ "./src/app/employees/employee-details.component.ts");
/* harmony import */ var src_app_employees_employee_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/employees/employee.filter.pipe */ "./src/app/employees/employee.filter.pipe.ts");
/* harmony import */ var src_app_employees_employee_gender_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/employees/employee-gender-filter.pipe */ "./src/app/employees/employee-gender-filter.pipe.ts");
/* harmony import */ var src_app_employees_employee_department_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/employees/employee-department-filter.pipe */ "./src/app/employees/employee-department-filter.pipe.ts");
/* harmony import */ var src_app_employees_emloyee_list_resolver_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/employees/emloyee-list-resolver.service */ "./src/app/employees/emloyee-list-resolver.service.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var src_app_employees_employee_details_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/employees/employee-details-guard.service */ "./src/app/employees/employee-details-guard.service.ts");
/* harmony import */ var _shared_accordation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/accordation.component */ "./src/app/shared/accordation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_8__["ListEmployeesComponent"],
                _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_9__["CreateEmployeeComponent"],
                _shared_select_required_validator_directive__WEBPACK_IMPORTED_MODULE_10__["SelectRequiredValidatorDirective"],
                _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ConfirmEqualValidatorDirective"],
                _employees_display_employees_component__WEBPACK_IMPORTED_MODULE_13__["DisplayEmployeesComponent"],
                _employees_employee_details_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeDetailsComponent"],
                src_app_employees_employee_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["EmployeeFilterPipe"],
                src_app_employees_employee_gender_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["EmployeeGenderFilter"],
                src_app_employees_employee_department_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["EmployeeDepartmentFilter"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
                _shared_accordation_component__WEBPACK_IMPORTED_MODULE_22__["AccordationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot()
            ],
            providers: [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"], src_app_employees_employee_guard_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeGuardService"], src_app_employees_emloyee_list_resolver_service__WEBPACK_IMPORTED_MODULE_19__["EmloyeeListResolverService"], src_app_employees_employee_details_guard_service__WEBPACK_IMPORTED_MODULE_21__["EmployeeDetailsGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/create-employee.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/create-employee.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".op:nth-of-type(1) {\r\n  color: white;\r\n  background: blueviolet;\r\n}\r\n.flex-container{\r\n  display: grid;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsY0FBYzs7Q0FFZiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsdWV2aW9sZXQ7XHJcbn1cclxuLmZsZXgtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/employees/create-employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employees/create-employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"saveEmployee(employeeForm)\">\n  <div class=\"panel panel-primary\" *ngIf='employee'>\n    <div class=\"panel-heading\">\n      <h3>{{panelTitle}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [class.has-error]='name.invalid && name.touched' [class.has-success]='name.valid'>\n        <label for=\"fullname\" class='control-label'>Full Name</label>\n        <input required type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"employee.name\" #name='ngModel' />\n        <span class='help-block' *ngIf='name.invalid && name.touched'>Full name required</span>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]='email.invalid'>\n        <label for=\"email\" class='control-label'>Email</label>\n        <input [required]=\"contactPreference.value==='Email'\" type=\"text\" pattern=\"^[a-zA-Z0-9_+-\\.]+@(impelsys)\\.(com)$\" id=\"email\"\n          name=\"email\" [(ngModel)]=\"employee.email\" class=\"form-control\" #email='ngModel' />\n        <span class='help-block' *ngIf='email.errors?.required'>Email is required</span>\n        <span class='help-block' *ngIf='email.errors?.pattern'>Email is invalid</span>\n\n      </div>\n\n      <div class=\"form-group\" [class.has-error]='phoneNumber.invalid'>\n        <label for=\"phoneNumber\" class='control-label'>Phone Number</label>\n        <input type=\"text\" [required]=\"contactPreference.value==='Phone'\" pattern='^[2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'\n          id=\"phoneNumber\" #phoneNumber='ngModel' name=\"phoneNumber\" [(ngModel)]=\"employee.phoneNumber\" class=\"form-control\"\n        />\n        <span class='help-block' *ngIf='phoneNumber.errors?.required'>phone number is required</span>\n        <span class='help-block' *ngIf='phoneNumber.errors?.pattern'>phone number is invalid</span>\n      </div>\n      <div class=\"form-group\" [class.has-error]='contactPreference.invalid && contactPreference.touched' [class.has-success]='contactPreference.valid'>\n        <label class='control-label'>Contract Preference</label>\n        <div class=\"form-control\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"contactPreference\" required #contactPreference='ngModel' value=\"Email\" [(ngModel)]=\"employee.contactPreference\"\n            />Email</label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"contactPreference\" required #contactPreference='ngModel' value=\"Phone\" [(ngModel)]=\"employee.contactPreference\"\n            />Phone</label>\n\n        </div>\n        <span class='help-block' *ngIf='contactPreference.errors?.required && contactPreference.touched'>contactPreference is required</span>\n\n      </div>\n\n      <div class=\"form-group\" [class.has-error]='gender.invalid && gender.touched' [class.has-success]='gender.valid'>\n        <label class='control-label'>Gender</label>\n        <div class=\"form-control\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"gender\" required #gender='ngModel' value=\"Male\" [(ngModel)]=\"employee.gender\" />Male</label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"gender\" required #gender='ngModel' value=\"Female\" [(ngModel)]=\"employee.gender\" />Female</label>\n        </div>\n        <span class='help-block' *ngIf='gender.errors?.required && gender.touched'>Gender is required</span>\n      </div>\n      <div class=\"form-group\" [class.has-error]='isActive.invalid && isActive.touched'>\n        <div class=\"form-control\">\n          <label class=\"checkbox-inline\" class='control-label'>\n            <input type=\"checkbox\" [required]='employee.isActive===null' name=\"isActive\" #isActive='ngModel' [(ngModel)]=\"employee.isActive\"\n            />Is Active\n          </label>\n        </div>\n        <span class='help-block' *ngIf='isActive.errors?.required && isActive.touched'>Active is required</span>\n      </div>\n      <div class=\"form-group\" [class.has-error]='department.invalid && department.touched'>\n        <label for=\"department\" class='control-label'>\n          Department\n        </label>\n        <select name=\"department\" appSelectValidator='select' #department='ngModel' id=\"department\" [(ngModel)]=\"employee.department\"\n          class=\"form-control\">\n          <option value='select'>Select department</option>\n          <option class=\"op\" *ngFor=\"let depart of departments\" [value]=\"depart.id\">{{ depart.name }}</option>\n        </select>\n        <span class='help-block' *ngIf='department.touched && department.errors?.defaultSelected'>Department is required</span>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-5\">\n          <label for=\"fullname\">Date of birth</label>\n          <input type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\" id=\"date\" name=\"dateOfBirth\" class=\"form-control\" [(ngModel)]=\"employee.dateOfBirth\"\n            placement=\"right\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"photoPath\">Photo path</label>\n        <input type=\"text\" id=\"photoPath\" name=\"photoPath\" [(ngModel)]=\"employee.photoPath\" class=\"form-control\" />\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"previewPhotoshow()\" *ngIf=\"employee.photoPath !== '' && employee.photoPath !== null \">\n          {{ previewPhoto ? \"Hide\" : \"Show\" }} Preview\n        </button>\n      </div>\n\n      <div class=\"form-group\">\n        <img [src]=\"employee.photoPath\" *ngIf=\"previewPhoto && employee.photoPath !== '' && employee.photoPath !== null\" width=\"200\"\n          height=\"200\" />\n      </div>\n      <!-- <div ngModelGroup='passwordGroup' appConfirmEqualValidator #passwordGroup='ngModelGroup' [class.has-error]='passwordGroup.errors?.notEqual && !cpw.errors?.required'>\n        <div class=\"form-group\" [class.has-error]='pw.invalid && pw.touched'>\n          <label class='control-label' for=\"password\">Password</label>\n          <input type=\"text\" id='password' (input)='cpw.control.updateValueAndValidity()' required #pw='ngModel' class=\"form-control\"\n            name='password' [(ngModel)]='password'>\n          <span class=\"help-block\" *ngIf='pw.touched && pw.errors?.required'>Password required</span>\n        </div>\n        <div class=\"form-group\" [class.has-error]='cpw.invalid && cpw.touched'>\n          <label class='control-label' for=\"cpassword\">Confirm Password</label>\n          <input type=\"text\" id='cpassword' required #cpw='ngModel' class=\"form-control\" name='cpassword' [(ngModel)]='cpassword'>\n          <span class=\"help-block\" *ngIf='cpw.touched && cpw.errors?.required'>Confirm Password required</span>\n          <span class=\"help-block\" *ngIf='cpw.touched && passwordGroup.errors?.notEqual && !cpw.errors?.required'>password and Confirm Password doesn't match</span>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"panel-footer\">\n      <button type=\"submit\" [disabled]='employeeForm.invalid' class=\"btn btn-primary\">\n        Save\n      </button>\n    </div>\n  </div>\n</form>\n\n\n{{ employeeForm.value | json }}\n<br>\n<br> our employee: {{employee | json}}\n"

/***/ }),

/***/ "./src/app/employees/create-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/create-employee.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(_employeeServie, _router, _route) {
        this._employeeServie = _employeeServie;
        this._router = _router;
        this._route = _route;
        // gender = 'male';
        // isActive = true;
        // department = 'IT';
        this.previewPhoto = false;
        this.departments = [
            {
                id: 1,
                name: 'Help Desk'
            },
            {
                id: 2,
                name: 'IT'
            },
            {
                id: 3,
                name: 'HR'
            }
        ];
        this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            dateInputFormat: 'DD/MM/YYYY'
        });
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (paraMap) {
            var id = +paraMap.get('id');
            _this.getEmployee(id);
        });
    };
    CreateEmployeeComponent.prototype.getEmployee = function (id) {
        var _this = this;
        if (id === 0) {
            this.employee = {
                id: null,
                name: null,
                gender: null,
                email: null,
                phoneNumber: null,
                contactPreference: null,
                dateOfBirth: null,
                department: 'select',
                isActive: null,
                photoPath: null
            };
            this.panelTitle = 'Create New Employee';
            this.createEmployeeForm.reset();
        }
        else {
            this.panelTitle = 'Edit Employee';
            this._employeeServie.getEmployee(id).subscribe(function (employee) { return _this.employee = employee; }, function (err) { return console.log(err); });
        }
    };
    CreateEmployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        if (this.employee.id === null) {
            this._employeeServie.addEmplyee(this.employee).subscribe(function (data) {
                console.log(data);
                _this.createEmployeeForm.reset();
                _this._router.navigate(['list']);
            }, function (error) { return console.log(error); });
            // empForm.reset();
        }
        else {
            this._employeeServie.updateEmployee(this.employee).subscribe(function () {
                _this.createEmployeeForm.reset();
                _this._router.navigate(['list']);
            }, function (error) { return console.log(error); });
        }
    };
    // const newEmployee: Employee = Object.assign({}, this.employee);
    CreateEmployeeComponent.prototype.previewPhotoshow = function () {
        this.previewPhoto = !this.previewPhoto;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('employeeForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CreateEmployeeComponent.prototype, "createEmployeeForm", void 0);
    CreateEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/employees/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/employees/create-employee.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/display-employees.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/display-employees.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.vertical-align {\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n}\r\nbutton.btn{\r\n  width: 70px;\r\n  margin: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2Rpc3BsYXktZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9COztDQUVyQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9kaXNwbGF5LWVtcGxveWVlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQ2xhc3Mge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi52ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5idXR0b24uYnRue1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/employees/display-employees.component.html":
/*!************************************************************!*\
  !*** ./src/app/employees/display-employees.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-accordation [expanded]='_id === employee.id' [title]='employee.name' [isHidden]='true'>\n  <div class=\"myPanelBody\">\n    <div class=\"col-xs-10\">\n      <div class=\"row vertical-align\">\n        <div class=\"col-xs-5\">\n          <img class=\"imageClass\" [src]=\"employee.photoPath\" />\n        </div>\n        <div class=\"col-xs-8\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Gender\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.gender }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Date of Birth\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.dateOfBirth | date }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Contact Preference\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.contactPreference }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              phoneNumber\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.phoneNumber }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Email\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.email }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Department\n            </div>\n            <div class=\"col-xs-6\" [ngSwitch]='employee.department'>:\n              <span *ngSwitchCase='1'>Help Desk</span>\n              <span *ngSwitchCase='2'>IT</span>\n              <span *ngSwitchCase='3'>HR</span>\n              <span *ngSwitchCase='4'>Payroll</span>\n              <span *ngSwitchDefault>N/A</span>\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Is Active\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.isActive }}</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"myPanelFooter\">\n    <div class=\"form-group\">\n\n      <button class=\"btn btn-primary\" (click)='viewEmployee()'>View</button>\n      <button class=\"btn btn-primary\" (click)='editEmployee()'>Edit</button>\n      <span *ngIf='confirmDelete'>\n        <span>\n          Are you sure want to delete ?\n          <button class=\"btn btn-danger\" (click)='deleteEmployee()'>Yes</button>\n        </span>\n        <span>\n          <button class=\"btn btn-primary\" (click)='confirmDelete = false'>No</button>\n        </span>\n      </span>\n      <button *ngIf='!confirmDelete' class=\"btn btn-danger\" (click)='confirmDelete=true'>Delete</button>\n\n    </div>\n  </div>\n</app-accordation>\n"

/***/ }),

/***/ "./src/app/employees/display-employees.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/display-employees.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplayEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEmployeesComponent", function() { return DisplayEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/employee.model */ "./src/app/models/employee.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisplayEmployeesComponent = /** @class */ (function () {
    // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
    // private _employee: Employee;
    // @Input()
    // set employee(val) {
    //   console.log('Current name: ' + val.name);
    //   console.log('Previous name ' + (this._employee ? this._employee.name : 'Null'));
    //   this._employee = val;
    // }
    // get employee() {
    //   return this._employee;
    // }
    function DisplayEmployeesComponent(_activateRoute, _router, _employeeService) {
        this._activateRoute = _activateRoute;
        this._router = _router;
        this._employeeService = _employeeService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activateRoute.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
        });
    };
    DisplayEmployeesComponent.prototype.viewEmployee = function () {
        this._router.navigate(['/employees', this.employee.id], { queryParams: { 'searchTerm': this.searchTerm } });
    };
    DisplayEmployeesComponent.prototype.editEmployee = function () {
        this._router.navigate(['/edit', this.employee.id]);
    };
    DisplayEmployeesComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this._employeeService.deleteEmployee(this.employee.id).subscribe(function () {
            console.log("Employee with Id = " + _this.employee.id + " deleted");
            _this.notify.emit(_this.employee.id);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"])
    ], DisplayEmployeesComponent.prototype, "employee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayEmployeesComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplayEmployeesComponent.prototype, "notify", void 0);
    DisplayEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-employees',
            template: __webpack_require__(/*! ./display-employees.component.html */ "./src/app/employees/display-employees.component.html"),
            styles: [__webpack_require__(/*! ./display-employees.component.css */ "./src/app/employees/display-employees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], DisplayEmployeesComponent);
    return DisplayEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/emloyee-list-resolver.service.ts":
/*!************************************************************!*\
  !*** ./src/app/employees/emloyee-list-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: EmloyeeListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmloyeeListResolverService", function() { return EmloyeeListResolverService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmloyeeListResolverService = /** @class */ (function () {
    function EmloyeeListResolverService(_employeeService) {
        this._employeeService = _employeeService;
    }
    EmloyeeListResolverService.prototype.resolve = function (route, state) {
        return this._employeeService.getEmployees()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(err); }));
        // return this._employeeService.getEmployees()
        // .pipe(
        // map((employeeList) => new ResolvedEmployeeList(employeeList)),
        // catchError((err: any) => of(new ResolvedEmployeeList(null, err)))
        // );
    };
    EmloyeeListResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmloyeeListResolverService);
    return EmloyeeListResolverService;
}());



/***/ }),

/***/ "./src/app/employees/employee-department-filter.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/employees/employee-department-filter.pipe.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeDepartmentFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDepartmentFilter", function() { return EmployeeDepartmentFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeDepartmentFilter = /** @class */ (function () {
    function EmployeeDepartmentFilter() {
    }
    EmployeeDepartmentFilter.prototype.transform = function (employees, department) {
        if (!employees || !department || department === 'select') {
            return employees;
        }
        return employees.filter(function (e) { return e.department === department; });
    };
    EmployeeDepartmentFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'employeeDepartmentFilter'
        })
    ], EmployeeDepartmentFilter);
    return EmployeeDepartmentFilter;
}());



/***/ }),

/***/ "./src/app/employees/employee-details-guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/employees/employee-details-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeDetailsGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsGuardService", function() { return EmployeeDetailsGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeDetailsGuardService = /** @class */ (function () {
    function EmployeeDetailsGuardService(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
    }
    EmployeeDetailsGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (employee) {
            var employeeExists = !!employee;
            if (employeeExists) {
                return true;
            }
            else {
                _this._router.navigate(['notfound']);
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    };
    EmployeeDetailsGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], EmployeeDetailsGuardService);
    return EmployeeDetailsGuardService;
}());



/***/ }),

/***/ "./src/app/employees/employee-details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee-details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.vertical-align {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0NBQ2Y7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQ2xhc3Mge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi52ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/employees/employee-details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee-details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf='employee'>\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{ employee.name }}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"col-xs-10\">\n      <div class=\"row vertical-align\">\n        <div class=\"col-xs-4\">\n          <img class=\"imageClass\" [src]=\"employee.photoPath\" />\n        </div>\n        <div class=\"col-xs-8\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Gender\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.gender }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Date of Birth\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.dateOfBirth | date }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Contact Preference\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.contactPreference }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              phoneNumber\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.phoneNumber }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Email\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.email }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Department\n            </div>\n            <div class=\"col-xs-6\" [ngSwitch]='employee.department'>:\n              <span *ngSwitchCase='1'>Help Desk</span>\n              <span *ngSwitchCase='2'>IT</span>\n              <span *ngSwitchCase='3'>HR</span>\n              <span *ngSwitchCase='4'>Payroll</span>\n              <span *ngSwitchDefault>N/A</span>\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Is Active\n            </div>\n            <div class=\"col-xs-6\">: {{ employee.isActive }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-footer\">\n    <a class='btn btn-primary' [routerLink]=\"['/list', {id: employee.id}]\" queryParamsHandling='preserve'>Back to the List</a>\n    <button class=\"btn btn-primary pull-right\" (click)='GotoNextEmployee()'>View to next Employee</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employees/employee-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/employees/employee-details.component.ts ***!
  \*********************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(_emplyeeService, _activateRoute, _route) {
        this._emplyeeService = _emplyeeService;
        this._activateRoute = _activateRoute;
        this._route = _route;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activateRoute.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
            _this._emplyeeService.getEmployee(_this._id).subscribe(function (employee) { return _this.employee = employee; }, function (err) { return console.log(err); });
        });
    };
    EmployeeDetailsComponent.prototype.GotoNextEmployee = function () {
        if (this._id < 3) {
            this._id = this._id + 1;
        }
        else {
            this._id = 1;
        }
        this._route.navigate(['/employees', this._id]);
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/employees/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employees/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-gender-filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee-gender-filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeGenderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGenderFilter", function() { return EmployeeGenderFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeGenderFilter = /** @class */ (function () {
    function EmployeeGenderFilter() {
    }
    EmployeeGenderFilter.prototype.transform = function (employees, gender) {
        if (!employees || !gender) {
            return employees;
        }
        return employees.filter(function (e) { return e.gender.toLowerCase() === gender.toLowerCase(); });
    };
    EmployeeGenderFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'employeeGenderFilter'
        })
    ], EmployeeGenderFilter);
    return EmployeeGenderFilter;
}());



/***/ }),

/***/ "./src/app/employees/employee.filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/employees/employee.filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: EmployeeFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFilterPipe", function() { return EmployeeFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeFilterPipe = /** @class */ (function () {
    function EmployeeFilterPipe() {
        this.counter = 0;
    }
    EmployeeFilterPipe.prototype.transform = function (employees, searchTerm) {
        this.counter++;
        console.log(this.counter);
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(function (e) { return e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; });
    };
    EmployeeFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'employeeFilter',
            pure: false
        })
    ], EmployeeFilterPipe);
    return EmployeeFilterPipe;
}());



/***/ }),

/***/ "./src/app/employees/employee.guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/employees/employee.guard.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGuardService", function() { return EmployeeGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeGuardService = /** @class */ (function () {
    function EmployeeGuardService() {
    }
    EmployeeGuardService.prototype.canDeactivate = function (component) {
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you want discards changes?');
        }
        return true;
    };
    EmployeeGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EmployeeGuardService);
    return EmployeeGuardService;
}());



/***/ }),

/***/ "./src/app/employees/employee.service.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employee.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
        this.listEmployees = [{
                id: 1,
                name: 'Mark',
                gender: 'Male',
                contactPreference: 'Email',
                email: 'mark@impelsys.com',
                dateOfBirth: new Date('10/25/1988'),
                department: '1',
                isActive: true,
                photoPath: 'assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                gender: 'Female',
                contactPreference: 'Phone',
                phoneNumber: 234578916,
                dateOfBirth: new Date('11/20/1979'),
                department: '2',
                isActive: true,
                photoPath: 'assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                gender: 'Male',
                contactPreference: 'Phone',
                phoneNumber: 5467989464,
                dateOfBirth: new Date('3/25/1976'),
                department: '3',
                isActive: true,
                photoPath: 'assets/images/john.png'
            }
        ];
        this.baseUrl = 'http://localhost:3000/employees';
    }
    EmployeeService.prototype.getEmployees = function () {
        // return of(this.listEmployees).pipe(delay(2000));
        return this.httpClient.get("" + this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client side error: ' + errorResponse.error.message);
        }
        else {
            console.error('Server side error: ' + JSON.stringify(errorResponse));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('There is a problem with service. We are notified & working on it. Please try again later');
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.httpClient.get(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.addEmplyee = function (employee) {
        return this.httpClient.post("" + this.baseUrl, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        // if (employee.id === null) {
        //   const maxid = this.listEmployees.reduce(function (e1, e2) {
        //     return e1.id > e2.id ? e1 : e2;
        //   }).id;
        //   employee.id = maxid + 1;
        //   this.listEmployees.push(employee);
        // } else {
        //   const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
        //   this.listEmployees[foundIndex] = employee;
        // }
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.httpClient.put(this.baseUrl + "/" + employee.id, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.httpClient.delete(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employees/list-employees.component.css":
/*!********************************************************!*\
  !*** ./src/app/employees/list-employees.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.pointer-cursor{\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  background-color: #2196F3 !important;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.grid-item {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: 1px solid rgba(0, 0, 0, 0.8);\r\n  padding: 20px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n \r\n}\r\n\r\n.flex > div {\r\n  flex: 1 1 50%;\r\n  padding: 10px;\r\n \r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2xpc3QtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsMkNBQTJDO0VBQzNDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFJRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7O0NBRWpCOztBQUdEO0VBQ0UsY0FBYztFQUNkLGNBQWM7OztDQUdmIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzL2xpc3QtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucG9pbnRlci1jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmdyaWQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gXHJcbn1cclxuXHJcblxyXG4uZmxleCA+IGRpdiB7XHJcbiAgZmxleDogMSAxIDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gXHJcbiBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employees/list-employees.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employees/list-employees.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 #h1Variable>\n\n</h1> -->\n<div class='gridd'>\n  <div class=\"form-group\">\n    <label>Filter</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='searchTerm' placeholder=\"Search by Name\" />\n  </div>\n\n\n\n  <!-- <div class=\"form-group grid-item\">\n    <button class=\"btn btn-primary\" (click)='ChangeEmplyeeName()'>Change Employee Name</button>\n  </div> -->\n</div>\n\n<div *ngFor=\"let employee of filterdEmployees\">\n  <!-- <div (click)=\"h1Variable.innerHTML =childData.getEmployeeDetail()\"> -->\n  <!-- <div (click)='onClick(employee.id)' class='pointer-cursor'> -->\n  <app-display-employees [employee]='employee' [searchTerm]='searchTerm' (notify)='deleteFilterEmployee($event)'></app-display-employees>\n  <!-- </div> -->\n  <!-- </div> -->\n\n</div>\n<div *ngIf='error'>{{error}}</div>\n<!-- <button (click)='nextEmployee() ' class=\"btn btn-primary\">View next Employee</button>\n<br>\n<br>\n<app-display-employees [employee]='employeesToDisplay '></app-display-employees> -->\n"

/***/ }),

/***/ "./src/app/employees/list-employees.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/list-employees.component.ts ***!
  \*******************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent(_employeeService, _router, _route) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._route = _route;
        this.employees = [];
        this.filterdEmployees = [];
        this.departments = 'select';
        var resolveData = this._route.snapshot.data['employeeList'];
        if (Array.isArray(resolveData)) {
            this.employees = resolveData;
        }
        else {
            this.error = resolveData;
        }
        if (this._route.snapshot.queryParamMap.has('searchTerm')) {
            this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
        }
        else {
            this.filterdEmployees = this.employees;
        }
    }
    Object.defineProperty(ListEmployeesComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filterdEmployees = this.filterEmployees(value);
        },
        enumerable: true,
        configurable: true
    });
    // displayChildData: Employee;
    // employeesToDisplay: Employee;
    // private arrayIndex = 1;
    ListEmployeesComponent.prototype.filterEmployees = function (searchString) {
        return this.employees.filter(function (e) { return e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1; });
    };
    ListEmployeesComponent.prototype.ngOnInit = function () {
        // this.employeesToDisplay = this.employees[0];
    };
    // onClick(employeeId: number) {
    //   this._router.navigate(['/employees', employeeId], {
    //     queryParams: { 'searchTerm': this.searchTerm }
    //   });
    // }
    ListEmployeesComponent.prototype.ChangeEmplyeeName = function () {
        this.employees[0].name = 'Jordan';
        this.filterdEmployees = this.filterEmployees(this.searchTerm);
        // const newEmployee: Employee[] = Object.assign([], this.employees);
        // newEmployee[0].name = 'Jordan';
        // this.employees = newEmployee;
    };
    ListEmployeesComponent.prototype.deleteFilterEmployee = function (id) {
        var i = this.filterdEmployees.findIndex(function (e) { return e.id === id; });
        if (i !== -1) {
            this.filterdEmployees.splice(i, 1);
        }
    };
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employees',
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.css */ "./src/app/employees/list-employees.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_employees_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/*!**********************************************!*\
  !*** ./src/app/page-not-found.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>The resource file is u looking for cannot be found</h1>\n"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/accordation.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/accordation.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerCursor {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY29yZGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWNjb3JkYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyQ3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/accordation.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/accordation.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary pointerCursor\" [class.panel-success]='expanded'>\n  <div class=\"panel-heading\" (click)='isHidden = !isHidden'>\n    <h3 class=\"panel-title\">{{ title }}</h3>\n  </div>\n  <div class=\"panel-body\" [hidden]='isHidden'>\n    <ng-content select='.myPanelBody'></ng-content>\n  </div>\n  <div class=\"panel-footer\" [hidden]='isHidden'>\n    <ng-content select='.myPanelFooter'></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/accordation.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/accordation.component.ts ***!
  \*************************************************/
/*! exports provided: AccordationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordationComponent", function() { return AccordationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordationComponent = /** @class */ (function () {
    function AccordationComponent() {
        this.isHidden = false;
    }
    AccordationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordationComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordationComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordationComponent.prototype, "isHidden", void 0);
    AccordationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordation',
            template: __webpack_require__(/*! ./accordation.component.html */ "./src/app/shared/accordation.component.html"),
            styles: [__webpack_require__(/*! ./accordation.component.css */ "./src/app/shared/accordation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordationComponent);
    return AccordationComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-equal-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/confirm-equal-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (passwordGroup) {
        var passField = passwordGroup.get('password');
        var confirmPassField = passwordGroup.get('cpassword');
        if (passField && confirmPassField && passField.value !== confirmPassField.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/select-required-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/select-required-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: SelectRequiredValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRequiredValidatorDirective", function() { return SelectRequiredValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectRequiredValidatorDirective = /** @class */ (function () {
    function SelectRequiredValidatorDirective() {
    }
    SelectRequiredValidatorDirective_1 = SelectRequiredValidatorDirective;
    SelectRequiredValidatorDirective.prototype.validate = function (control) {
        return control.value === this.appSelect ? { 'defaultSelected': true } : null;
    };
    var SelectRequiredValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appSelectValidator'),
        __metadata("design:type", String)
    ], SelectRequiredValidatorDirective.prototype, "appSelect", void 0);
    SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSelectValidator]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: SelectRequiredValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], SelectRequiredValidatorDirective);
    return SelectRequiredValidatorDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Angular\myfirstsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map