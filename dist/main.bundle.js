webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n    /* Shared */\r\n    .loginBtn {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    /* width: 13em;  - apply for fixed size */\r\n    margin: 0.2em;\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    font-size: 16px;\r\n    color: #FFF;\r\n    }\r\n    .loginBtn:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n    }\r\n    .loginBtn:focus {\r\n    outline: none;\r\n    }\r\n    .loginBtn:active {\r\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n    }\r\n    .login{\r\n        margin: auto;\r\n    }\r\n    \r\n    \r\n    \r\n    /* Google */\r\n    .loginBtn--google {\r\n    /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n    background: #DD4B39;\r\n    }\r\n    .loginBtn--google:before {\r\n    border-right: #BB3F30 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n    }\r\n    .loginBtn--google:hover,\r\n    .loginBtn--google:focus {\r\n    background: #E74B37;\r\n    }\r\n\r\n\r\n      \r\n      .loader {\r\n        position: relative;\r\n        margin: 0 auto;\r\n        width: 50px;\r\n      }\r\n      .loader:before {\r\n        content: '';\r\n        display: block;\r\n        padding-top: 100%;\r\n      }\r\n      \r\n      .circular {\r\n        -webkit-animation: rotate 2s linear infinite;\r\n                animation: rotate 2s linear infinite;\r\n        height: 100%;\r\n        -webkit-transform-origin: center center;\r\n                transform-origin: center center;\r\n        width: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n      }\r\n      \r\n      .path {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n                animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n        stroke-linecap: round;\r\n      }\r\n      \r\n      @-webkit-keyframes rotate {\r\n        100% {\r\n          -webkit-transform: rotate(360deg);\r\n                  transform: rotate(360deg);\r\n        }\r\n      }\r\n      \r\n      @keyframes rotate {\r\n        100% {\r\n          -webkit-transform: rotate(360deg);\r\n                  transform: rotate(360deg);\r\n        }\r\n      }\r\n      @-webkit-keyframes dash {\r\n        0% {\r\n          stroke-dasharray: 1, 200;\r\n          stroke-dashoffset: 0;\r\n        }\r\n        50% {\r\n          stroke-dasharray: 89, 200;\r\n          stroke-dashoffset: -35px;\r\n        }\r\n        100% {\r\n          stroke-dasharray: 89, 200;\r\n          stroke-dashoffset: -124px;\r\n        }\r\n      }\r\n      @keyframes dash {\r\n        0% {\r\n          stroke-dasharray: 1, 200;\r\n          stroke-dashoffset: 0;\r\n        }\r\n        50% {\r\n          stroke-dasharray: 89, 200;\r\n          stroke-dashoffset: -35px;\r\n        }\r\n        100% {\r\n          stroke-dasharray: 89, 200;\r\n          stroke-dashoffset: -124px;\r\n        }\r\n      }\r\n      @-webkit-keyframes color {\r\n        100%, 0% {\r\n          stroke: #d62d20;\r\n        }\r\n        40% {\r\n          stroke: #0057e7;\r\n        }\r\n        66% {\r\n          stroke: #008744;\r\n        }\r\n        80%, 90% {\r\n          stroke: #ffa700;\r\n        }\r\n      }\r\n      @keyframes color {\r\n        100%, 0% {\r\n          stroke: #d62d20;\r\n        }\r\n        40% {\r\n          stroke: #0057e7;\r\n        }\r\n        66% {\r\n          stroke: #008744;\r\n        }\r\n        80%, 90% {\r\n          stroke: #ffa700;\r\n        }\r\n      }\r\n      ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav *ngIf=\"(currentUser | async)?.uid !=null\" class=\"navbar  fixed-top navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Invoice Issuer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-pills mr-auto\" role=\"tablist\">\n      <li class=\"nav-item dropdown\" style=\"cursor:pointer\">\n        <a class=\"nav-link dropdown-toggle active\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n     Invoices\n   </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" id=\"issue-invoice-tab\" href=\"#issue-invoice\" role=\"tab\" data-toggle=\"tab\">Issue Invoice</a>\n          <a class=\"dropdown-item\" id=\"invoice-unpaid-management-tab\" href=\"#invoice-unpaid-management\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Unpaid Invoices</a>\n          <a class=\"dropdown-item\" id=\"invoice-paid-management-tab\" href=\"#invoice-paid-management\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Paid Invoices</a>\n  \n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#clients\" role=\"tab\">Clients</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#books\" role=\"tab\">Items</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#paymentInfo-management\" role=\"tab\">Payment Info</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#setting-management\" role=\"tab\">Settings</a>\n      </li>\n    </ul>\n\n    <!--Login & Logout-->\n    <div class=\"ml-auto\" *ngIf=\"currentUser!=null\">\n      <span class=\"navbar-text\">\n        {{ (currentUser | async)?.displayName }} \n      </span>\n      <img style=\"width: 40px;height:40px;\" [src]=\"(currentUser | async)?.photoURL\" alt=\"...\" class=\"rounded-circle\">\n    </div>\n\n\n    <div class=\"\">\n      <a class=\" nav-link\" (click)=\"logout()\" style=\"cursor:pointer\">Logout</a>\n\n    </div>\n\n  </div>\n\n\n</nav>\n\n\n\n\n\n\n<!--Alert-->\n<div class=\"alert fixed-top \" role=\"alert\" style=\"display:none;top:57px;z-index:1029;\">\n  <strong>Successful!</strong> Saved Successfully!\n</div>\n\n<!-- Tab panes -->\n<div *ngIf=\"(currentUser | async)!=null\" class=\"tab-content container-fluid\">\n\n  <!--Books-->\n  <div class=\"tab-pane fade\" id=\"books\" role=\"tabpanel\">\n    <book-management *ngIf=\"books!=null\" [books]=\"books\"></book-management>\n  </div>\n\n\n  <!--Clients-->\n  <div class=\"tab-pane fade \" id=\"clients\" role=\"tabpanel\">\n    <client-management *ngIf=\"clients!=null\" [clients]=\"clients\"></client-management>\n  </div>\n\n  <!--Unpaid - Invoice Management-->\n  <div class=\"tab-pane fade\" id=\"invoice-unpaid-management\" role=\"tabpanel\">\n    <invoice-management *ngIf=\"invoices!=null\"  [isPaid]=false  [invoices]=\"invoices\" [settings]=\"settings\"></invoice-management>\n  </div>\n\n    <!--Paid - Invoice Management-->\n    <div class=\"tab-pane fade\" id=\"invoice-paid-management\" role=\"tabpanel\">\n      <invoice-management *ngIf=\"invoices!=null\" [isPaid]=true [invoices]=\"invoices\" [settings]=\"settings\"></invoice-management>\n    </div>\n\n  <!--Issue Invoice-->\n  <div class=\"tab-pane fade active show\" id=\"issue-invoice\" role=\"tabpanel\">\n    <issue-invoice *ngIf=\"clients!=null&&books!=null&&paymentinfo!=null&&invoices!=null\" [invoices]=\"invoices\" [clients]=\"clients\"\n      [paymentinfo]=\"paymentinfo\" [books]=\"books\" [settings]=\"settings\"></issue-invoice>\n  </div>\n\n  <!--Payment Info Management-->\n  <div class=\"tab-pane fade\" id=\"paymentInfo-management\" role=\"tabpanel\">\n    <payment-info-management [paymentinfo]=\"paymentinfo\"></payment-info-management>\n  </div>\n\n  <!--Settings Management-->\n  <div class=\"tab-pane fade\" id=\"setting-management\" role=\"tabpanel\">\n    <setting-management [settings]=\"settings\"></setting-management>\n  </div>\n\n</div>\n\n<!-- Login -->\n<div *ngIf=\"isLoginRequired\" class=\"center\">\n  <div class=\"login\">\n    <h3>Sign in:</h3>\n\n    <div class=\"quickstart-user-details-container\">\n      <button id=\"quickstart-button\" class=\"loginBtn loginBtn--google\" (click)=\"login()\">Sign-in with Google</button>\n    </div>\n  </div>\n</div>\n\n<!-- Loader -->\n<div *ngIf=\"isLoading\" class=\"center\">\n  <div class=\"loader\">\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n    </svg>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(afAuth, afDB) {
        var _this = this;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.isLoading = true;
        this.currentUser = afAuth.authState;
        afAuth.authState.subscribe(function (snapshot) {
            if (snapshot) {
                _this.initData(snapshot.uid);
                _this.isLoading = false;
                _this.isLoginRequired = false;
            }
            else {
                _this.isLoading = false;
                _this.isLoginRequired = true;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AppComponent.prototype.initData = function (uid) {
        this.books = this.afDB.list('/' + uid + '/books');
        this.clients = this.afDB.list('/' + uid + '/clients');
        this.invoices = this.afDB.list('/' + uid + '/invoices');
        this.paidInvoices = this.afDB.list('/' + uid + '/invoices/paid');
        this.paymentinfo = this.afDB.object('/' + uid + '/paymentInfo');
        this.settings = this.afDB.object('/' + uid + '/settings');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_BookFilter__ = __webpack_require__("../../../../../src/services/BookFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ClientFilter__ = __webpack_require__("../../../../../src/services/ClientFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_InvoiceFilter__ = __webpack_require__("../../../../../src/services/InvoiceFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_CurrencyFilter__ = __webpack_require__("../../../../../src/services/CurrencyFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_OrderBy__ = __webpack_require__("../../../../../src/services/OrderBy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_detail_invoice_detail_component__ = __webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__book_management_book_management_component__ = __webpack_require__("../../../../../src/app/book-management/book-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__client_management_client_management_component__ = __webpack_require__("../../../../../src/app/client-management/client-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__issue_invoice_issue_invoice_component__ = __webpack_require__("../../../../../src/app/issue-invoice/issue-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__invoice_management_invoice_management_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__payment_info_management_payment_info_management_component__ = __webpack_require__("../../../../../src/app/payment-info-management/payment-info-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__setting_management_setting_management_component__ = __webpack_require__("../../../../../src/app/setting-management/setting-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23_ngx_cookie__["a" /* CookieModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__services_BookFilter__["a" /* BookFilter */],
            __WEBPACK_IMPORTED_MODULE_12__services_ClientFilter__["a" /* ClientFilter */],
            __WEBPACK_IMPORTED_MODULE_13__services_InvoiceFilter__["a" /* InvoiceFilter */],
            __WEBPACK_IMPORTED_MODULE_14__services_CurrencyFilter__["a" /* CurrencyFilter */],
            __WEBPACK_IMPORTED_MODULE_15__services_OrderBy__["a" /* OrderBy */],
            __WEBPACK_IMPORTED_MODULE_16__invoice_detail_invoice_detail_component__["a" /* InvoiceDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__book_management_book_management_component__["a" /* BookManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_18__client_management_client_management_component__["a" /* ClientManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_19__issue_invoice_issue_invoice_component__["a" /* IssueInvoiceComponent */],
            __WEBPACK_IMPORTED_MODULE_20__invoice_management_invoice_management_component__["a" /* InvoiceManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_21__payment_info_management_payment_info_management_component__["a" /* PaymentInfoManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__setting_management_setting_management_component__["a" /* SettingsManagementComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_23_ngx_cookie__["b" /* CookieService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book-management/book-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-management/book-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <h5>Search:</h5>\r\n  <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by item description\" [(ngModel)]=\"filterBookKeyWord\">\r\n</div>\r\n<table class=\"table table-hover\">\r\n  <thead class=\"thead-light text-white\">\r\n    <tr class=\" bg-secondary\">\r\n      <th>#</th>\r\n      <th>Item Description</th>\r\n      <th style=\"width:150px\">Price (GST Excl.)</th>\r\n      <th style=\"width:120px\">Admin</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td><input type=\"text\" class=\"form-control\" #newBookName /></td>\r\n      <td><input type=\"text\" class=\"form-control\" #newBookPrice /></td>\r\n      <td><button class=\"btn btn-outline-primary btn-sm\" (click)=\"addBook(newBookName.value,newBookPrice.value)\"><i class=\"material-icons\">add_box</i></button></td>\r\n    </tr>\r\n    <tr *ngFor=\"let book of books | async | bookFilter:filterBookKeyWord ; let i = index;\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td><input type=\"text\" class=\"form-control\" #updateBookName [value]=\"book.name\" /></td>\r\n      <td><input type=\"text\" class=\"form-control\" #updateBookPrice [value]=\"book.price\" /></td>\r\n      <td>\r\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"updateBook(book.$key, updateBookName.value,updateBookPrice.value)\"><i class=\"material-icons\">edit</i></button>\r\n        <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteBook(book.$key)\"><i class=\"material-icons\">delete</i></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/book-management/book-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookManagementComponent = (function () {
    function BookManagementComponent() {
    }
    BookManagementComponent.prototype.ngOnInit = function () {
    };
    BookManagementComponent.prototype.addBook = function (newName, newPrice) {
        var promise = this.books.push({ name: newName, price: newPrice });
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    BookManagementComponent.prototype.updateBook = function (key, newName, newPrice) {
        var promise = this.books.update(key, { name: newName, price: newPrice });
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    BookManagementComponent.prototype.deleteBook = function (key) {
        var promise = this.books.remove(key);
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    return BookManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
], BookManagementComponent.prototype, "books", void 0);
BookManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'book-management',
        template: __webpack_require__("../../../../../src/app/book-management/book-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book-management/book-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookManagementComponent);

var _a;
//# sourceMappingURL=book-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/client-management/client-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client-management/client-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n      <h5>Search:</h5>\r\n      <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by client name\" [(ngModel)]=\"filterClientKeyWord\">\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n      <thead class=\"thead-light text-white\">\r\n        <tr class=\" bg-secondary\">\r\n          <th>#</th>\r\n          <th>Name</th>\r\n          <th>Email</th>\r\n          <th>Address</th>\r\n          <th>City</th>\r\n          <th>Post Code</th>\r\n          <th>Country</th>\r\n          <th style=\"width:120px\">Admin</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope=\"row\"></th>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientName /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientEmail /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientAddress /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientCity /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientPostCode /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #newClientCountry /></td>\r\n          <td><button class=\"btn btn-outline-primary  btn-sm\" (click)=\"addClient(\r\n            newClientName.value,\r\n            newClientEmail.value,\r\n            newClientAddress.value,\r\n            newClientCity.value,\r\n            newClientPostCode.value,\r\n            newClientCountry.value\r\n          )\"><i class=\"material-icons\">add_box</i></button></td>\r\n        </tr>\r\n        <tr *ngFor=\"let client of clients | async | clientFilter:filterClientKeyWord ; let i = index;\">\r\n          <th scope=\"row\">{{i+1}}</th>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientName [value]=\"client.name\" /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientEmail [value]=\"client.email\" /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientAddress [value]=\"client.address\" /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientCity [value]=\"client.city\" /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientPostCode [value]=\"client.postcode\" /></td>\r\n          <td><input type=\"text\" class=\"form-control\" #updateClientCountry [value]=\"client.country\" /></td>\r\n          <td> <button class=\"btn btn-outline-primary  btn-sm\" (click)=\"updateClient(\r\n            client.$key,\r\n             updateClientName.value,\r\n             updateClientEmail.value,\r\n             updateClientAddress.value,\r\n             updateClientCity.value,\r\n             updateClientPostCode.value,\r\n             updateClientCountry.value\r\n             )\"><i class=\"material-icons\">edit</i></button>\r\n            <button class=\"btn btn-outline-danger  btn-sm\" (click)=\"deleteClient(client.$key)\"><i class=\"material-icons\">delete</i></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>"

/***/ }),

/***/ "../../../../../src/app/client-management/client-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientManagementComponent = (function () {
    function ClientManagementComponent() {
    }
    ClientManagementComponent.prototype.ngOnInit = function () {
    };
    ClientManagementComponent.prototype.addClient = function (name, email, address, city, postcode, country) {
        var promise = this.clients.push({
            name: name,
            email: email,
            address: address,
            city: city,
            postcode: postcode,
            country: country
        });
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    ClientManagementComponent.prototype.updateClient = function (key, name, email, address, city, postcode, country) {
        var promise = this.clients.update(key, {
            name: name,
            email: email,
            address: address,
            city: city,
            postcode: postcode,
            country: country
        });
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    ClientManagementComponent.prototype.deleteClient = function (key) {
        var promise = this.clients.remove(key);
        __WEBPACK_IMPORTED_MODULE_2__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    return ClientManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
], ClientManagementComponent.prototype, "clients", void 0);
ClientManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'client-management',
        template: __webpack_require__("../../../../../src/app/client-management/client-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/client-management/client-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClientManagementComponent);

var _a;
//# sourceMappingURL=client-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.form-control:disabled {\r\n    cursor: text;\r\n    border: 0;\r\n    background-color: unset;\r\n    padding:0;\r\n    line-height: 1rem;\r\n}\r\n\r\n.btn.disabled, .btn:disabled {\r\n    display: none;\r\n    }\r\n\r\ndiv{\r\n    line-height:1.2;\r\n}\r\n\r\ntable{\r\n     border-top:1px solid black;\r\n     border-bottom:1px solid black;\r\n}\r\n\r\n.table thead th {\r\n    border-bottom: 1px solid black;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table tbody td {\r\n    border-bottom: 0px solid black;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table thead td {\r\n    border-bottom: 1px solid black;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table td, .table th {\r\n    border-top: 0px solid black; \r\n    vertical-align: middle;\r\n}\r\n\r\n.border{\r\n    border:1px solid black !important;\r\n    margin-bottom:1rem;   \r\n}\r\n\r\n.p-4 {\r\n    padding: 1.3rem !important;          \r\n    padding-left: 0.5rem !important; \r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page \">\r\n  <!--Company-->\r\n  <div class=\"d-flex justify-content-start align-items-end\">\r\n    <div class=\"p-4\">\r\n      <div>{{invoice?.paymentInfo?.name}}</div>\r\n      <div>{{invoice?.paymentInfo?.address}}</div>\r\n      <div>{{invoice?.paymentInfo?.city}} {{invoice?.paymentInfo?.postcode}}</div>\r\n      <div>{{invoice?.paymentInfo?.country}}</div>\r\n    </div>\r\n    <div class=\"p-4 ml-auto\">\r\n      <div>{{invoice?.paymentInfo?.contact}}</div>\r\n      <div>{{invoice?.paymentInfo?.email}}</div>\r\n    </div>\r\n    <div class=\"p-4 ml-auto\">\r\n      <h1 class=\"text-right\">Tax Invoice</h1>\r\n      <div class=\"text-right\">Invoice#: {{invoice?.invoiceNumber}}</div>\r\n      <div class=\"text-right\">GST#: {{invoice?.paymentInfo?.gstNumber}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <!--Deliver to-->\r\n  <div class=\"d-flex justify-content-start  align-items-center \">\r\n    <div class=\"p-4\">\r\n      <h5>Bill To:</h5>\r\n      <div>{{invoice?.client?.name}}</div>\r\n      <div>{{invoice?.client?.address}}</div>\r\n      <div>{{invoice?.client?.city}} {{invoice?.client?.postcode}}</div>\r\n      <div>{{invoice?.client?.country}}</div>\r\n    </div>\r\n    <div class=\"p-4 ml-auto\">\r\n      <div class=\"text-right\">Order #: {{invoice?.orderNumber}}</div>\r\n      <div class=\"text-right\">Date: {{invoice?.date | date: 'dd MMM yyyy'}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Order Detail-->\r\n  <table class=\"table table-hover  \" >\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th class=\"w-50\">Item</th>\r\n        <th class=\"text-center\">Price</th>\r\n        <th class=\"text-center\">Qty</th>\r\n        <th class=\"text-center\">Disc.(%)</th>\r\n        <th class=\"text-center\">Total</th>\r\n        <th *ngIf=\"isEditable\" class=\"text-center\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let book of invoice?.books \">\r\n        <td>{{book.name}}</td>\r\n        <td class=\"text-center\">{{book.price | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n        <td><input type=\"number\" [disabled]=\"!isEditable\" class=\"form-control text-center\" style=\"    width: 60px !important;\"\r\n            #updateBookQuantity [value]=\"book.quantity\" (change)=\"quantityChanged(book,updateBookQuantity.value)\" /></td>\r\n        <td><input type=\"text\" [disabled]=\"!isEditable\" class=\"form-control text-center\" style=\"    width: 60px !important;\"\r\n            #updateBookDiscount [value]=\"book.discount  |  number : '1.2-2'\" (change)=\"discountChanged(book,updateBookDiscount.value)\"\r\n          /></td>\r\n        <td class=\"text-center\">{{book.total | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n\r\n        <td *ngIf=\"isEditable\">\r\n          <button class=\"btn btn-danger btn-sm\" [disabled]=\"!isEditable\" (click)=\"deleteBookInInvoice(book)\"><i _ngcontent-c1=\"\" class=\"material-icons\">delete</i></button></td>\r\n      </tr>\r\n\r\n\r\n\r\n    </tbody>\r\n  </table>\r\n  <!--Order Total-->\r\n  <table class=\"table table-sm border-top-0\" >\r\n    <tbody>\r\n      <tr>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td class=\"col text-right \">Sub Total: </td>\r\n        <td>{{invoice?.subTotal | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n        <td *ngIf=\"isEditable\"></td>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td class=\"col text-right \">Postage: </td>\r\n        <td>{{invoice?.postage | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n        <td *ngIf=\"isEditable\"></td>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td class=\"col text-right \">GST: </td>\r\n        <td>{{invoice?.gst | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n        <td *ngIf=\"isEditable\"></td>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td class=\"col font-weight-bold text-right \">Total: </td>\r\n        <td class=\"font-weight-bold\">{{invoice?.total | currency:invoice.currencyCode:true:'1.2-2'}}</td>\r\n        <td *ngIf=\"isEditable\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n\r\n  <div class=\"border d-print-block\" >\r\n    <h6 class=\"text-center\">PLEASE DETACH AND RETURN WITH YOUR REMITTANCE TO</h6>\r\n\r\n    <div class=\"d-flex justify-content-start \">\r\n      <div class=\"p-4\" style=\"padding-top:1rem!important;padding-bottom: 1rem!important\">\r\n        <div>{{invoice?.paymentInfo?.name}}</div>\r\n        <div>{{invoice?.paymentInfo?.address}}</div>\r\n        <div>{{invoice?.paymentInfo?.city}} {{invoice?.paymentInfo?.postcode}}</div>\r\n        <div>{{invoice?.paymentInfo?.country}}</div>\r\n      </div>\r\n\r\n      <div class=\"p-4 ml-auto\" style=\"padding-top:1rem!important;padding-bottom: 1rem!important\">\r\n        <div>Customer: {{invoice?.client?.name}}</div>\r\n        <div>Invoice No. <strong> {{invoice?.invoiceNumber}}</strong></div>\r\n        <div>Total:<strong> {{invoice?.total | currency:invoice.currencyCode:true:'1.2-2'}}</strong></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex flex-column\">\r\n      <div class=\"p-4 \" style=\"padding-top:0rem!important;padding-bottom: 0rem!important\">Direct Credit: Please quote the invoice number in the Code field of your Direct Credit.</div>\r\n      <div class=\"p-4 \" style=\"padding-top:0rem!important;padding-bottom:0.5rem!important\">Account No. <strong>{{invoice?.paymentInfo?.accountNumber}}</strong> ; Account Name: <strong>{{invoice?.paymentInfo?.accountName}}</strong></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Page break -->\r\n<div style=\"page-break-after:always !important\"><p></p></div>\r\n\r\n<!--Parcel Slip-->\r\n<div class=\"d-plex border d-print-block\">\r\n  <div class=\"p-4\">\r\n    <h6></h6>\r\n    <h3>To:</h3>\r\n    <h4>{{invoice?.client?.name}}</h4>\r\n    <h4>{{invoice?.client?.address}}</h4>\r\n    <h4>{{invoice?.client?.city}} {{invoice?.client?.postcode}}</h4>\r\n    <h4>{{invoice?.client?.country}}</h4>\r\n    <p></p>\r\n    <div>Sender: {{invoice?.paymentInfo?.name}},{{invoice?.paymentInfo?.address}},{{invoice?.paymentInfo?.city}} {{invoice?.paymentInfo?.postcode}},\r\n      {{invoice?.paymentInfo?.country}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Parcel Slip-->\r\n<div class=\"d-plex border d-print-block\">\r\n  <div class=\"p-4\">\r\n    <h6></h6>\r\n    <h3>To:</h3>\r\n    <h4>{{invoice?.client?.name}}</h4>\r\n    <h4>{{invoice?.client?.address}}</h4>\r\n    <h4>{{invoice?.client?.city}} {{invoice?.client?.postcode}}</h4>\r\n    <h4>{{invoice?.client?.country}}</h4>\r\n    <p></p>\r\n    <div>Sender: {{invoice?.paymentInfo?.name}},{{invoice?.paymentInfo?.address}},{{invoice?.paymentInfo?.city}} {{invoice?.paymentInfo?.postcode}},\r\n      {{invoice?.paymentInfo?.country}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_invoice__ = __webpack_require__("../../../../../src/models/invoice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceDetailComponent = (function () {
    function InvoiceDetailComponent() {
    }
    InvoiceDetailComponent.prototype.ngOnInit = function () {
    };
    InvoiceDetailComponent.prototype.quantityChanged = function (book, updateBookQuantity) {
        if (updateBookQuantity <= 0) {
            this.invoice.deleteBook(book);
        }
        this.invoice.updateBook(book, updateBookQuantity, null);
    };
    InvoiceDetailComponent.prototype.discountChanged = function (book, updateBookDiscount) {
        this.invoice.updateBook(book, null, updateBookDiscount);
    };
    InvoiceDetailComponent.prototype.updateBookInInvoice = function (book, updateBookQuantity, updateBookDiscount) {
        this.invoice.updateBook(book, updateBookQuantity, updateBookDiscount);
    };
    InvoiceDetailComponent.prototype.deleteBookInInvoice = function (book) {
        this.invoice.deleteBook(book);
    };
    return InvoiceDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_invoice__["a" /* Invoice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_invoice__["a" /* Invoice */]) === "function" && _a || Object)
], InvoiceDetailComponent.prototype, "invoice", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InvoiceDetailComponent.prototype, "isEditable", void 0);
InvoiceDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'invoice-detail',
        template: __webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InvoiceDetailComponent);

var _a;
//# sourceMappingURL=invoice-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media print{\r\n\r\n   .unprintable{\r\n        display: none;\r\n    }\r\n\r\n    \r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"invoice!=null\" class=\"row d-flex justify-content-end \">\r\n\r\n  <button *ngIf=\"!invoice.isPaid\" class=\"btn btn-primary m-2 unprintable\" (click)=\"pay(invoice.$key)\">Confirm Payment</button>\r\n  <button class=\"btn btn-danger m-2 unprintable\" (click)=\"delete(invoice.$key)\"><i class=\"material-icons\">delete</i></button>\r\n\r\n</div>\r\n<div class=\"row d-flex justify-content-center\">\r\n  <div class=\"col-md-4 unprintable\">\r\n    <div>\r\n      <h5>Choose Invoice:</h5>\r\n\r\n\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle  form-control\" type=\"button\" id=\"dropdownInvoicesButton\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Choose Invoice:\r\n  </button>\r\n\r\n  <div class=\"dropdown-menu scrollable-menu form-control\" aria-labelledby=\"dropdownInvoicesButton\">\r\n    <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by invoice# or client name\" [(ngModel)]=\"filterInvoiceKeyWord\">\r\n  <a  *ngFor=\"let invoice of filteredInvoices | invoiceFilter:filterInvoiceKeyWord | orderBy:order:ascending\" class=\"dropdown-item\" (click)=\"invoiceSeleted(invoice)\">{{invoice.invoiceNumber}} - {{invoice.client.name}}</a>\r\n  </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"invoice!=null\">\r\n      <h5>Print:</h5>\r\n      <div class=\"d-flex flex-column\">\r\n        <button class=\"btn btn-primary w-100\" (click)=\"print()\">Print</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-8\" *ngIf=\"invoice!=null\">\r\n    <invoice-detail [invoice]=\"invoice \"></invoice-detail>\r\n    <div>\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_invoice__ = __webpack_require__("../../../../../src/models/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceManagementComponent = (function () {
    function InvoiceManagementComponent() {
        this.order = "invoiceNumber";
        this.ascending = false;
        this.filteredInvoices = new Array();
    }
    InvoiceManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoices.subscribe(function (o) {
            _this.filteredInvoices = o.filter(function (j) { return j.isPaid == _this.isPaid; });
        });
    };
    InvoiceManagementComponent.prototype.invoiceSeleted = function (invoice) {
        var _this = this;
        this.invoice = invoice;
        if (this.invoice.currencyCode == null) {
            this.settings.subscribe(function (o) {
                _this.invoice.currencyCode = o.currencycode;
            });
        }
    };
    InvoiceManagementComponent.prototype.print = function () {
        window.print();
    };
    InvoiceManagementComponent.prototype.delete = function (key) {
        var _this = this;
        var promise = this.invoices.remove(key);
        __WEBPACK_IMPORTED_MODULE_3__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
        promise
            .then(function (_) {
            _this.invoice = null;
            // TODO: CHANGE COOKIE
        })
            .catch(function (err) { return console.log(err, 'Delete Failed!'); });
    };
    InvoiceManagementComponent.prototype.pay = function (key) {
        var _this = this;
        this.invoice.isPaid = true;
        var promise = this.invoices.update(key, this.invoice);
        __WEBPACK_IMPORTED_MODULE_3__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
        promise
            .then(function (_) {
            _this.invoice = null;
            // TODO: CHANGE COOKIE
        })
            .catch(function (err) { return console.log(err, 'Delete Failed!'); });
    };
    return InvoiceManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_invoice__["a" /* Invoice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_invoice__["a" /* Invoice */]) === "function" && _a || Object)
], InvoiceManagementComponent.prototype, "invoice", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _b || Object)
], InvoiceManagementComponent.prototype, "invoices", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */]) === "function" && _c || Object)
], InvoiceManagementComponent.prototype, "settings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InvoiceManagementComponent.prototype, "isPaid", void 0);
InvoiceManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'invoice-management',
        template: __webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InvoiceManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=invoice-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue-invoice/issue-invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media print{\r\n\r\n   .unprintable{\r\n        display: none;\r\n    }\r\n\r\n    \r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue-invoice/issue-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-center\">\r\n  <div *ngIf=\"!isInvoiceSaved\" class=\"col-md-4\">\r\n\r\n    <h5>Step 1.</h5>\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-secondary dropdown-toggle  form-control\" type=\"button\" id=\"dropdownClientsButton\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Choose Client:\r\n  </button>\r\n      <div class=\"dropdown-menu scrollable-menu form-control\" aria-labelledby=\"dropdownClientsButton\">\r\n        <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by client name\" [(ngModel)]=\"filterClientKeyWord\">\r\n        <a *ngFor=\"let client of clients | async | clientFilter:filterClientKeyWord \" class=\"dropdown-item\" (click)=\"clientSeleted(client)\">{{client.name}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"selectedClient==null\">\r\n      <h5>Step 2.</h5>\r\n\r\n      <div class=\"d-flex flex-column\">\r\n        <input class=\"form-control w-100\" type=\"text\" #orderNumber>\r\n        <button class=\"btn btn-secondary w-100\" (click)=\"updateOrderNumber(orderNumber.value)\">Confirm Order Number</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div [hidden]=\"!isOrderNumberConfirmed\">\r\n      <h5>Step 3.</h5>\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle  form-control\" type=\"button\" id=\"dropdownBooksButton\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Add Items:\r\n  </button>\r\n        <div class=\"dropdown-menu scrollable-menu form-control\" aria-labelledby=\"dropdownBooksButton\">\r\n          <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by item description\" [(ngModel)]=\"filterBookKeyWord\">\r\n          <a *ngFor=\"let book of books | async | bookFilter:filterBookKeyWord \" class=\"dropdown-item\" (click)=\"bookSeleted(book)\">{{book.name}}</a>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!--<div class=\"form-control\" [hidden]=\"addBookToInvoiceDivHidden\">\r\n        <div class=\"d-flex flex-row\">\r\n          <h6 class=\"w-75\">{{selectedBook?.name}}</h6>\r\n          <button class=\"btn btn-primary ml-auto w-25\" (click)=\"addBookToInvoice(selectedBook)\">Add</button>\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n\r\n\r\n    <div [hidden]=\"!booksNotEmpty\">\r\n      <h5>Step 4.</h5>\r\n\r\n      <div class=\"d-flex flex-column\">\r\n        <input class=\"form-control w-100\" type=\"text\" [value]=\"5.50\" #postage>\r\n        <button class=\"btn btn-secondary w-100\" (click)=\"updatePostage(postage.value)\">Confirm Postage</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div [hidden]=\"!isPostageConfirmed\">\r\n      <h5>Step 5.</h5>\r\n      <div class=\"d-flex flex-row\">\r\n\r\n        <button class=\"btn btn-primary w-100\" (click)=\"saveInvoice()\">Save Invoice</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n \r\n\r\n\r\n  <div  class=\"col-md-8\">\r\n    <div *ngIf=\"isInvoiceSaved\" class=\"row d-flex justify-content-center d-print-none\" >\r\n        \r\n          <button class=\"btn btn-primary btn-sm \" style=\"margin-left:20px;margin-right:20px;\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Print\" (click)=\"print()\"><i class=\"material-icons\" >print</i></button>\r\n          <button class=\"btn btn-primary btn-sm \" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Create new invoice\" (click)=\"create()\"><i class=\"material-icons\">add_circle</i></button>\r\n          <button class=\"btn btn-danger btn-sm ml-auto \" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" (click)=\"delete(invoice.$key)\"><i class=\"material-icons\">delete</i></button>\r\n    </div>\r\n    <invoice-detail [invoice]=\"invoice\" [isEditable]=\"!isInvoiceSaved\"></invoice-detail>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/issue-invoice/issue-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_invoice__ = __webpack_require__("../../../../../src/models/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IssueInvoiceComponent = (function () {
    function IssueInvoiceComponent(cookieService) {
        this.cookieService = cookieService;
    }
    IssueInvoiceComponent.prototype.ngOnInit = function () {
        this.Init();
    };
    IssueInvoiceComponent.prototype.Init = function () {
        var _this = this;
        this.isInvoiceSaved = false;
        this.booksNotEmpty = false;
        this.isOrderNumberConfirmed = false;
        this.isPostageConfirmed = false;
        this.selectedClient = null;
        this.invoice = new __WEBPACK_IMPORTED_MODULE_2__models_invoice__["a" /* Invoice */](this.cookieService);
        this.paymentinfo.subscribe(function (snapshot) {
            _this.invoice.paymentInfo = snapshot;
        });
        if (this.invoice.currencyCode == undefined) {
            this.settingsSubscription = this.settings.subscribe(function (snapshot) {
                _this.invoice.currencyCode = snapshot.currencycode;
            });
        }
        ;
    };
    IssueInvoiceComponent.prototype.clientSeleted = function (client) {
        this.selectedClient = client;
        this.invoice.client = client;
    };
    IssueInvoiceComponent.prototype.bookSeleted = function (book) {
        this.addBookToInvoice(book);
    };
    IssueInvoiceComponent.prototype.addBookToInvoice = function (selectedBook) {
        this.booksNotEmpty = true;
        this.invoice.addBook(selectedBook);
    };
    IssueInvoiceComponent.prototype.updatePostage = function (postage) {
        this.isPostageConfirmed = true;
        this.invoice.updatePostage(postage);
    };
    IssueInvoiceComponent.prototype.updateOrderNumber = function (orderNumber) {
        this.isOrderNumberConfirmed = true;
        this.invoice.orderNumber = orderNumber;
    };
    IssueInvoiceComponent.prototype.saveInvoice = function () {
        var _this = this;
        var promise = this.invoices.push(this.invoice);
        __WEBPACK_IMPORTED_MODULE_3__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
        promise
            .then(function (snapshot) {
            _this.isInvoiceSaved = true;
            _this.saveIdToCookies();
            _this.settingsSubscription.unsubscribe();
        })
            .catch(function (err) { return console.log(err, 'Save Failed!'); });
    };
    IssueInvoiceComponent.prototype.print = function () {
        window.print();
    };
    IssueInvoiceComponent.prototype.create = function () {
        this.Init();
    };
    IssueInvoiceComponent.prototype.delete = function (key) {
        var _this = this;
        var promise = this.invoices.remove(key);
        __WEBPACK_IMPORTED_MODULE_3__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
        promise
            .then(function (_) {
            _this.invoice = null;
            //this.deleteIdFromCookies();
            _this.create();
            // TODO: CHANGE COOKIE
        })
            .catch(function (err) { return console.log(err, 'Delete Failed!'); });
    };
    IssueInvoiceComponent.prototype.saveIdToCookies = function () {
        var dateToday = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-NZ').transform(new Date(), 'yyMMdd');
        var invoicesToday = this.cookieService.get(dateToday);
        if (invoicesToday == null) {
            this.cookieService.put(dateToday, this.invoice.invoiceNumber);
        }
        else {
            // split 
            var array = invoicesToday.split(',');
            array.push(this.invoice.invoiceNumber);
            this.cookieService.put(dateToday, array.toString());
        }
    };
    IssueInvoiceComponent.prototype.deleteIdFromCookies = function () {
        var dateToday = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-NZ').transform(new Date(), 'yyMMdd');
        var invoicesToday = this.cookieService.get(dateToday);
        if (invoicesToday == null) {
            return;
        }
        else {
            var array = invoicesToday.split(',');
            var index = array.indexOf(this.invoice.invoiceNumber);
            if (index !== -1) {
                array.splice(index, 1);
            }
            this.cookieService.put(dateToday, array.toString());
        }
    };
    return IssueInvoiceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
], IssueInvoiceComponent.prototype, "clients", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */]) === "function" && _b || Object)
], IssueInvoiceComponent.prototype, "paymentinfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _c || Object)
], IssueInvoiceComponent.prototype, "books", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _d || Object)
], IssueInvoiceComponent.prototype, "invoices", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["d" /* FirebaseObjectObservable */]) === "function" && _e || Object)
], IssueInvoiceComponent.prototype, "settings", void 0);
IssueInvoiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'issue-invoice',
        template: __webpack_require__("../../../../../src/app/issue-invoice/issue-invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue-invoice/issue-invoice.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _f || Object])
], IssueInvoiceComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=issue-invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/payment-info-management/payment-info-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment-info-management/payment-info-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"form-group col-md-12\">\r\n    <label>Name:</label>\r\n    <input type=\"text\" class=\"form-control\" #newName [value]=\"(paymentinfo | async )?.name\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Address:</label>\r\n    <input type=\"text\" class=\"form-control\" #newAddress [value]=\"(paymentinfo | async )?.address\">\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label>City:</label>\r\n    <input type=\"text\" class=\"form-control\" #newCity [value]=\"(paymentinfo | async )?.city\">\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label>Post Code:</label>\r\n    <input type=\"text\" class=\"form-control\" #newPostCode [value]=\"(paymentinfo | async )?.postcode\">\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label>Country:</label>\r\n    <input type=\"text\" class=\"form-control\" #newCountry [value]=\"(paymentinfo | async )?.country\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Contact:</label>\r\n    <input type=\"text\" class=\"form-control\" #newContact [value]=\"(paymentinfo | async )?.contact\">\r\n  </div>\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Email:</label>\r\n    <input type=\"text\" class=\"form-control\" #newEmail [value]=\"(paymentinfo | async )?.email\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"form-group col-md-4\">\r\n    <label>Account Name:</label>\r\n    <input type=\"text\" class=\"form-control\" #newAccountName [value]=\"(paymentinfo | async )?.accountName\">\r\n  </div>\r\n  <div class=\"form-group col-md-4\">\r\n    <label>GST Number:</label>\r\n    <input type=\"text\" class=\"form-control\" #newGSTNumber [value]=\"(paymentinfo | async )?.gstNumber\">\r\n  </div>\r\n  <div class=\"form-group col-md-4\">\r\n    <label>Account Number:</label>\r\n    <input type=\"text\" class=\"form-control\" #newAccountNumber [value]=\"(paymentinfo | async )?.accountNumber\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n\r\n\r\n\r\n  <button class=\"btn btn-primary\" (click)=\"updatePaymentInfo(\r\n    newName.value,\r\n    newAddress.value,\r\n    newCity.value,\r\n    newPostCode.value,\r\n    newCountry.value,\r\n    newContact.value,\r\n    newEmail.value,\r\n    newAccountName.value,\r\n    newGSTNumber.value,\r\n    newAccountNumber.value\r\n    )\">Update</button>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/payment-info-management/payment-info-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInfoManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentInfoManagementComponent = (function () {
    function PaymentInfoManagementComponent() {
    }
    PaymentInfoManagementComponent.prototype.ngOnInit = function () {
    };
    PaymentInfoManagementComponent.prototype.updatePaymentInfo = function (newName, newAddress, newCity, newPostCode, newCountry, newContact, newEmail, newAccountName, newGSTNumber, newAccountNumber) {
        var promise = this.paymentinfo.update({
            name: newName,
            address: newAddress,
            city: newCity,
            postcode: newPostCode,
            country: newCountry,
            contact: newContact,
            email: newEmail,
            accountName: newAccountName,
            gstNumber: newGSTNumber,
            accountNumber: newAccountNumber
        });
        __WEBPACK_IMPORTED_MODULE_1__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    return PaymentInfoManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["d" /* FirebaseObjectObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["d" /* FirebaseObjectObservable */]) === "function" && _a || Object)
], PaymentInfoManagementComponent.prototype, "paymentinfo", void 0);
PaymentInfoManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'payment-info-management',
        template: __webpack_require__("../../../../../src/app/payment-info-management/payment-info-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payment-info-management/payment-info-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaymentInfoManagementComponent);

var _a;
//# sourceMappingURL=payment-info-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/setting-management/setting-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-management/setting-management.component.html":
/***/ (function(module, exports) {

module.exports = "<label>Currency:</label>\r\n<div class=\"row\">\r\n    <div  class=\"form-group col-md-2\">\r\n        <input type=\"text\" class=\"form-control\" value={{currency}} disabled>\r\n    </div>\r\n   <div class=\"form-group col-md-4\"> \r\n     <div class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle  form-control\" type=\"button\" id=\"dropdownInvoicesButton\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Choose Currency:\r\n  </button>\r\n        <div class=\"dropdown-menu scrollable-menu form-control\" aria-labelledby=\"dropdownInvoicesButton\">\r\n          <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Search by currency code or country name\" [(ngModel)]=\"filterCurrencyKeyWord\">\r\n          <a *ngFor=\"let currencyCode of currencyCodes | currencyFilter:filterCurrencyKeyWord | orderBy:order:ascending\" class=\"dropdown-item\" (click)=\"currencySeleted(currencyCode)\">{{currencyCode.code}} - {{currencyCode.countryname}}</a>\r\n \r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n\r\n\r\n\r\n  <button class=\"btn btn-primary\" (click)=\"updateSettings()\">Update</button>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/setting-management/setting-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_methods__ = __webpack_require__("../../../../../src/shared/methods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsManagementComponent = (function () {
    function SettingsManagementComponent() {
        this.InitDict();
    }
    SettingsManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currency == null) {
            this.settings.subscribe(function (snapshot) {
                _this.currency = snapshot.currencycode;
            });
        }
        ;
    };
    SettingsManagementComponent.prototype.updateSettings = function () {
        var promise = this.settings.update({
            currencycode: this.currency,
        });
        __WEBPACK_IMPORTED_MODULE_1__shared_methods__["a" /* SharedMethods */].showFirebaseResult(promise);
    };
    SettingsManagementComponent.prototype.currencySeleted = function (currencyCode) {
        this.currency = currencyCode.code;
    };
    SettingsManagementComponent.prototype.InitDict = function () {
        this.currencyCodes = new Array();
        this.currencyCodes.push({ code: 'AED', countryname: 'United Arab Emirates Dirham' });
        this.currencyCodes.push({ code: 'AFN', countryname: 'Afghanistan Afghani' });
        this.currencyCodes.push({ code: 'ALL', countryname: 'Albania Lek' });
        this.currencyCodes.push({ code: 'AMD', countryname: 'Armenia Dram' });
        this.currencyCodes.push({ code: 'ANG', countryname: 'Netherlands Antilles Guilder' });
        this.currencyCodes.push({ code: 'AOA', countryname: 'Angola Kwanza' });
        this.currencyCodes.push({ code: 'ARS', countryname: 'Argentina Peso' });
        this.currencyCodes.push({ code: 'AUD', countryname: 'Australia Dollar' });
        this.currencyCodes.push({ code: 'AWG', countryname: 'Aruba Guilder' });
        this.currencyCodes.push({ code: 'AZN', countryname: 'Azerbaijan Manat' });
        this.currencyCodes.push({ code: 'BAM', countryname: 'Bosnia and Herzegovina Convertible Marka' });
        this.currencyCodes.push({ code: 'BBD', countryname: 'Barbados Dollar' });
        this.currencyCodes.push({ code: 'BDT', countryname: 'Bangladesh Taka' });
        this.currencyCodes.push({ code: 'BGN', countryname: 'Bulgaria Lev' });
        this.currencyCodes.push({ code: 'BHD', countryname: 'Bahrain Dinar' });
        this.currencyCodes.push({ code: 'BIF', countryname: 'Burundi Franc' });
        this.currencyCodes.push({ code: 'BMD', countryname: 'Bermuda Dollar' });
        this.currencyCodes.push({ code: 'BND', countryname: 'Brunei Darussalam Dollar' });
        this.currencyCodes.push({ code: 'BOB', countryname: 'Bolivia Bolíviano' });
        this.currencyCodes.push({ code: 'BRL', countryname: 'Brazil Real' });
        this.currencyCodes.push({ code: 'BSD', countryname: 'Bahamas Dollar' });
        this.currencyCodes.push({ code: 'BTN', countryname: 'Bhutan Ngultrum' });
        this.currencyCodes.push({ code: 'BWP', countryname: 'Botswana Pula' });
        this.currencyCodes.push({ code: 'BYN', countryname: 'Belarus Ruble' });
        this.currencyCodes.push({ code: 'BZD', countryname: 'Belize Dollar' });
        this.currencyCodes.push({ code: 'CAD', countryname: 'Canada Dollar' });
        this.currencyCodes.push({ code: 'CDF', countryname: 'Congo/Kinshasa Franc' });
        this.currencyCodes.push({ code: 'CHF', countryname: 'Switzerland Franc' });
        this.currencyCodes.push({ code: 'CLP', countryname: 'Chile Peso' });
        this.currencyCodes.push({ code: 'CNY', countryname: 'China Yuan Renminbi' });
        this.currencyCodes.push({ code: 'COP', countryname: 'Colombia Peso' });
        this.currencyCodes.push({ code: 'CRC', countryname: 'Costa Rica Colon' });
        this.currencyCodes.push({ code: 'CUC', countryname: 'Cuba Convertible Peso' });
        this.currencyCodes.push({ code: 'CUP', countryname: 'Cuba Peso' });
        this.currencyCodes.push({ code: 'CVE', countryname: 'Cape Verde Escudo' });
        this.currencyCodes.push({ code: 'CZK', countryname: 'Czech Republic Koruna' });
        this.currencyCodes.push({ code: 'DJF', countryname: 'Djibouti Franc' });
        this.currencyCodes.push({ code: 'DKK', countryname: 'Denmark Krone' });
        this.currencyCodes.push({ code: 'DOP', countryname: 'Dominican Republic Peso' });
        this.currencyCodes.push({ code: 'DZD', countryname: 'Algeria Dinar' });
        this.currencyCodes.push({ code: 'EGP', countryname: 'Egypt Pound' });
        this.currencyCodes.push({ code: 'ERN', countryname: 'Eritrea Nakfa' });
        this.currencyCodes.push({ code: 'ETB', countryname: 'Ethiopia Birr' });
        this.currencyCodes.push({ code: 'EUR', countryname: 'Euro Member Countries' });
        this.currencyCodes.push({ code: 'FJD', countryname: 'Fiji Dollar' });
        this.currencyCodes.push({ code: 'FKP', countryname: 'Falkland Islands (Malvinas) Pound' });
        this.currencyCodes.push({ code: 'GBP', countryname: 'United Kingdom Pound' });
        this.currencyCodes.push({ code: 'GEL', countryname: 'Georgia Lari' });
        this.currencyCodes.push({ code: 'GGP', countryname: 'Guernsey Pound' });
        this.currencyCodes.push({ code: 'GHS', countryname: 'Ghana Cedi' });
        this.currencyCodes.push({ code: 'GIP', countryname: 'Gibraltar Pound' });
        this.currencyCodes.push({ code: 'GMD', countryname: 'Gambia Dalasi' });
        this.currencyCodes.push({ code: 'GNF', countryname: 'Guinea Franc' });
        this.currencyCodes.push({ code: 'GTQ', countryname: 'Guatemala Quetzal' });
        this.currencyCodes.push({ code: 'GYD', countryname: 'Guyana Dollar' });
        this.currencyCodes.push({ code: 'HKD', countryname: 'Hong Kong Dollar' });
        this.currencyCodes.push({ code: 'HNL', countryname: 'Honduras Lempira' });
        this.currencyCodes.push({ code: 'HRK', countryname: 'Croatia Kuna' });
        this.currencyCodes.push({ code: 'HTG', countryname: 'Haiti Gourde' });
        this.currencyCodes.push({ code: 'HUF', countryname: 'Hungary Forint' });
        this.currencyCodes.push({ code: 'IDR', countryname: 'Indonesia Rupiah' });
        this.currencyCodes.push({ code: 'ILS', countryname: 'Israel Shekel' });
        this.currencyCodes.push({ code: 'IMP', countryname: 'Isle of Man Pound' });
        this.currencyCodes.push({ code: 'INR', countryname: 'India Rupee' });
        this.currencyCodes.push({ code: 'IQD', countryname: 'Iraq Dinar' });
        this.currencyCodes.push({ code: 'IRR', countryname: 'Iran Rial' });
        this.currencyCodes.push({ code: 'ISK', countryname: 'Iceland Krona' });
        this.currencyCodes.push({ code: 'JEP', countryname: 'Jersey Pound' });
        this.currencyCodes.push({ code: 'JMD', countryname: 'Jamaica Dollar' });
        this.currencyCodes.push({ code: 'JOD', countryname: 'Jordan Dinar' });
        this.currencyCodes.push({ code: 'JPY', countryname: 'Japan Yen' });
        this.currencyCodes.push({ code: 'KES', countryname: 'Kenya Shilling' });
        this.currencyCodes.push({ code: 'KGS', countryname: 'Kyrgyzstan Som' });
        this.currencyCodes.push({ code: 'KHR', countryname: 'Cambodia Riel' });
        this.currencyCodes.push({ code: 'KMF', countryname: 'Comorian Franc' });
        this.currencyCodes.push({ code: 'KPW', countryname: 'Korea (North) Won' });
        this.currencyCodes.push({ code: 'KRW', countryname: 'Korea (South) Won' });
        this.currencyCodes.push({ code: 'KWD', countryname: 'Kuwait Dinar' });
        this.currencyCodes.push({ code: 'KYD', countryname: 'Cayman Islands Dollar' });
        this.currencyCodes.push({ code: 'KZT', countryname: 'Kazakhstan Tenge' });
        this.currencyCodes.push({ code: 'LAK', countryname: 'Laos Kip' });
        this.currencyCodes.push({ code: 'LBP', countryname: 'Lebanon Pound' });
        this.currencyCodes.push({ code: 'LKR', countryname: 'Sri Lanka Rupee' });
        this.currencyCodes.push({ code: 'LRD', countryname: 'Liberia Dollar' });
        this.currencyCodes.push({ code: 'LSL', countryname: 'Lesotho Loti' });
        this.currencyCodes.push({ code: 'LYD', countryname: 'Libya Dinar' });
        this.currencyCodes.push({ code: 'MAD', countryname: 'Morocco Dirham' });
        this.currencyCodes.push({ code: 'MDL', countryname: 'Moldova Leu' });
        this.currencyCodes.push({ code: 'MGA', countryname: 'Madagascar Ariary' });
        this.currencyCodes.push({ code: 'MKD', countryname: 'Macedonia Denar' });
        this.currencyCodes.push({ code: 'MMK', countryname: 'Myanmar (Burma) Kyat' });
        this.currencyCodes.push({ code: 'MNT', countryname: 'Mongolia Tughrik' });
        this.currencyCodes.push({ code: 'MOP', countryname: 'Macau Pataca' });
        this.currencyCodes.push({ code: 'MRO', countryname: 'Mauritania Ouguiya' });
        this.currencyCodes.push({ code: 'MUR', countryname: 'Mauritius Rupee' });
        this.currencyCodes.push({ code: 'MVR', countryname: 'Maldives (Maldive Islands) Rufiyaa' });
        this.currencyCodes.push({ code: 'MWK', countryname: 'Malawi Kwacha' });
        this.currencyCodes.push({ code: 'MXN', countryname: 'Mexico Peso' });
        this.currencyCodes.push({ code: 'MYR', countryname: 'Malaysia Ringgit' });
        this.currencyCodes.push({ code: 'MZN', countryname: 'Mozambique Metical' });
        this.currencyCodes.push({ code: 'NAD', countryname: 'Namibia Dollar' });
        this.currencyCodes.push({ code: 'NGN', countryname: 'Nigeria Naira' });
        this.currencyCodes.push({ code: 'NIO', countryname: 'Nicaragua Cordoba' });
        this.currencyCodes.push({ code: 'NOK', countryname: 'Norway Krone' });
        this.currencyCodes.push({ code: 'NPR', countryname: 'Nepal Rupee' });
        this.currencyCodes.push({ code: 'NZD', countryname: 'New Zealand Dollar' });
        this.currencyCodes.push({ code: 'OMR', countryname: 'Oman Rial' });
        this.currencyCodes.push({ code: 'PAB', countryname: 'Panama Balboa' });
        this.currencyCodes.push({ code: 'PEN', countryname: 'Peru Sol' });
        this.currencyCodes.push({ code: 'PGK', countryname: 'Papua New Guinea Kina' });
        this.currencyCodes.push({ code: 'PHP', countryname: 'Philippines Peso' });
        this.currencyCodes.push({ code: 'PKR', countryname: 'Pakistan Rupee' });
        this.currencyCodes.push({ code: 'PLN', countryname: 'Poland Zloty' });
        this.currencyCodes.push({ code: 'PYG', countryname: 'Paraguay Guarani' });
        this.currencyCodes.push({ code: 'QAR', countryname: 'Qatar Riyal' });
        this.currencyCodes.push({ code: 'RON', countryname: 'Romania Leu' });
        this.currencyCodes.push({ code: 'RSD', countryname: 'Serbia Dinar' });
        this.currencyCodes.push({ code: 'RUB', countryname: 'Russia Ruble' });
        this.currencyCodes.push({ code: 'RWF', countryname: 'Rwanda Franc' });
        this.currencyCodes.push({ code: 'SAR', countryname: 'Saudi Arabia Riyal' });
        this.currencyCodes.push({ code: 'SBD', countryname: 'Solomon Islands Dollar' });
        this.currencyCodes.push({ code: 'SCR', countryname: 'Seychelles Rupee' });
        this.currencyCodes.push({ code: 'SDG', countryname: 'Sudan Pound' });
        this.currencyCodes.push({ code: 'SEK', countryname: 'Sweden Krona' });
        this.currencyCodes.push({ code: 'SGD', countryname: 'Singapore Dollar' });
        this.currencyCodes.push({ code: 'SHP', countryname: 'Saint Helena Pound' });
        this.currencyCodes.push({ code: 'SLL', countryname: 'Sierra Leone Leone' });
        this.currencyCodes.push({ code: 'SOS', countryname: 'Somalia Shilling' });
        this.currencyCodes.push({ code: 'SPL*', countryname: 'Seborga Luigino' });
        this.currencyCodes.push({ code: 'SRD', countryname: 'Suriname Dollar' });
        this.currencyCodes.push({ code: 'STD', countryname: 'São Tomé and Príncipe Dobra' });
        this.currencyCodes.push({ code: 'SVC', countryname: 'El Salvador Colon' });
        this.currencyCodes.push({ code: 'SYP', countryname: 'Syria Pound' });
        this.currencyCodes.push({ code: 'SZL', countryname: 'Swaziland Lilangeni' });
        this.currencyCodes.push({ code: 'THB', countryname: 'Thailand Baht' });
        this.currencyCodes.push({ code: 'TJS', countryname: 'Tajikistan Somoni' });
        this.currencyCodes.push({ code: 'TMT', countryname: 'Turkmenistan Manat' });
        this.currencyCodes.push({ code: 'TND', countryname: 'Tunisia Dinar' });
        this.currencyCodes.push({ code: 'TOP', countryname: "Tonga Pa'anga" });
        this.currencyCodes.push({ code: 'TRY', countryname: 'Turkey Lira' });
        this.currencyCodes.push({ code: 'TTD', countryname: 'Trinidad and Tobago Dollar' });
        this.currencyCodes.push({ code: 'TVD', countryname: 'Tuvalu Dollar' });
        this.currencyCodes.push({ code: 'TWD', countryname: 'Taiwan New Dollar' });
        this.currencyCodes.push({ code: 'TZS', countryname: 'Tanzania Shilling' });
        this.currencyCodes.push({ code: 'UAH', countryname: 'Ukraine Hryvnia' });
        this.currencyCodes.push({ code: 'UGX', countryname: 'Uganda Shilling' });
        this.currencyCodes.push({ code: 'USD', countryname: 'United States Dollar' });
        this.currencyCodes.push({ code: 'UYU', countryname: 'Uruguay Peso' });
        this.currencyCodes.push({ code: 'UZS', countryname: 'Uzbekistan Som' });
        this.currencyCodes.push({ code: 'VEF', countryname: 'Venezuela Bolívar' });
        this.currencyCodes.push({ code: 'VND', countryname: 'Viet Nam Dong' });
        this.currencyCodes.push({ code: 'VUV', countryname: 'Vanuatu Vatu' });
        this.currencyCodes.push({ code: 'WST', countryname: 'Samoa Tala' });
        this.currencyCodes.push({ code: 'XAF', countryname: 'Communauté Financière Africaine (BEAC) CFA Franc BEAC' });
        this.currencyCodes.push({ code: 'XCD', countryname: 'East Caribbean Dollar' });
        this.currencyCodes.push({ code: 'XDR', countryname: 'International Monetary Fund (IMF) Special Drawing Rights' });
        this.currencyCodes.push({ code: 'XOF', countryname: 'Communauté Financière Africaine (BCEAO) Franc' });
        this.currencyCodes.push({ code: 'XPF', countryname: 'Comptoirs Français du Pacifique (CFP) Franc' });
        this.currencyCodes.push({ code: 'YER', countryname: 'Yemen Rial' });
        this.currencyCodes.push({ code: 'ZAR', countryname: 'South Africa Rand' });
        this.currencyCodes.push({ code: 'ZMW', countryname: 'Zambia Kwacha' });
        this.currencyCodes.push({ code: 'ZWD', countryname: 'Zimbabwe Dollar' });
    };
    return SettingsManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["d" /* FirebaseObjectObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["d" /* FirebaseObjectObservable */]) === "function" && _a || Object)
], SettingsManagementComponent.prototype, "settings", void 0);
SettingsManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting-management',
        template: __webpack_require__("../../../../../src/app/setting-management/setting-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/setting-management/setting-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsManagementComponent);

var CurrencyCode = (function () {
    function CurrencyCode() {
    }
    return CurrencyCode;
}());
var _a;
//# sourceMappingURL=setting-management.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBdnV29e0A0mwp3z56FEU-ub3-fPn_85cs',
        authDomain: 'invoiceissuer.firebaseapp.com',
        databaseURL: 'https://invoiceissuer.firebaseio.com',
        storageBucket: 'invoiceissuer.appspot.com',
        messagingSenderId: '458385736944'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/invoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");

var Invoice = (function () {
    function Invoice(cookieService) {
        this.invoiceNumber = this.generateId(cookieService);
        this.books = new Array();
        this.date = new Date().getTime();
        this.subTotal = 0;
        this.postage = 0;
        this.gst = 0;
        this.total = 0;
        this.isPaid = false;
    }
    Invoice.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Invoice.prototype.generateId = function (cookieService) {
        var dateToday = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]('en-NZ').transform(new Date(), 'yyMMdd');
        var invoicesToday = cookieService.get(dateToday);
        if (invoicesToday == null) {
            var id = dateToday + "001";
            return id;
        }
        else {
            // split 
            var array = invoicesToday.split(',');
            var inValidId = true;
            var id = null;
            while (inValidId) {
                id = (parseInt(array[array.length - 1]) + 1).toString();
                if (array[id] == null) {
                    inValidId = false;
                    break;
                }
            }
            return id;
        }
    };
    Invoice.prototype.addBook = function (book) {
        var bookInInvoice = this.books.find(function (o) { return o.key == book.$key; });
        // Check if already exists
        if (bookInInvoice == null) {
            this.books.push({
                key: book.$key,
                name: book.name,
                price: book.price,
                quantity: 1,
                discount: 0,
                total: book.price
            });
        }
        else {
            bookInInvoice.quantity = Number.parseInt("1") + Number.parseInt(bookInInvoice.quantity.toString());
            bookInInvoice.total = book.price * bookInInvoice.quantity * (1 - bookInInvoice.discount * 0.01);
        }
        // Total 
        this.calculateTotalDetails();
    };
    Invoice.prototype.updateBook = function (book, updateBookQuantity, updateBookDiscount) {
        var bookInInvoice = this.books.find(function (x) { return x.key == book.key; });
        console.log(book);
        if (updateBookQuantity != null) {
            bookInInvoice.quantity = updateBookQuantity;
            bookInInvoice.total = bookInInvoice.price * updateBookQuantity * (1 - bookInInvoice.discount * 0.01);
        }
        if (updateBookDiscount != null) {
            bookInInvoice.discount = updateBookDiscount;
            bookInInvoice.total = bookInInvoice.price * bookInInvoice.quantity * (1 - updateBookDiscount * 0.01);
        }
        // Total 
        this.calculateTotalDetails();
    };
    Invoice.prototype.deleteBook = function (book) {
        this.books.splice(this.books.indexOf(book), 1);
        // Total 
        this.calculateTotalDetails();
    };
    Invoice.prototype.updatePostage = function (postage) {
        this.postage = postage;
        this.calculateTotalDetails();
    };
    Invoice.prototype.calculateTotalDetails = function () {
        this.calculateSubTotal();
        this.calculateGst();
        this.calculateTotal();
    };
    Invoice.prototype.calculateSubTotal = function () {
        var sum = 0;
        this.books.forEach(function (o) {
            sum += Number.parseFloat(o.total.toString());
        });
        this.subTotal = sum;
    };
    Invoice.prototype.calculateGst = function () {
        this.gst = (Number.parseFloat(this.subTotal.toString()) + Number.parseFloat(this.postage.toString())) * 0.15;
    };
    Invoice.prototype.calculateTotal = function () {
        this.total = (Number.parseFloat(this.subTotal.toString()) + Number.parseFloat(this.postage.toString()) + Number.parseFloat(this.gst.toString()));
    };
    return Invoice;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ "../../../../../src/services/BookFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookFilter = (function () {
    function BookFilter() {
    }
    BookFilter.prototype.transform = function (value, args) {
        if (value == null || value == "" || args == null || args == "") {
            return value;
        }
        return value.filter(function (book) {
            if (args != null) {
                return book.name.toLowerCase().indexOf(args.toLowerCase()) > -1;
            }
        });
    };
    return BookFilter;
}());
BookFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'bookFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], BookFilter);

//# sourceMappingURL=BookFilter.js.map

/***/ }),

/***/ "../../../../../src/services/ClientFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientFilter = (function () {
    function ClientFilter() {
    }
    ClientFilter.prototype.transform = function (value, args) {
        if (value == null || value == "" || args == null || args == "") {
            return value;
        }
        return value.filter(function (client) {
            if (args != null) {
                return client.name.toLowerCase().indexOf(args.toLowerCase()) > -1;
            }
        });
    };
    return ClientFilter;
}());
ClientFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'clientFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ClientFilter);

//# sourceMappingURL=ClientFilter.js.map

/***/ }),

/***/ "../../../../../src/services/CurrencyFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFilter = (function () {
    function CurrencyFilter() {
    }
    CurrencyFilter.prototype.transform = function (value, args) {
        if (value == null || value == "" || args == null || args == "") {
            return value;
        }
        return value.filter(function (currency) {
            if (args != null) {
                var code = currency.code;
                var countryName = currency.countryname;
                return code.toLowerCase().indexOf(args.toLowerCase()) > -1 || countryName.toLowerCase().indexOf(args.toLowerCase()) > -1;
            }
        });
    };
    return CurrencyFilter;
}());
CurrencyFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'currencyFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CurrencyFilter);

//# sourceMappingURL=CurrencyFilter.js.map

/***/ }),

/***/ "../../../../../src/services/InvoiceFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceFilter = (function () {
    function InvoiceFilter() {
    }
    InvoiceFilter.prototype.transform = function (value, args) {
        if (value == null || value == "" || args == null || args == "") {
            return value;
        }
        return value.filter(function (invoice) {
            if (args != null) {
                var strInvNo = invoice.invoiceNumber;
                var client = invoice.client;
                var strCliName = client.name;
                var isPaid = invoice.isPaid == true;
                console.log(args);
                console.log(strCliName);
                return (isPaid) && (strInvNo.indexOf(args.toLowerCase()) > -1 || strCliName.toLowerCase().indexOf(args.toLowerCase()) > -1);
            }
        });
    };
    return InvoiceFilter;
}());
InvoiceFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'invoiceFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], InvoiceFilter);

//# sourceMappingURL=InvoiceFilter.js.map

/***/ }),

/***/ "../../../../../src/services/OrderBy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (array == null || array == "") {
            return array;
        }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderBy.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    return OrderBy;
}());
OrderBy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderBy'
    })
], OrderBy);

//# sourceMappingURL=OrderBy.js.map

/***/ }),

/***/ "../../../../../src/shared/methods.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedMethods = (function () {
    function SharedMethods() {
    }
    SharedMethods.showFirebaseResult = function (promise) {
        promise
            .then(function (_) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".alert").css("background-color", "#59BD07").show().delay(2000).fadeOut();
        })
            .catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".alert").html("<strong>Error</strong> " + err + ".").css("background-color", "#D6D6D6").show().delay(2000).fadeOut();
        });
    };
    return SharedMethods;
}());
SharedMethods = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedMethods);

//# sourceMappingURL=methods.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map