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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admindetail/admindetail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admindetail/admindetail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admindetail/admindetail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admindetail/admindetail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admindetail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admindetail/admindetail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admindetail/admindetail.component.ts ***!
  \************************************************************/
/*! exports provided: AdmindetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindetailComponent", function() { return AdmindetailComponent; });
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

var AdmindetailComponent = /** @class */ (function () {
    function AdmindetailComponent() {
    }
    AdmindetailComponent.prototype.ngOnInit = function () {
    };
    AdmindetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admindetail',
            template: __webpack_require__(/*! ./admindetail.component.html */ "./src/app/admin/admindetail/admindetail.component.html"),
            styles: [__webpack_require__(/*! ./admindetail.component.css */ "./src/app/admin/admindetail/admindetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmindetailComponent);
    return AdmindetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/amaster/amaster.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/amaster/amaster.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/amaster/amaster.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/amaster/amaster.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!-- <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li> -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['aregisteration']\" >Admin Dashboard</a>\r\n      </li> -->\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Admin Dashboard</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['Dashboard']\" >Dashboard</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['CompanyDetail']\" href=\"#\">Company Detail</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['CompanyList']\" href=\"#\">Company List</a>\r\n        </div>\r\n      </li>\r\n      <!-- routerLink=\"./CompanyDetail\" -->\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Customer</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['Customerdetails']\"  href=\"#\">Add Cusomer</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['CustomerList']\"  href=\"#\">Customer List</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Employee</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"#\">Add Employee</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Employee List</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Supplier</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"#\">Add Supplier</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Supplier List</a>\r\n        </div>\r\n      </li>\r\n     \r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Product</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"#\">Add Product</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Product List</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Purchase</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"#\">Purchase Detail</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Purchase List</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Sales</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"#\">Sale Detail</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Purchase List</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <span class=\"navbar-text\">\r\n        <label  style=\"color:white\">Welcome  </label>    <label  style=\"color:rgb(185, 231, 18)\">{{currentUser}} </label>  \r\n        <button class=\"btn btn-outline-danger btn-sm\" (click)=\"logout()\" type=\"submit\">Logout</button> \r\n      </span>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/admin/amaster/amaster.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/amaster/amaster.component.ts ***!
  \****************************************************/
/*! exports provided: AmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmasterComponent", function() { return AmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AmasterComponent = /** @class */ (function () {
    function AmasterComponent(_UserService, router) {
        this._UserService = _UserService;
        this.router = router;
    }
    AmasterComponent.prototype.ngOnInit = function () {
        this.currentUser = this._UserService.getUserLoggedIn().Name;
    };
    AmasterComponent.prototype.go = function (url) {
        switch (url) {
            case 'Dashboard': {
                this.router.navigate(['adminmaster/CompanyDetail']);
                break;
            }
            case 'BankAccDetail': {
                this.router.navigate(['/Bankaccount']);
                break;
            }
            default: {
                break;
            }
        }
    };
    AmasterComponent.prototype.logout = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/']);
    };
    AmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amaster',
            template: __webpack_require__(/*! ./amaster.component.html */ "./src/app/admin/amaster/amaster.component.html"),
            styles: [__webpack_require__(/*! ./amaster.component.css */ "./src/app/admin/amaster/amaster.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AmasterComponent);
    return AmasterComponent;
}());



/***/ }),

/***/ "./src/app/admin/aregistration/aregistration.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/aregistration/aregistration.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/aregistration/aregistration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/aregistration/aregistration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <img src=\"assets/img/ngx-bootstrap.svg\" class=\"logo\">\r\n          </a>\r\n          <span class=\"navbar-brand\">Angular + Bootstrap</span>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a href=\"#\">\r\n            Link <span class=\"sr-only\">(current)</span>\r\n          </a></li>\r\n          <li><a href=\"#\">Link</a></li>\r\n          <li class=\"dropdown\" dropdown> <!-- {1} -->\r\n              <a dropdownToggle role=\"button\"> <!-- {2} -->\r\n                Dropdown <span class=\"caret\"></span></a>\r\n              <ul *dropdownMenu class=\"dropdown-menu\"> <!-- {3} -->\r\n                  <li><a href=\"#\">Action</a></li>\r\n                  <li><a href=\"#\">Another action</a></li>\r\n                  <li><a href=\"#\">Something else here</a></li>\r\n                  <li role=\"separator\" class=\"divider\"></li>\r\n                  <li><a href=\"#\">Separated link</a></li>\r\n                  <li role=\"separator\" class=\"divider\"></li>\r\n                  <li><a href=\"#\">One more separated link</a></li>\r\n              </ul>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/admin/aregistration/aregistration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/aregistration/aregistration.component.ts ***!
  \****************************************************************/
/*! exports provided: AregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AregistrationComponent", function() { return AregistrationComponent; });
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

var AregistrationComponent = /** @class */ (function () {
    function AregistrationComponent() {
    }
    AregistrationComponent.prototype.ngOnInit = function () {
    };
    AregistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aregistration',
            template: __webpack_require__(/*! ./aregistration.component.html */ "./src/app/admin/aregistration/aregistration.component.html"),
            styles: [__webpack_require__(/*! ./aregistration.component.css */ "./src/app/admin/aregistration/aregistration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AregistrationComponent);
    return AregistrationComponent;
}());



/***/ }),

/***/ "./src/app/admin/awelcome/awelcome.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/awelcome/awelcome.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/awelcome/awelcome.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/awelcome/awelcome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/awelcome/awelcome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/awelcome/awelcome.component.ts ***!
  \******************************************************/
/*! exports provided: AwelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwelcomeComponent", function() { return AwelcomeComponent; });
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

var AwelcomeComponent = /** @class */ (function () {
    function AwelcomeComponent() {
    }
    AwelcomeComponent.prototype.ngOnInit = function () {
    };
    AwelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awelcome',
            template: __webpack_require__(/*! ./awelcome.component.html */ "./src/app/admin/awelcome/awelcome.component.html"),
            styles: [__webpack_require__(/*! ./awelcome.component.css */ "./src/app/admin/awelcome/awelcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwelcomeComponent);
    return AwelcomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/bankaccountdetail/bankaccountdetail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/bankaccountdetail/bankaccountdetail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bankaccountdetail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/bankaccountdetail/bankaccountdetail.component.ts ***!
  \************************************************************************/
/*! exports provided: BankaccountdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankaccountdetailComponent", function() { return BankaccountdetailComponent; });
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

var BankaccountdetailComponent = /** @class */ (function () {
    function BankaccountdetailComponent() {
    }
    BankaccountdetailComponent.prototype.ngOnInit = function () {
    };
    BankaccountdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bankaccountdetail',
            template: __webpack_require__(/*! ./bankaccountdetail.component.html */ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.html"),
            styles: [__webpack_require__(/*! ./bankaccountdetail.component.css */ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BankaccountdetailComponent);
    return BankaccountdetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/company-list/company-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/company-list/company-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/company-list/company-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/company-list/company-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <!-- <ag-grid-angular style=\"width: 100%; height: 200px;\" class=\"ag-theme-balham\"    [gridOptions]=\"gridOptions\" enableSorting=\"true\" enableFilter=\"true\">\r\n        </ag-grid-angular> -->\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/company-list/company-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/company-list/company-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
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

var CompanyListComponent = /** @class */ (function () {
    // private gridOptions: GridOptions;
    function CompanyListComponent() {
        // this.gridOptions = <GridOptions>{
        //   onGridReady: () => {
        //     this.gridOptions.api.sizeColumnsToFit();
        //   }
        // };
        // this.gridOptions.columnDefs = [
        //   {
        //     headerName: "ID",
        //     field: "ID",
        //     width: 100
        //   },
        //   {
        //     headerName: "Employee Code",
        //     field: "EMPLOYEECODE",
        //     width: 100
        //   },
        //   {
        //     headerName: "Full Name",
        //     field: "FullName",
        //     width: 100
        //   },
        //   {
        //     headerName: "Gender",
        //     field: "Gender",
        //     width: 100
        //   },
        //   {
        //     headerName: "Mobile No",
        //     field: "MobileNo",
        //     width: 100
        //   },
        //   {
        //     headerName: "Aadhar No",
        //     field: "AadharNo",
        //     width: 100
        //   },
        //   {
        //     headerName: "Department",
        //     field: "Department",
        //     width: 100
        //   },
        //   {
        //     headerName: "Job Title",
        //     field: "JobTitle",
        //     width: 100
        //   },
        //   {
        //     headerName: "Exp. Letter",
        //     field: "EXPERIENCELETTER",
        //     width: 100
        //   },
        //   {
        //     headerName: "Pay Slip",
        //     field: "PAYSLIP",
        //     width: 100
        //   }
        // ];
        // this.gridOptions.rowData = [
        //   { id: 5, value: 10 },
        //   { id: 10, value: 15 },
        //   { id: 15, value: 20 }
        // ]
    }
    CompanyListComponent.prototype.ngOnInit = function () {
    };
    CompanyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__(/*! ./company-list.component.html */ "./src/app/admin/company-list/company-list.component.html"),
            styles: [__webpack_require__(/*! ./company-list.component.css */ "./src/app/admin/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/admin/companydetail/companydetail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/companydetail/companydetail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/companydetail/companydetail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/companydetail/companydetail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <form #NgForm=\"ngForm\" (ngSubmit)=\"register(model)\">\r\n                <fieldset>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"CompanyName\">\r\n                                <span class=\"req\">* </span> Company Name: </label>\r\n                            <input class=\"form-control\" type=\"text\"  name=\"CompanyName\"  displayName=\"Company Name\" #CompanyName=\"ngModel\"  id=\"txtCompanyName\"\r\n                                [(ngModel)]=\"model.Name\" required/>\r\n                            <app-show-errors [control]=\"CompanyName\"  ></app-show-errors>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"CompanyName\">\r\n                                <span class=\"req\">* </span> Website: </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"Website\" [(ngModel)]=\"model.Website\" #Website=\"ngModel\" id=\"txtWebsite\" ngModel required/>\r\n                            <app-show-errors [control]=\"Website\" ></app-show-errors>\r\n                        </div>\r\n                    </div>\r\n              <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"Registration\">\r\n                                <span class=\"req\">* </span> Registration No.: </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"Registration\" [(ngModel)]=\"model.RegistrationNo\" #Registration=\"ngModel\" id=\"txtRegistration\" \r\n                            ngModel required/>\r\n                            <app-show-errors [control]=\"Registration\"></app-show-errors>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"pan\">\r\n                                <span class=\"req\">* </span> PAN : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"Pan\" id=\"txtPan\" [(ngModel)]=\"model.PAN\" #Pan=\"ngModel\" ngModel required/>\r\n                            <app-show-errors [control]=\"Pan\"></app-show-errors>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"CompanyCode\">\r\n                                <span class=\"req\">* </span> Company Code.: </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"CompanyCode\" [(ngModel)]=\"model.Code\" #CompanyCode=\"ngModel\" id=\"txtCompanyCode\" \r\n                            ngModel required/>\r\n                            <app-show-errors [control]=\"CompanyCode\"></app-show-errors>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"fax\">\r\n                                <span class=\"req\">* </span> FAX : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"Fax\" id=\"txtFax\" [(ngModel)]=\"model.Fax\" #Fax=\"ngModel\" ngModel required/>\r\n                            <app-show-errors [control]=\"Fax\"></app-show-errors>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"GSTNo\">\r\n                                <span class=\"req\">* </span> GST No : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"GSTNo\" id=\"txtGSTNo\" [(ngModel)]=\"model.GSTN\" #GSTNo=\"ngModel\" ngModel required/>\r\n                            <app-show-errors [control]=\"GSTNo\"></app-show-errors>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"Address\">\r\n                                <span class=\"req\">* </span> Address : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"Address\" id=\"txtAddress\" [(ngModel)]=\"model.Address\" #Address=\"ngModel\" ngModel required/>\r\n                            <app-show-errors [control]=\"Address\"></app-show-errors>\r\n                        </div>\r\n                    </div>\r\n                  \r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"City\">\r\n                                <span class=\"req\">* </span> City : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"City\" id=\"txtCity\" [(ngModel)]=\"model.City\" #City=\"ngModel\" ngModel required/>\r\n                            <app-show-errors [control]=\"City\"></app-show-errors>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                    <label for=\"State\">\r\n                                        <span class=\"req\">* </span> State : </label>\r\n                                    <select class=\"form-control\" name=\"statelist\"  ngModel  [(ngModel)]=\"model.StateId\">\r\n                                        <option *ngFor=\"let state of stateList\" value=\"{{state.Id}}\">\r\n                                            {{state.Name}}\r\n                                        </option>\r\n                                    </select>\r\n                                   \r\n                                </div>\r\n                                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                    <label for=\"PinCode\">\r\n                                        <span class=\"req\">* </span> Pin Code : </label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"PinCode\" [(ngModel)]=\"model.Zip\" id=\"txtPinCode\" #PinCode=\"ngModel\" ngModel required/>\r\n                                        <app-show-errors [control]=\"PinCode\"></app-show-errors>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                <label for=\"Email\">\r\n                                        <span class=\"req\">* </span>    Email : </label>\r\n                                        <input class=\"form-control\" type=\"email\" name=\"Email\" [(ngModel)]=\"model.Email\" id=\"txtEmail\" #Email=\"ngModel\"  ngModel  required appEmailFormatValidator/>\r\n                                        <app-show-errors [control]=\"Email\"></app-show-errors>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <div class=\"row\">\r\n                                \r\n                                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                        <label for=\"Contact\">\r\n                                                <span class=\"req\">* </span> Contact Number : </label>\r\n                                            <input class=\"form-control\" type=\"text\" name=\"Contact\" [(ngModel)]=\"model.ContactNum\" id=\"txtContact\" #Contact=\"ngModel\" ngModel required />\r\n                                            <app-show-errors [control]=\"Contact\"></app-show-errors>\r\n                                </div>\r\n                                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                        <label for=\"AltContact\">\r\n                                            Alternate Contact Number : </label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"AltContact\" [(ngModel)]=\"model.AlternateContactNo\" id=\"txtAltContact\" #AltContact=\"ngModel\" ngModel />\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                <label>\r\n                                    Description 1 : </label>\r\n                                <textarea class=\"form-control\" rows=\"3\" name=\"Description1\" [(ngModel)]=\"model.Description1\" id=\"txtDescription1\" #Description1=\"ngModel\" \r\n                                ngModel></textarea>\r\n                                <div id=\"errDescription\"></div>\r\n                            </div>\r\n                            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                <label for=\"Description2\">\r\n                                    Description 2 : </label>\r\n                                <textarea class=\"form-control\" rows=\"3\" name=\"txtDescription2\" [(ngModel)]=\"model.Description2\" id=\"txtDescription2\" #Description2=\"ngModel\" \r\n                                ngModel></textarea>\r\n                                <div id=\"errDescription2\"></div>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                <label>\r\n                                    Logo </label>\r\n                                    <input type=\"file\" (change)=\"onFileChanged($event)\" placeholder=\"Upload image...\" /><br/>\r\n                                    <img [src]=\"model.Logo\"  alt=\"Preivew\" style=\"width: 250px; height: 80px\"> \r\n                            </div>\r\n                            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                                <label for=\"TermsAndConditions\">\r\n                                 Terms and Conditions : </label>\r\n                                <textarea class=\"form-control\" rows=\"3\" name=\"txtTermsAndConditions\" [(ngModel)]=\"model.TermsConditions\" id=\"txtTermsAndConditions\" #TermsAndConditions=\"ngModel\" \r\n                                ngModel></textarea>\r\n                                \r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row float-right\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-md-12 \">\r\n                                <button type=\"submit\" [disabled]=\"NgForm.invalid || NgForm.pending\" class=\"btn btn-outline-success\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                </fieldset>\r\n            </form>\r\n            <!-- ends register form -->\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/admin/companydetail/companydetail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/companydetail/companydetail.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanydetailComponent", function() { return CompanydetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanydetailComponent = /** @class */ (function () {
    function CompanydetailComponent(_companyService, _common, router) {
        this._companyService = _companyService;
        this._common = _common;
        this.router = router;
        this.img = "data:image/jpeg;base64,";
        this.stateList = [];
        this.model = {};
    }
    CompanydetailComponent.prototype.ngOnInit = function () {
        this.GetAllStates();
        this.GetCompanyProfile();
    };
    CompanydetailComponent.prototype.register = function (modeldata) {
        var _this = this;
        if (modeldata.Logo != null) {
            modeldata.Logo = modeldata.Logo.split(",")[1];
        }
        this._companyService.CreateCompany(modeldata).subscribe(function (tes) {
            var data = tes;
            if (data && data.StatusCode == 1) {
                modeldata.Logo = _this.img + modeldata.Logo;
                alert(data.Messages[0]);
            }
        }, function (error) {
            alert(error);
        });
    };
    CompanydetailComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.model.Logo = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.model.Logo = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    CompanydetailComponent.prototype.GetCompanyProfile = function () {
        var _this = this;
        this._companyService.GetCompanyProfile().subscribe(function (tes) {
            var data = tes;
            if (data) {
                if (data.StatusCode === 1) {
                    _this.model = Object.assign({}, data.Obj);
                    _this.model.Logo = _this.img + data.Obj.Logo;
                }
            }
        }, function (error) {
            alert(error);
        });
    };
    CompanydetailComponent.prototype.GetAllStates = function () {
        var _this = this;
        this._common.GetAllStates().subscribe(function (tes) {
            var data = tes;
            if (data) {
                if (data.StatusCode === 1) {
                    _this.stateList = data.List;
                }
            }
        }, function (error) {
            alert(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CompanydetailComponent.prototype, "myForm", void 0);
    CompanydetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companydetail',
            template: __webpack_require__(/*! ./companydetail.component.html */ "./src/app/admin/companydetail/companydetail.component.html"),
            styles: [__webpack_require__(/*! ./companydetail.component.css */ "./src/app/admin/companydetail/companydetail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanydetailComponent);
    return CompanydetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/customerdetails/customerdetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/customerdetails/customerdetails.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/customerdetails/customerdetails.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/customerdetails/customerdetails.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"customerForm\"  (ngSubmit)=\"submitForm()\">\r\n    <fieldset>\r\n           \r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"FirstName\">\r\n                    <span class=\"req\">* </span> First Name : </label>\r\n                <input class=\"form-control\" type=\"text\"  formControlName=\"firstname\"  displayName=\"First Name\" id=\"txtfirstName\"\r\n                     required/>\r\n             \r\n\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"LastName\">\r\n                    <span class=\"req\">* </span> Last Name : </label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"lastname\"  displayName=\"Last Name\" id=\"txtlastName\"  \r\n                required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"CustomerCode\">\r\n                    <span class=\"req\">* </span> Customer Code : </label>\r\n                <input class=\"form-control\" type=\"text\"  formControlName=\"customercode\"  displayName=\"Customer Code\" id=\"txtcustomercode\"\r\n                     required/>\r\n             \r\n\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"DataOfBirth\">\r\n                    <span class=\"req\">* </span> Date Of Birth : </label>\r\n                    <input type=\"date\" name=\"dataofbirth\"  formControlName=\"dataofbirth\" min=\"1000-01-01\" class=\"form-control\">\r\n            \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"MaritialStatus\">\r\n                    <span class=\"req\">* </span> Maritial Status : </label>\r\n                    <select class=\"form-control\"  formControlName=\"maritalstatus\" >\r\n                            <option *ngFor=\"let type of MaritialStatuskeys\" value=\"{{type}}\">\r\n                                {{type}}\r\n                            </option>\r\n                        </select>\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"email\">\r\n                    <span class=\"req\">* </span> Email : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"email\"  displayName=\"email\" id=\"txtemail\"\r\n                    required/>\r\n            \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"MobNo\">\r\n                    <span class=\"req\">* </span> Mobile Number : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"mobileno\"  displayName=\"mobileno\" id=\"txtmobileno\"\r\n                    required/>\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                    <label for=\"Aadhar\">\r\n                            <span class=\"req\">* </span> Aadhar : </label>\r\n                        <input class=\"form-control\" type=\"text\" name=\"Aadhar\" formControlName=\"aadhar\" id=\"txtAadhar\"  required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"MobNo\">\r\n                    <span class=\"req\">* </span> Address : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"address\"  displayName=\"Address\" id=\"txtAddress\"\r\n                    required/>\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"City\">\r\n                    <span class=\"req\">* </span> City : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"city\"  displayName=\"City\" \r\n                    id=\"City\"\r\n                    required/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n         \r\n            <div class=\"col-lg-12  col-md-12 col-sm-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                        <label for=\"State\">\r\n                            <span class=\"req\">* </span> State : </label>\r\n                            <select class=\"form-control\" name=\"statelist\"   formControlName=\"state\">\r\n                                    <option *ngFor=\"let state of stateList\" value=\"{{state.Id}}\">\r\n                                        {{state.Name}}\r\n                                    </option>\r\n                                </select>\r\n                       \r\n                    </div>\r\n                    <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                        <label for=\"PinCode\">\r\n                            <span class=\"req\">* </span> Pin Code : </label>\r\n                            <input class=\"form-control\" type=\"text\" name=\"PinCode\"  formControlName=\"zip\" id=\"txtPinCode\"  required/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"pan\">\r\n                    <span class=\"req\">* </span> PAN : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"pan\"  displayName=\"pan\" id=\"pan\"\r\n                    required/>\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"gstn\">\r\n                    <span class=\"req\">* </span> GST No : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"gstn\"  displayName=\"gstn\" \r\n                    id=\"gstn\"\r\n                    required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"pan\">\r\n                    <span class=\"req\">* </span> Visit Count : </label>\r\n                    <input class=\"form-control\" type=\"text\"  formControlName=\"visitcount\"  displayName=\"visitcount\" id=\"visitcount\"\r\n                    required/>\r\n            </div>\r\n            <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                <label for=\"active\">\r\n                    <span class=\"req\">* </span> Active : </label>\r\n                    <select class=\"form-control\" name=\"statelist\"  formControlName=\"active\" >\r\n                            <option *ngFor=\"let type of activeType\" value=\"{{type.key}}\">\r\n                                {{type.value}}\r\n                            </option>\r\n                        </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                    <label for=\"Gender\">\r\n                        <span class=\"req\">* </span> Gender : </label>\r\n                        <div >\r\n                            <label>Male\r\n                                <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Male\" /></label>\r\n                                <label>Female\r\n                                <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Female\" /></label>\r\n                                <!-- <label *ngFor=\"let type of GenderList; let idx = index\"><span>{{type}}</span>\r\n                                     <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"type\" />\r\n                                </label> -->\r\n                            </div>\r\n                </div>\r\n                <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                    <label for=\"active\">\r\n                        <span class=\"req\">* </span> First Visit : </label>\r\n                        <input class=\"form-control\" type=\"text\"  formControlName=\"firstvisit\"  displayName=\"firstvisit\" id=\"firstvisit\"\r\n                    required/>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-lg-6  col-md-12 col-sm-12\">\r\n                            <label for=\"active\">\r\n                                <span class=\"req\">* </span> Last Visit : </label>\r\n                                <input class=\"form-control\" type=\"text\"  formControlName=\"lastvisit\"  displayName=\"lastvisit\" id=\"lastvisit\"\r\n                            required/>\r\n                        </div>\r\n                        <div class=\"col-lg-6  col-md-12 col-sm-12 pull-right\">\r\n                                <button type=\"submit\"  class=\"btn btn-outline-success\">Submit</button>\r\n                            </div>\r\n            </div>\r\n      \r\n        </fieldset>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/customerdetails/customerdetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/customerdetails/customerdetails.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailsComponent", function() { return CustomerdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerdetailsComponent = /** @class */ (function () {
    function CustomerdetailsComponent(_customerService, _common, router, fb) {
        this._customerService = _customerService;
        this._common = _common;
        this.router = router;
        this.fb = fb;
        this.stateList = [];
        //  ActiveType:[]=[{key:1,value:'Active'},{key:2,value:'In-Active'}];
        //  const MaritialStatus=[{key:1,value:'Single'},{key:2,value:'Married'}];
        this.customerInput = {};
        this.activeType = [{ key: 1, value: 'Active' }, { key: 2, value: 'In-Active' }];
        this.MaritialStatuskeys = ['Single', 'Married', 'Other'];
        this.GenderList = ['Male', 'Female'];
        this.createForm();
    }
    CustomerdetailsComponent.prototype.ngOnInit = function () {
        this.GetAllStates();
    };
    CustomerdetailsComponent.prototype.GetAllStates = function () {
        var _this = this;
        this._common.GetAllStates().subscribe(function (tes) {
            var data = tes;
            if (data) {
                if (data.StatusCode === 1) {
                    _this.stateList = data.List;
                }
            }
        }, function (error) {
            alert(error);
        });
    };
    CustomerdetailsComponent.prototype.createForm = function () {
        this.customerForm = this.fb.group({
            customercode: '',
            dataofbirth: '',
            firstname: '',
            lastname: '',
            gender: 'Male',
            identityproof: '',
            aadhar: '',
            pan: '',
            gstn: '',
            maritalstatus: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            firstvisit: '',
            lastvisit: '',
            visitcount: '',
            active: '',
            mobileno: ''
        });
        localStorage.getItem('');
        if (localStorage.getItem('customerID')) {
            this.getCustomerData(localStorage.getItem('customerID'));
        }
    };
    CustomerdetailsComponent.prototype.getCustomerData = function (customerID) {
        var _this = this;
        this.customerInput.type = 1;
        this.customerInput.Id = customerID;
        this._customerService.GetCustomerList(this.customerInput).subscribe(function (apidata) {
            var data = apidata;
            if (data.StatusCode == 1) {
                _this.customerForm = _this.fb.group({
                    customercode: data.List[0].CustomerCode,
                    dataofbirth: data.List[0].DateOfBirth.substring(0, 10),
                    firstname: data.List[0].FirstName,
                    lastname: data.List[0].LirstName,
                    gender: data.List[0].Gender,
                    aadhar: data.List[0].AadharNo,
                    pan: data.List[0].PAN,
                    gstn: data.List[0].GSTN,
                    maritalstatus: data.List[0].MaritalStatus,
                    email: data.List[0].Email,
                    address: data.List[0].FirstName,
                    city: data.List[0].City,
                    state: data.List[0].StateId,
                    zip: data.List[0].Zip,
                    firstvisit: data.List[0].FistVisitDate,
                    lastvisit: data.List[0].LastVisitDate,
                    visitcount: data.List[0].VisitCount,
                    active: data.List[0].Active,
                    mobileno: data.List[0].MobileNo
                });
            }
            //this.customerList=data.List;
        });
    };
    CustomerdetailsComponent.prototype.submitForm = function () {
        debugger;
        this.customer = this.customerForm.value;
        this._customerService.CreateCustomer(this.customer);
    };
    CustomerdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerdetails',
            template: __webpack_require__(/*! ./customerdetails.component.html */ "./src/app/admin/customerdetails/customerdetails.component.html"),
            styles: [__webpack_require__(/*! ./customerdetails.component.css */ "./src/app/admin/customerdetails/customerdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomerdetailsComponent);
    return CustomerdetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/customerlist/customerlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/customerlist/customerlist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/customerlist/customerlist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/customerlist/customerlist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ag-grid-angular style=\"width: 100%; height: 200px;\" class=\"ag-theme-balham\"    [gridOptions]=\"gridOptions\" enableSorting=\"true\" enableFilter=\"true\">\r\n</ag-grid-angular> -->\r\n<table class=\"table table-striped\">\r\n    <thead >\r\n     \r\n        <th *ngFor=\"let names of gridheaderNames\">{{names}}</th>\r\n   \r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of rowData\">\r\n                <td><a [routerLink]=\"\" (click)=\"navigate(data.Id);\">{{data.CustomerCode}}</a> </td>\r\n                <td>{{data.FullName}}</td>\r\n                <td>{{data.Gender}}</td>\r\n                <td>{{data.MobileNo}}</td>\r\n                <td>{{data.Email}}</td>\r\n                <td>{{data.FullAddress}}</td>\r\n               \r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/admin/customerlist/customerlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/customerlist/customerlist.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlistComponent", function() { return CustomerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { customer} from '../../models/customer';
var CustomerlistComponent = /** @class */ (function () {
    function CustomerlistComponent(_customerService, _common, router) {
        this._customerService = _customerService;
        this._common = _common;
        this.router = router;
        this.customerList = [];
        this.rowData = [];
        this.gridheaderNames = ['Customer Code', 'Full Name', 'Gender', 'Mobile No', 'Email', 'Full Address'];
        this.customerInput = {};
    }
    CustomerlistComponent.prototype.navigate = function (val) {
        localStorage.setItem('customerID', val);
        this.router.navigate(['adminmaster/Customerdetails']);
    };
    CustomerlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerInput.type = 1;
        this.customerInput.Active = 1;
        this._customerService.GetCustomerList(this.customerInput).subscribe(function (apidata) {
            var data = apidata;
            if (data.StatusCode == 1) {
                _this.rowData = data.List;
            }
        });
    };
    CustomerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerlist',
            template: __webpack_require__(/*! ./customerlist.component.html */ "./src/app/admin/customerlist/customerlist.component.html"),
            styles: [__webpack_require__(/*! ./customerlist.component.css */ "./src/app/admin/customerlist/customerlist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerlistComponent);
    return CustomerlistComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboardmaster/dashboardmaster.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/dashboardmaster/dashboardmaster.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboardmaster/dashboardmaster.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboardmaster/dashboardmaster.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "jitender rana\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/dashboardmaster/dashboardmaster.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboardmaster/dashboardmaster.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardmasterComponent", function() { return DashboardmasterComponent; });
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

var DashboardmasterComponent = /** @class */ (function () {
    function DashboardmasterComponent() {
    }
    DashboardmasterComponent.prototype.ngOnInit = function () {
    };
    DashboardmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardmaster',
            template: __webpack_require__(/*! ./dashboardmaster.component.html */ "./src/app/admin/dashboardmaster/dashboardmaster.component.html"),
            styles: [__webpack_require__(/*! ./dashboardmaster.component.css */ "./src/app/admin/dashboardmaster/dashboardmaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardmasterComponent);
    return DashboardmasterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutes, ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_amaster_amaster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/amaster/amaster.component */ "./src/app/admin/amaster/amaster.component.ts");
/* harmony import */ var _admin_aregistration_aregistration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/aregistration/aregistration.component */ "./src/app/admin/aregistration/aregistration.component.ts");
/* harmony import */ var _admin_awelcome_awelcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/awelcome/awelcome.component */ "./src/app/admin/awelcome/awelcome.component.ts");
/* harmony import */ var _user_umaster_umaster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/umaster/umaster.component */ "./src/app/user/umaster/umaster.component.ts");
/* harmony import */ var _user_uwelcome_uwelcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/uwelcome/uwelcome.component */ "./src/app/user/uwelcome/uwelcome.component.ts");
/* harmony import */ var _user_uregistration_uregistration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/uregistration/uregistration.component */ "./src/app/user/uregistration/uregistration.component.ts");
/* harmony import */ var _admin_companydetail_companydetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/companydetail/companydetail.component */ "./src/app/admin/companydetail/companydetail.component.ts");
/* harmony import */ var _admin_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/company-list/company-list.component */ "./src/app/admin/company-list/company-list.component.ts");
/* harmony import */ var _admin_bankaccountdetail_bankaccountdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/bankaccountdetail/bankaccountdetail.component */ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.ts");
/* harmony import */ var _admin_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/customerlist/customerlist.component */ "./src/app/admin/customerlist/customerlist.component.ts");
/* harmony import */ var _admin_customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/customerdetails/customerdetails.component */ "./src/app/admin/customerdetails/customerdetails.component.ts");













// import { AuthGuard } from './auth.guard'
var AppRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    // { path: 'aregisteration', component: AregistrationComponent },
    {
        path: 'adminmaster', component: _admin_amaster_amaster_component__WEBPACK_IMPORTED_MODULE_2__["AmasterComponent"], data: { title: 'Admin Views' },
        children: [
            { path: '', redirectTo: 'awelcome', pathMatch: 'full' },
            { path: 'awelcome', component: _admin_awelcome_awelcome_component__WEBPACK_IMPORTED_MODULE_4__["AwelcomeComponent"] },
            { path: 'aregisteration', component: _admin_aregistration_aregistration_component__WEBPACK_IMPORTED_MODULE_3__["AregistrationComponent"] },
            { path: 'Bankaccount', component: _admin_bankaccountdetail_bankaccountdetail_component__WEBPACK_IMPORTED_MODULE_10__["BankaccountdetailComponent"] },
            { path: 'CompanyDetail', component: _admin_companydetail_companydetail_component__WEBPACK_IMPORTED_MODULE_8__["CompanydetailComponent"] },
            { path: 'CompanyList', component: _admin_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__["CompanyListComponent"] },
            { path: 'CustomerList', component: _admin_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_11__["CustomerlistComponent"] },
            { path: 'Customerdetails', component: _admin_customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_12__["CustomerdetailsComponent"] },
        ]
    },
    {
        path: 'umaster', component: _user_umaster_umaster_component__WEBPACK_IMPORTED_MODULE_5__["UmasterComponent"], data: { title: 'User Views' },
        children: [
            { path: 'uwelcome', component: _user_uwelcome_uwelcome_component__WEBPACK_IMPORTED_MODULE_6__["UwelcomeComponent"] },
            { path: 'uregistration', component: _user_uregistration_uregistration_component__WEBPACK_IMPORTED_MODULE_7__["UregistrationComponent"] },
            { path: '**', redirectTo: 'uwelcome' }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
var ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directive_email_format_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/email-format-validator.directive */ "./src/app/directive/email-format-validator.directive.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_amaster_amaster_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/amaster/amaster.component */ "./src/app/admin/amaster/amaster.component.ts");
/* harmony import */ var _admin_aregistration_aregistration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/aregistration/aregistration.component */ "./src/app/admin/aregistration/aregistration.component.ts");
/* harmony import */ var _admin_awelcome_awelcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/awelcome/awelcome.component */ "./src/app/admin/awelcome/awelcome.component.ts");
/* harmony import */ var _user_umaster_umaster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/umaster/umaster.component */ "./src/app/user/umaster/umaster.component.ts");
/* harmony import */ var _user_uwelcome_uwelcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/uwelcome/uwelcome.component */ "./src/app/user/uwelcome/uwelcome.component.ts");
/* harmony import */ var _user_uregistration_uregistration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/uregistration/uregistration.component */ "./src/app/user/uregistration/uregistration.component.ts");
/* harmony import */ var _admin_dashboardmaster_dashboardmaster_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/dashboardmaster/dashboardmaster.component */ "./src/app/admin/dashboardmaster/dashboardmaster.component.ts");
/* harmony import */ var _admin_companydetail_companydetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/companydetail/companydetail.component */ "./src/app/admin/companydetail/companydetail.component.ts");
/* harmony import */ var _admin_bankaccountdetail_bankaccountdetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/bankaccountdetail/bankaccountdetail.component */ "./src/app/admin/bankaccountdetail/bankaccountdetail.component.ts");
/* harmony import */ var _admin_admindetail_admindetail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admindetail/admindetail.component */ "./src/app/admin/admindetail/admindetail.component.ts");
/* harmony import */ var _admin_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/company-list/company-list.component */ "./src/app/admin/company-list/company-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth.interceptor.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./common/show-errors/show-errors.component */ "./src/app/common/show-errors/show-errors.component.ts");
/* harmony import */ var _admin_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/customerlist/customerlist.component */ "./src/app/admin/customerlist/customerlist.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _admin_customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/customerdetails/customerdetails.component */ "./src/app/admin/customerdetails/customerdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// , canActivate: [AuthGuard]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _admin_amaster_amaster_component__WEBPACK_IMPORTED_MODULE_9__["AmasterComponent"],
                _admin_aregistration_aregistration_component__WEBPACK_IMPORTED_MODULE_10__["AregistrationComponent"],
                _admin_awelcome_awelcome_component__WEBPACK_IMPORTED_MODULE_11__["AwelcomeComponent"],
                _user_umaster_umaster_component__WEBPACK_IMPORTED_MODULE_12__["UmasterComponent"],
                _user_uwelcome_uwelcome_component__WEBPACK_IMPORTED_MODULE_13__["UwelcomeComponent"],
                _user_uregistration_uregistration_component__WEBPACK_IMPORTED_MODULE_14__["UregistrationComponent"],
                _admin_dashboardmaster_dashboardmaster_component__WEBPACK_IMPORTED_MODULE_15__["DashboardmasterComponent"],
                _admin_companydetail_companydetail_component__WEBPACK_IMPORTED_MODULE_16__["CompanydetailComponent"],
                _admin_bankaccountdetail_bankaccountdetail_component__WEBPACK_IMPORTED_MODULE_17__["BankaccountdetailComponent"],
                _admin_admindetail_admindetail_component__WEBPACK_IMPORTED_MODULE_18__["AdmindetailComponent"],
                _common_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_29__["ShowErrorsComponent"],
                _directive_email_format_validator_directive__WEBPACK_IMPORTED_MODULE_7__["EmailFormatValidatorDirective"],
                _admin_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_19__["CompanyListComponent"],
                _admin_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_30__["CustomerlistComponent"],
                _admin_customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_32__["CustomerdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["ROUTING"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([])
            ],
            providers: [
                _services_service_service__WEBPACK_IMPORTED_MODULE_24__["service"], _services_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"], _services_company_service__WEBPACK_IMPORTED_MODULE_27__["CompanyService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _services_common_service__WEBPACK_IMPORTED_MODULE_26__["CommonService"], _services_customer_service__WEBPACK_IMPORTED_MODULE_31__["CustomerService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        debugger;
        if (localStorage.getItem('userToken') != null) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/common/show-errors/show-errors.component.css":
/*!**************************************************************!*\
  !*** ./src/app/common/show-errors/show-errors.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/show-errors/show-errors.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/show-errors/show-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
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

var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'This field is required'; },
        'minlength': function (params) { return 'The min number of characters is ' + params.requiredLength; },
        'maxlength': function (params) { return 'The max allowed number of characters is ' + params.requiredLength; },
        'pattern': function (params) { return 'The required pattern is: ' + params.requiredPattern; },
        'emailFormat': function (params) { return params.message; }
        // 'years': (params) => params.message,
        // 'countryCity': (params) => params.message,
        // 'uniqueName': (params) => params.message,
        // 'telephoneNumbers': (params) => params.message,
        // 'telephoneNumber': (params) => params.message
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-errors',
            template: "\n    <ul *ngIf=\"shouldShowErrors()\">\n      <li class=\"text-danger\"  *ngFor=\"let error of listOfErrors()\">{{error}}</li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./show-errors.component.css */ "./src/app/common/show-errors/show-errors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());



/***/ }),

/***/ "./src/app/directive/email-format-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directive/email-format-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: EmailFormatValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormatValidatorDirective", function() { return EmailFormatValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailFormatValidatorDirective = /** @class */ (function () {
    function EmailFormatValidatorDirective() {
    }
    EmailFormatValidatorDirective_1 = EmailFormatValidatorDirective;
    EmailFormatValidatorDirective.prototype.validate = function (c) {
        var isValidEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(c.value);
        var message = {
            'emailFormat': {
                'message': 'The email format must be valid.'
            }
        };
        return isValidEmailFormat ? null : message;
    };
    EmailFormatValidatorDirective = EmailFormatValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appEmailFormatValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: EmailFormatValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], EmailFormatValidatorDirective);
    return EmailFormatValidatorDirective;
    var EmailFormatValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n  <div class=\"col-sm-8 col-sm-offset-2\">\r\n<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n  </div>\r\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      <a routerLink=\"/aregisteration\"  class=\"btn btn-link\">Register</a>\r\n\r\n      <!-- (click)=\"redirection()\" -->\r\n  </div>\r\n</form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // public toastr: ToastsManager, vcr: ViewContainerRef,
    route, router, _services, _UserService) {
        // this.toastr.setRootViewContainerRef(vcr);
        this.route = route;
        this.router = router;
        this._services = _services;
        this._UserService = _UserService;
        this.isLoginError = false;
        //private toasterService: ToasterService;
        this.model = {
            username: '',
            password: ''
        };
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.redirection = function () {
        this.router.navigate(['umaster/uregistration']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._services.userAuthentication(this.model.username, this.model.password).subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            localStorage.setItem('userRoles', data.Role);
            _this._UserService.EmployeeDetail.LastLogin = data.LastLogin;
            _this._UserService.EmployeeDetail.Name = data.Name;
            _this._UserService.EmployeeDetail.Username = data.Username;
            _this._UserService.EmployeeDetail.Role = data.Role;
            _this._UserService.EmployeeDetail.StateId = data.StateId;
            _this.router.navigate(['adminmaster/awelcome']);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_2__["service"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    // apiMapper: object = 
    // { 
    //   StatusCode :Number,
    //   Messages:[],
    //   List:[],
    //   Obj:{}
    // };
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.GetAllStates = function () {
        return this.http.get("http://ranarocks.azurewebsites.net/" + "common/GetAllStates");
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(_http) {
        this._http = _http;
    }
    CompanyService.prototype.GetCompanyProfile = function () {
        return this._http.get("http://ranarocks.azurewebsites.net/" + "company/GetCompanyProfile");
    };
    CompanyService.prototype.CreateCompany = function (data) {
        return this._http.post("http://ranarocks.azurewebsites.net/" + 'company/create', data);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(_http) {
        this._http = _http;
    }
    CustomerService.prototype.GetCustomerList = function (model) {
        // let Params = new HttpParams();
        // Params = Params.append('type',type);
        // Params = Params.append('id',id);
        return this._http.post("http://ranarocks.azurewebsites.net/" + "Customer/GetCustomerList", model);
    };
    CustomerService.prototype.CreateCustomer = function (data) {
        return this._http.post("http://ranarocks.azurewebsites.net/" + 'Customer/CustomerOperation', data);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var service = /** @class */ (function () {
    function service(http) {
        this.http = http;
        this.model = {
            username: '',
            password: ''
        };
    }
    service.prototype.userAuthentication = function (userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post("http://ranarocks.azurewebsites.net/" + 'token', data, { headers: reqHeader });
    };
    service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], service);
    return service;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
        this.EmployeeDetail = {};
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.EmployeeDetail;
    };
    UserService.prototype.UserLoggedOut = function () {
        this.isUserLoggedIn = false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/umaster/umaster.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/umaster/umaster.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/umaster/umaster.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/umaster/umaster.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  umaster works!\r\n  <router-outlet></router-outlet>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/umaster/umaster.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/umaster/umaster.component.ts ***!
  \***************************************************/
/*! exports provided: UmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmasterComponent", function() { return UmasterComponent; });
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

var UmasterComponent = /** @class */ (function () {
    function UmasterComponent() {
    }
    UmasterComponent.prototype.ngOnInit = function () {
    };
    UmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-umaster',
            template: __webpack_require__(/*! ./umaster.component.html */ "./src/app/user/umaster/umaster.component.html"),
            styles: [__webpack_require__(/*! ./umaster.component.css */ "./src/app/user/umaster/umaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmasterComponent);
    return UmasterComponent;
}());



/***/ }),

/***/ "./src/app/user/uregistration/uregistration.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/uregistration/uregistration.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/uregistration/uregistration.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/uregistration/uregistration.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  uregistration works!\r\n \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/uregistration/uregistration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/uregistration/uregistration.component.ts ***!
  \***************************************************************/
/*! exports provided: UregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UregistrationComponent", function() { return UregistrationComponent; });
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

var UregistrationComponent = /** @class */ (function () {
    function UregistrationComponent() {
    }
    UregistrationComponent.prototype.ngOnInit = function () {
    };
    UregistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uregistration',
            template: __webpack_require__(/*! ./uregistration.component.html */ "./src/app/user/uregistration/uregistration.component.html"),
            styles: [__webpack_require__(/*! ./uregistration.component.css */ "./src/app/user/uregistration/uregistration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UregistrationComponent);
    return UregistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/uwelcome/uwelcome.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/uwelcome/uwelcome.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/uwelcome/uwelcome.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/uwelcome/uwelcome.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  uwelcome works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/uwelcome/uwelcome.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/uwelcome/uwelcome.component.ts ***!
  \*****************************************************/
/*! exports provided: UwelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UwelcomeComponent", function() { return UwelcomeComponent; });
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

var UwelcomeComponent = /** @class */ (function () {
    function UwelcomeComponent() {
    }
    UwelcomeComponent.prototype.ngOnInit = function () {
    };
    UwelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uwelcome',
            template: __webpack_require__(/*! ./uwelcome.component.html */ "./src/app/user/uwelcome/uwelcome.component.html"),
            styles: [__webpack_require__(/*! ./uwelcome.component.css */ "./src/app/user/uwelcome/uwelcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UwelcomeComponent);
    return UwelcomeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://ranarocks.azurewebsites.net/'
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular2\jatin\SBMS_UX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map