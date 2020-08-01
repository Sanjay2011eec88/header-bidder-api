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

/***/ "./src/_service/adds.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forkJoin_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
var AddsService = /** @class */ (function () {
    function AddsService(http) {
        this.http = http;
        this.config = [
            {
                company: "xyz",
                api: '/index?company="xyz'
            },
            {
                company: "abc",
                api: '/index?company="abc'
            },
            {
                company: "efg",
                api: '/index?company="efg'
            },
            {
                company: "lmn",
                api: '/index?company="lmn'
            },
            {
                company: "qpr",
                api: '/index?company="qpr'
            }
        ];
    }
    AddsService.prototype.getAdvertisements = function () {
        var advertiseList = [];
        for (var _i = 0, _a = this.config; _i < _a.length; _i++) {
            var companies = _a[_i];
            advertiseList.push(this.http.get(companies.api));
        }
        return forkJoin_1.forkJoin(advertiseList);
    };
    AddsService.prototype.recordClick = function (addObj) {
        return this.http.post("/conversions?company=" + addObj.company + "&id=" + addObj.id, {});
    };
    AddsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AddsService);
    return AddsService;
}());
exports.AddsService = AddsService;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  width:1340px;\n  height: 600px;\n}\n\nheader {\n  width:1248px;\n  float:left;\n  background: pink;\n  height: 50px;\n  margin-left: 46px;\n}\n\n.logo {\n  -moz-text-align-last: center;\n       text-align-last: center;\n  padding: 15px\n}\n\n.menu {\n  float: right;\n  padding: 15px\n}\n\n.first-box {\n  width:500px;\n  float:left;\n  height: 450px;\n  margin: 50px\n}\n\n/*.first-box p {*/\n\n/*color: #ffffff;*/\n\n/*padding-left: 40px;*/\n\n/*padding-top: 50px;*/\n\n/*}*/\n\n.second-box {\n  width:500px;\n  height: 450px;\n  float:right;\n  margin: 50px\n}\n\n/*.second-box p {*/\n\n/*color: #ffffff;*/\n\n/*padding-left: 11px;*/\n\n/*padding-top: 50px;*/\n\n/*}*/\n\nfooter {\n  width:1248px;\n  float:left;\n  background: black;\n  height: 50px;\n  color: #ffffff;\n  margin-left: 46px;\n}\n\nfooter div {\n  padding: 15px;\n}\n\nimg{\n  width:450px;\n  height: 450px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <header>\n    <div class=\"logo\">Client Header Bidder</div>\n  </header>\n\n  <div *ngIf=\"add\">\n    <div class=\"first-box\">\n      <button (click)=onNavigate(add)>\n        <img src={{add.advertismentImage}}>\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"add\">\n    <div class=\"second-box\" >\n      <button (click)=onNavigate(add)>\n        <img src={{add.advertismentImage}}>\n      </button>\n    </div>\n  </div>\n\n  <footer>\n    <div>Website Info</div>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var adds_service_1 = __webpack_require__("./src/_service/adds.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(addService) {
        this.addService = addService;
        this.title = 'app';
        this.add = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAdsForSlots();
    };
    AppComponent.prototype.onNavigate = function (add) {
        window.open(add.url);
        this.addService.recordClick(add).subscribe(function (res) {
            console.log(res);
        });
    };
    //For getting max CPI
    AppComponent.prototype.getAdsForSlots = function () {
        var _this = this;
        this.addService.getAdvertisements().subscribe(function (results) {
            var max = null;
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var list = results_1[_i];
                if ('listOfAdvertisements' in list) {
                    for (var _a = 0, _b = list.listOfAdvertisements; _a < _b.length; _a++) {
                        var add = _b[_a];
                        if (max !== null) {
                            if (max.cpi < add.cpi) {
                                max = add;
                            }
                        }
                        else {
                            max = add;
                        }
                    }
                }
            }
            _this.add = max;
            console.log(_this.add);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [adds_service_1.AddsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var adds_service_1 = __webpack_require__("./src/_service/adds.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                common_1.CommonModule
            ],
            providers: [
                adds_service_1.AddsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map