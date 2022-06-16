"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_favorite_favorite_module_ts"],{

/***/ 1605:
/*!**********************************************************!*\
  !*** ./src/app/user/favorite/favorite-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageRoutingModule": () => (/* binding */ FavoritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.page */ 7993);




const routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_0__.FavoritePage
    }
];
let FavoritePageRoutingModule = class FavoritePageRoutingModule {
};
FavoritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritePageRoutingModule);



/***/ }),

/***/ 5892:
/*!**************************************************!*\
  !*** ./src/app/user/favorite/favorite.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageModule": () => (/* binding */ FavoritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-routing.module */ 1605);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page */ 7993);







let FavoritePageModule = class FavoritePageModule {
};
FavoritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritePageRoutingModule
        ],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_1__.FavoritePage]
    })
], FavoritePageModule);



/***/ }),

/***/ 7993:
/*!************************************************!*\
  !*** ./src/app/user/favorite/favorite.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePage": () => (/* binding */ FavoritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favorite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.page.html?ngResource */ 2210);
/* harmony import */ var _favorite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page.scss?ngResource */ 9081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FavoritePage = class FavoritePage {
    constructor() { }
    ngOnInit() {
    }
};
FavoritePage.ctorParameters = () => [];
FavoritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favorite',
        template: _favorite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favorite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritePage);



/***/ }),

/***/ 9081:
/*!*************************************************************!*\
  !*** ./src/app/user/favorite/favorite.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  --background: linear-gradient(to right, #00b4db, #0083b0);\n  color: white;\n}\n\nion-searchbar {\n  --icon-color: #0083b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJmYXZvcml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiNGRiLCAjMDA4M2IwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWljb24tY29sb3I6ICMwMDgzYjA7XHJcbn0iXX0= */";

/***/ }),

/***/ 2210:
/*!*************************************************************!*\
  !*** ./src/app/user/favorite/favorite.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Favoris</ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"header\">\n    <ion-searchbar placeholder=\"Search\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/tabs/gifts\" color=\"danger\">\n      <ion-icon name=\"gift-outline\" #giftIcon></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div id=\"container\">\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_user_favorite_favorite_module_ts.js.map