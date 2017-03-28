webpackJsonp([1,4],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.base_url = "https://r2e.mybluemix.net";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AppService.prototype.getClient = function () {
        return this.http.get(this.base_url + '/api/clientes/001', this.headers).map(function (response) { return response.json(); });
    };
    AppService.prototype.insertClient = function () {
        return this.http.post(this.base_url + '/db/clientes/001', this.headers);
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
}());
//# sourceMappingURL=C:/Workspace/r2e-front/src/app.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(553);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Workspace/r2e-front/src/main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'R2E';
        this.flaggedCase = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.client = { empty: true };
        this.product = { empty: true };
        this.case = { empty: true };
    };
    AppComponent.prototype.flagCase = function () {
        if (!this.flaggedCase)
            this.flaggedCase = true;
        else
            this.flaggedCase = false;
    };
    AppComponent.prototype.insertClient = function () {
        console.log("Inserting client data...");
        this.appService.insertClient().subscribe();
    };
    AppComponent.prototype.getClient = function () {
        var _this = this;
        console.log("Getting client data...");
        this.appService.getClient().
            subscribe(function (clientJSON) { return _this.client = clientJSON; });
    };
    AppComponent.prototype.searchClient = function () {
        if (this.client.empty) {
            this.client = {
                name: "Rodrigo Moreira",
                phone: "(11) 37316548",
                email: "rodrigo@gmail.com",
                cpf: "42764598478",
                gender: "Masculino",
                address: "Av Paulista, 1000 Ap 1153",
                city: "São Paulo",
                state: "São Paulo",
                country: "Brasil",
                empty: false
            };
        }
        else {
            this.client = { empty: true };
        }
    };
    AppComponent.prototype.searchProduct = function () {
        if (this.product.empty) {
            this.product = {
                description: "Plano Vivo Pré Controle",
                startDate: "02/05/2012",
                empty: false
            };
        }
        else {
            this.product = { empty: true };
        }
    };
    AppComponent.prototype.searchCase = function () {
        if (this.case.empty) {
            this.case = {
                id: "749367558",
                type: "Reclamação",
                reason: "Cobrança indevida",
                description: "Boleto gerado com o valor incorreto.",
                observation: "O cliente ligou pois sua conta que deveria vir no valor de R$79,90 chegou em sua residência com o valor de R$345,50.",
                empty: false
            };
        }
        else {
            this.case = { empty: true };
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(609),
            styles: [__webpack_require__(607)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Workspace/r2e-front/src/app.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Workspace/r2e-front/src/app.module.js.map

/***/ }),

/***/ 553:
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
//# sourceMappingURL=C:/Workspace/r2e-front/src/environment.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(237)();
// imports


// module
exports.push([module.i, ".button {\r\n    background-color: rgb(75, 75, 75);\r\n    border-radius: 30px;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 20px 20px 20px 0px;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.button:hover {\r\n    background-color: rgb(30, 30, 30);\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.button-light {\r\n    background-color: rgb(200, 200, 200);\r\n    border-radius: 30px;\r\n    color: rgb(0, 0, 0);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 20px 20px 20px 0px;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.button-light:hover {\r\n    background-color: rgb(175, 175, 175);\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\n.case-container {\r\n    border-top: 5px solid rgb(209, 33, 188);\r\n    clear: both;\r\n    min-height: 500px;\r\n    padding: 20px;\r\n    width: 1240px;\r\n}\r\n\r\n.case-title {\r\n    color: rgb(209, 33, 188);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: lighter;\r\n    font-size: 25px;\r\n}\r\n\r\n.client {\r\n    background-color: rgb(221, 221, 221);\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 20px 0px;\r\n    padding: 10px;\r\n}\r\n\r\n.client-container {\r\n    border-top: 5px solid rgb(41, 33, 209);\r\n    float: left;\r\n    margin-top: 10px;\r\n    min-height: 200px;\r\n    padding: 20px;\r\n    width: 730px;\r\n}\r\n\r\n.client-title {\r\n    color: rgb(41, 33, 209);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: lighter;\r\n    font-size: 25px;\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    width: 1280px;\r\n}\r\n\r\n.flagged-case {\r\n    background-color: rgb(209, 33, 188);\r\n    color: rgb(255, 255, 255);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: lighter;\r\n    font-size: 20px;\r\n    line-height: 50px;\r\n    margin: 10px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.info {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: lighter;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.input-container {\r\n    width: 100%;\r\n    color: rgb(150, 150, 150);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.input-container-left {\r\n    width: 48%;\r\n    float: left;\r\n    color: rgb(150, 150, 150);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.input-container-right {\r\n    width: 48%;\r\n    float: right;\r\n    color: rgb(150, 150, 150);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.product-container {\r\n    border-top: 5px solid rgb(62, 209, 33);\r\n    float: left;\r\n    margin: 10px 10px 10px 0px;\r\n    min-height: 200px;\r\n    padding: 20px;\r\n    width: 460px;\r\n}\r\n\r\n.product-title {\r\n    color: rgb(62, 209, 33);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: lighter;\r\n    font-size: 25px;\r\n}\r\n\r\n.text-area {\r\n    width: 100%;\r\n    color: rgb(150, 150, 150);\r\n    margin: 10px 0px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.title {\r\n    color: rgb(111, 111, 111);\r\n    display: inline-block;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: lighter;\r\n    font-size: 50px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">Risk Profile Tracker</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"product-container\">\r\n    <div class=\"product-title\">Produto</div>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Descrição\" value={{product.description}}>\r\n      </md-input-container><br>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Início do Contrato\" value={{product.startDate}}>\r\n      </md-input-container>\r\n      <div class=\"button\">Salvar</div>\r\n      <div class=\"button\" (click)=\"searchProduct()\">Buscar</div>\r\n    </div>\r\n  <div class=\"client-container\">\r\n    <div class=\"client-info\">\r\n      <div class=\"client-title\">Cliente</div>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Nome\" value={{client.name}}>\r\n      </md-input-container><br>\r\n      <md-input-container class=\"input-container-left\">\r\n        <input mdInput placeholder=\"Telefone\" value={{client.phone}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container-right\">\r\n        <input mdInput placeholder=\"Email\" value={{client.email}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container-left\">\r\n        <input mdInput placeholder=\"CPF\" value={{client.cpf}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container-right\">\r\n        <input mdInput placeholder=\"Sexo\" value={{client.gender}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Endereço\" value={{client.address}}>\r\n      </md-input-container><br>\r\n      <md-input-container class=\"input-container-left\">\r\n        <input mdInput placeholder=\"Cidade\" value={{client.city}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container-right\">\r\n        <input mdInput placeholder=\"País\" value={{client.country}}>\r\n      </md-input-container>\r\n      <div class=\"button\">Salvar</div>\r\n      <div class=\"button\" (click)=\"searchClient()\">Buscar</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"case-container\">\r\n    <div class=\"flagged-case\" *ngIf=\"flaggedCase\">Caso o cliente esteja insatisfeito transfira a ligação para o setor de Relacionamento com o Cliente.</div>\r\n    <div class=\"case-info\">\r\n      <div class=\"case-title\">Caso</div>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Número de Caso\" value={{case.id}}>\r\n      </md-input-container><br>\r\n      <md-input-container class=\"input-container-left\">\r\n        <input mdInput placeholder=\"Tipo\" value={{case.type}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container-right\">\r\n        <input mdInput placeholder=\"Assunto\" value={{case.reason}}>\r\n      </md-input-container>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Descrição\" value={{case.description}}>\r\n      </md-input-container><br>\r\n      <div class=\"button-light\" (click)=\"flagCase()\">Salvar Caso Técnico</div>\r\n      <md-input-container class=\"input-container\">\r\n        <textarea mdInput class=\"text-area\" placeholder=\"Observações\" value={{case.observation}}></textarea>\r\n      </md-input-container>\r\n      <div class=\"button\">Salvar</div>\r\n      <div class=\"button\" (click)=\"searchCase()\">Buscar</div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ })

},[659]);
//# sourceMappingURL=main.bundle.js.map