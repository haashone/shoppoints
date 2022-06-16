"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_gifts_gifts_module_ts"],{

/***/ 6838:
/*!***********************************************!*\
  !*** ./src/app/gifts/gifts-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPageRoutingModule": () => (/* binding */ GiftsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gifts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.page */ 1787);




const routes = [
    {
        path: '',
        component: _gifts_page__WEBPACK_IMPORTED_MODULE_0__.GiftsPage
    },
    {
        path: '',
        component: _gifts_page__WEBPACK_IMPORTED_MODULE_0__.GiftsPage
    },
    {
        path: 'gift-detail/:d',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_gifts_gift-detail_gift-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gift-detail/gift-detail.module */ 9264)).then(m => m.GiftDetailPageModule)
    },
];
let GiftsPageRoutingModule = class GiftsPageRoutingModule {
};
GiftsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiftsPageRoutingModule);



/***/ }),

/***/ 4913:
/*!***************************************!*\
  !*** ./src/app/gifts/gifts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPageModule": () => (/* binding */ GiftsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _gifts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts-routing.module */ 6838);
/* harmony import */ var _gifts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifts.page */ 1787);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let GiftsPageModule = class GiftsPageModule {
};
GiftsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _gifts_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiftsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_gifts_page__WEBPACK_IMPORTED_MODULE_1__.GiftsPage]
    })
], GiftsPageModule);



/***/ }),

/***/ 1787:
/*!*************************************!*\
  !*** ./src/app/gifts/gifts.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPage": () => (/* binding */ GiftsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gifts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.page.html?ngResource */ 4606);
/* harmony import */ var _gifts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifts.page.scss?ngResource */ 3833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/mock.service */ 2997);
/* harmony import */ var _shared_modals_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modals/filter-modal/filter-modal.page */ 2120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);










let GiftsPage = class GiftsPage {
    constructor(service, modalCtrl, router) {
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.giftList = [];
        this.categoriesList = [];
        this.categoryID = "";
        this.filterProps = {};
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.filterProps = {
                "giftList": this.giftList,
                "categoriesList": this.categoriesList
            };
            const filterPropsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.filterProps);
            const modal = yield this.modalCtrl.create({
                component: _shared_modals_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_3__.FilterModalPage,
                breakpoints: [0, 0.3, 0.5, 0.8],
                initialBreakpoint: 0.5,
                componentProps: {
                    filterPropsSubject
                }
            });
            yield modal.present();
            filterPropsSubject.subscribe((value) => {
                this.filterProps = value;
            });
            console.log(this.filterProps);
            modal.onDidDismiss().then((_ => {
                filterPropsSubject.unsubscribe();
            }));
        });
    }
    ngOnInit() {
        this.initialElements();
        this.getAllCategories();
    }
    initialElements() {
        this.getAllgifts();
        this.resetCategoriesBtn();
        document.getElementById('allGiftsBtn').style.setProperty('--background', '#00b4db');
        document.getElementById('allGiftsBtn').style.setProperty('--color', 'white');
    }
    resetCategoriesBtn() {
        this.categoriesList.forEach(x => {
            document.getElementById(x.id).style.setProperty('--background', 'none');
            document.getElementById(x.id).style.setProperty('--color', 'black');
        });
    }
    onChangeEvent(event) {
        this.scrollToGiftsList();
    }
    FilterCategory(id, name) {
        this.getAllgifts();
        this.resetCategoriesBtn();
        this.giftList = this.giftList.filter(gift => gift.categorie === name.toLowerCase());
        document.getElementById('allGiftsBtn').style.setProperty('--background', 'none');
        document.getElementById('allGiftsBtn').style.setProperty('--color', 'black');
        document.getElementById(id).style.setProperty('--background', '#00b4db');
        document.getElementById(id).style.setProperty('--color', 'white');
    }
    getAllgifts() {
        this.service.getGifts().subscribe(gift => {
            this.giftList = gift;
        });
    }
    getAllCategories() {
        this.service.getCategories().subscribe(cat => {
            this.categoriesList = cat;
        });
    }
    scrollToGiftsList() {
        var elementToScroll = document.getElementById("allGifts");
        this.content.scrollToPoint(0, elementToScroll.offsetTop - 60, 500);
    }
    openDetail(gift) {
        this.router.navigateByUrl(`/tabs/gifts/gift-detail/` + gift.id + `/` + gift.marque);
    }
};
GiftsPage.ctorParameters = () => [
    { type: _service_mock_service__WEBPACK_IMPORTED_MODULE_2__.MockService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
GiftsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, { static: false },] }]
};
GiftsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-gifts',
        template: _gifts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gifts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftsPage);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 3833:
/*!**************************************************!*\
  !*** ./src/app/gifts/gifts.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  font-size: 14px;\n  font-family: \"Nunito\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImdpZnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxufSJdfQ== */";

/***/ }),

/***/ 4606:
/*!**************************************************!*\
  !*** ./src/app/gifts/gifts.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tous les cadeaux</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-searchbar [(ngModel)]=\"Filter\" placeholder=\"Search\" (ionFocus)=\"onChangeEvent($event)\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\">\r\n  <div class=\"title ion-padding\">\r\n    <h4>Catégories</h4>\r\n    <p>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"scrolling-wrapper\">\r\n    <ion-button id=\"allGiftsBtn\" class=\"category-btn\" fill=\"outline\" (click)=\"initialElements()\">\r\n      <p>Tous</p>\r\n    </ion-button>\r\n    <div class=\"card\" *ngFor=\"let categorie of categoriesList\">\r\n      <ion-button [id]=\"categorie.id\" (click)=\"FilterCategory(categorie.id, categorie.libelle)\" class=\"category-btn\"\r\n        fill=\"outline\">\r\n        <img src=\"/assets/img/categories/{{ categorie.image }}\" />\r\n        <p>{{ categorie.libelle }}</p>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"allGifts\" class=\"title ion-padding\">\r\n    <h4>Tous les cadeaux</h4>\r\n    <p>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </p>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let gift of giftList | filter:Filter\" size=\"6\" size-lg=\"3\" size-md=\"4\">\r\n        <ion-card (click)=\"openDetail(gift)\">\r\n          <img src=\"/assets/img/gifts/{{ gift.image }}\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>{{ gift.nbPoints }} points</ion-card-subtitle>\r\n            <ion-card-title>{{ gift.marque }}</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_gifts_gifts_module_ts.js.map