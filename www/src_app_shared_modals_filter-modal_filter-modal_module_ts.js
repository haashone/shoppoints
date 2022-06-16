"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_modals_filter-modal_filter-modal_module_ts"],{

/***/ 574:
/*!***************************************************************************!*\
  !*** ./src/app/shared/modals/filter-modal/filter-modal-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalPageRoutingModule": () => (/* binding */ FilterModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _filter_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-modal.page */ 2120);




const routes = [
    {
        path: '',
        component: _filter_modal_page__WEBPACK_IMPORTED_MODULE_0__.FilterModalPage
    }
];
let FilterModalPageRoutingModule = class FilterModalPageRoutingModule {
};
FilterModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterModalPageRoutingModule);



/***/ }),

/***/ 3602:
/*!*******************************************************************!*\
  !*** ./src/app/shared/modals/filter-modal/filter-modal.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalPageModule": () => (/* binding */ FilterModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _filter_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-modal-routing.module */ 574);
/* harmony import */ var _filter_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-modal.page */ 2120);







let FilterModalPageModule = class FilterModalPageModule {
};
FilterModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterModalPageRoutingModule
        ],
        declarations: [_filter_modal_page__WEBPACK_IMPORTED_MODULE_1__.FilterModalPage]
    })
], FilterModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_modals_filter-modal_filter-modal_module_ts.js.map