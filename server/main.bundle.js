webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\">\n  <h1 id=\"leftNav\" [routerLink]=\"['/mainContact']\">Contacts</h1>\n  <div id=\"rightNav\">\n    <h2 class=\"navItem\" [routerLink]=\"['/mainContact']\" (click)=\"mainActive()\" [ngClass]=\"{'navActive': mainActiveBool}\">My Contacts</h2>\n    <h2 class=\"navItem\" [routerLink]=\"['/createContact']\" (click)=\"createActive()\" [ngClass]=\"{'navActive': createActiveBool}\">Create Contact</h2>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header mainHeader\">Create a Contact</h1>\n\n<div class=\"container\">\n  <div>\n    <label>First Name: </label><input [(ngModel)]=\"firstName\" type=\"text\" placeholder=\"First Name\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Last Name: </label><input [(ngModel)]=\"lastName\" type=\"text\" placeholder=\"Last Name\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Phone Number: </label><input [(ngModel)]=\"phoneNumber\" type=\"text\" placeholder=\"Phone Number\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Address: </label><input [(ngModel)]=\"address\" type=\"text\" placeholder=\"Address\" class=\"createInput\">\n  </div>\n  <div id=\"submitNewContact\" (click)=\"submitNewContact()\">Submit</div>\n</div>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header mainHeader\">Edit a Contact</h1>\n\n<div class=\"container\">\n  <div>\n    <label>First Name: </label><input [(ngModel)]=\"firstName\" type=\"text\" placeholder=\"First Name\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Last Name: </label><input [(ngModel)]=\"lastName\" type=\"text\" placeholder=\"Last Name\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Phone Number: </label><input [(ngModel)]=\"phoneNumber\" type=\"text\" placeholder=\"Phone Number\" class=\"createInput\">\n  </div>\n  <div>\n    <label>Address: </label><input [(ngModel)]=\"address\" type=\"text\" placeholder=\"Address\" class=\"createInput\">\n  </div>\n  <div *ngIf=\"updated\" class=\"updateContact\">This contact has been updated.</div>\n  <div id=\"submitNewContact\" (click)=\"editContact()\">Submit</div>\n</div>\n"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div id=\"mainContainer\">\n  <h1 class=\"header mainHeader\">My Contacts</h1>\n  <div id=\"contactsContainer\">\n    <input id=\"searchbar\" type=\"text\" placeholder=\"Search\" (keyup)=\"sortContacts()\" [(ngModel)]=\"searchParam\">\n    <div *ngFor=\"let contact of contacts; let i = index\" class=\"contactItem\">\n      <i class=\"fa fa-times xContacts\" aria-hidden=\"true\" (click)=\"deleteContact(contact._id)\"></i>\n      <p class=\"contactName\" [routerLink]=\"['/contact', contact._id]\">{{contact.firstName}}</p>\n      <p class=\"contactName\" [routerLink]=\"['/contact', contact._id]\">{{contact.lastName}}</p>\n      <i class=\"fa fa-pencil-square-o editContacts\" aria-hidden=\"true\" [routerLink]=\"['/editContact', contact._id]\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"contacts\">\n  <h1 class=\"header center\">{{contacts[contactIndex].firstName}} {{contacts[contactIndex].lastName}}</h1>\n  <h3 class=\"header\">Phone Number: {{contacts[contactIndex].phoneNumber}}</h3>\n  <h3 class=\"header\">Address: {{contacts[contactIndex].address}}</h3>\n</div>\n"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getContacts = function () {
        var stuff = this.http.get('https://hidden-oasis-76421.herokuapp.com/contacts')
            .toPromise().then(this.extractData);
        return stuff;
    };
    ContactService.prototype.extractData = function (res) {
        var initial = res._body;
        initial = JSON.parse(initial);
        initial = initial.contacts;
        return initial;
    };
    ContactService.prototype.getUnsortedContacts = function () {
        return this.http.get('https://hidden-oasis-76421.herokuapp.com/unsortedContacts').toPromise().then(function (data) {
            var contacts = data['_body'];
            contacts = JSON.parse(contacts);
            return contacts.contacts;
        });
    };
    ContactService.prototype.addNewContact = function (data) {
        this.http.post('https://hidden-oasis-76421.herokuapp.com/addContact', data).toPromise().then();
    };
    ContactService.prototype.deleteContact = function (index) {
        return this.http.delete('https://hidden-oasis-76421.herokuapp.com/deleteContact/' + index).toPromise().then(function () {
            return true;
        });
    };
    ContactService.prototype.sortContacts = function (searchParam) {
        return this.http.put('https://hidden-oasis-76421.herokuapp.com/sortContacts/' + searchParam, searchParam).toPromise().then(function (res) {
            var contacts = JSON.parse(res['_body']);
            contacts = contacts.contacts;
            return contacts;
        });
    };
    ContactService.prototype.editContact = function (contacts) {
        return this.http.put('https://hidden-oasis-76421.herokuapp.com/editContact', contacts, contacts).toPromise().then(function (res) {
            return true;
        });
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contactService.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.mainActiveBool = false;
        this.createActiveBool = false;
        this.activeClick = 0;
    }
    AppComponent.prototype.mainActive = function () {
        if (this.activeClick === 0) {
            this.mainActiveBool = !this.mainActiveBool;
            this.activeClick++;
        }
        else {
            if (!this.mainActiveBool) {
                this.mainActiveBool = !this.mainActiveBool;
                this.createActiveBool = !this.createActiveBool;
            }
        }
    };
    AppComponent.prototype.createActive = function () {
        if (this.activeClick === 0) {
            this.createActiveBool = !this.createActiveBool;
            this.activeClick++;
        }
        else {
            if (!this.createActiveBool) {
                this.mainActiveBool = !this.mainActiveBool;
                this.createActiveBool = !this.createActiveBool;
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(151)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_createContact_createContact__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mainContact_mainContact__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_specificContact_specificContact__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_editContact_editContact__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_contactService__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_createContact_createContact__["a" /* CreateContactComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_mainContact_mainContact__["a" /* MainContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_specificContact_specificContact__["a" /* SpecificContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_editContact_editContact__["a" /* EditContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'createContact', component: __WEBPACK_IMPORTED_MODULE_5__components_createContact_createContact__["a" /* CreateContactComponent */] },
                { path: 'mainContact', component: __WEBPACK_IMPORTED_MODULE_6__components_mainContact_mainContact__["a" /* MainContactComponent */] },
                { path: 'contact/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_specificContact_specificContact__["a" /* SpecificContactComponent */] },
                { path: 'editContact/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_editContact_editContact__["a" /* EditContactComponent */] },
                { path: '', redirectTo: 'mainContact', pathMatch: 'full' }
                // { path: '**', component: PageNotFoundComponent}
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__service_contactService__["a" /* ContactService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_contactService__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateContactComponent = (function () {
    function CreateContactComponent(contactService) {
        this.contactService = contactService;
    }
    CreateContactComponent.prototype.submitNewContact = function () {
        if (this.firstName && this.lastName && (this.firstName != "" && this.firstName != " ") && (this.lastName != "" && this.lastName != " ")) {
            var newContact = {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                address: this.address
            };
            this.contactService.addNewContact(newContact);
            this.firstName = "";
            this.lastName = "";
            this.phoneNumber = "";
            this.address = "";
        }
    };
    return CreateContactComponent;
}());
CreateContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(154)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */]) === "function" && _a || Object])
], CreateContactComponent);

var _a;
//# sourceMappingURL=createContact.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_contactService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditContactComponent = (function () {
    function EditContactComponent(_route, contactService) {
        var _this = this;
        this._route = _route;
        this.contactService = contactService;
        this.updated = false;
        this.contactID = _route.snapshot.params['id'];
        contactService.getUnsortedContacts().then(function (newInfo) {
            _this.contacts = newInfo;
            _this.findContactIndex();
            _this.firstName = _this.contacts[_this.contactIndex].firstName;
            _this.lastName = _this.contacts[_this.contactIndex].lastName;
            _this.phoneNumber = _this.contacts[_this.contactIndex].phoneNumber;
            _this.address = _this.contacts[_this.contactIndex].address;
        });
    }
    EditContactComponent.prototype.findContactIndex = function () {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._id == this.contactID) {
                this.contactIndex = i;
                break;
            }
        }
    };
    EditContactComponent.prototype.editContact = function () {
        var _this = this;
        var newContact = {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            address: this.address,
            _id: this.contacts[this.contactIndex]._id
        };
        // this.contacts[this.contactIndex] = newContact;
        // let updateContact = {contacts: this.contacts};
        this.contactService.editContact(newContact).then(function (worked) {
            if (worked) {
                _this.updated = true;
            }
        });
    };
    return EditContactComponent;
}());
EditContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(155)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */]) === "function" && _b || Object])
], EditContactComponent);

var _a, _b;
//# sourceMappingURL=editContact.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_contactService__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContactComponent = (function () {
    function MainContactComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        this.contacts = [];
        this.searchParam = "";
        contactService.getContacts().then(function (newInfo) {
            _this.contacts = newInfo;
        });
    }
    MainContactComponent.prototype.deleteContact = function (index) {
        var _this = this;
        this.contactService.deleteContact(index).then(function () {
            _this.contactService.getContacts().then(function (data) {
                _this.contacts = data;
            });
        });
    };
    MainContactComponent.prototype.sortContacts = function () {
        var _this = this;
        if (this.searchParam !== "") {
            this.contactService.sortContacts(this.searchParam).then(function (data) {
                _this.contacts = data;
            });
        }
        else {
            this.contactService.getContacts().then(function (newInfo) {
                _this.contacts = newInfo;
            });
        }
    };
    return MainContactComponent;
}());
MainContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(156)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_contactService__["a" /* ContactService */]) === "function" && _a || Object])
], MainContactComponent);

var _a;
//# sourceMappingURL=mainContact.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_contactService__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecificContactComponent = (function () {
    function SpecificContactComponent(_route, contactService) {
        var _this = this;
        this._route = _route;
        this.contactService = contactService;
        this.contactID = _route.snapshot.params['id'];
        contactService.getContacts().then(function (newInfo) {
            _this.contacts = newInfo;
            _this.findContactIndex();
        });
    }
    SpecificContactComponent.prototype.findContactIndex = function () {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._id == this.contactID) {
                this.contactIndex = i;
                break;
            }
        }
    };
    return SpecificContactComponent;
}());
SpecificContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(157)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_contactService__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_contactService__["a" /* ContactService */]) === "function" && _b || Object])
], SpecificContactComponent);

var _a, _b;
//# sourceMappingURL=specificContact.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[191]);
//# sourceMappingURL=main.bundle.js.map