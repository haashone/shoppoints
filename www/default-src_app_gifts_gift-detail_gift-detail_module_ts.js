"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_gifts_gift-detail_gift-detail_module_ts"],{

/***/ 3155:
/*!*****************************************************************!*\
  !*** ./src/app/gifts/gift-detail/gift-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftDetailPageRoutingModule": () => (/* binding */ GiftDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gift_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-detail.page */ 7133);




const routes = [
    {
        path: '',
        component: _gift_detail_page__WEBPACK_IMPORTED_MODULE_0__.GiftDetailPage
    }
];
let GiftDetailPageRoutingModule = class GiftDetailPageRoutingModule {
};
GiftDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiftDetailPageRoutingModule);



/***/ }),

/***/ 9264:
/*!*********************************************************!*\
  !*** ./src/app/gifts/gift-detail/gift-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftDetailPageModule": () => (/* binding */ GiftDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _gift_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-detail-routing.module */ 3155);
/* harmony import */ var _gift_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-detail.page */ 7133);







let GiftDetailPageModule = class GiftDetailPageModule {
};
GiftDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gift_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiftDetailPageRoutingModule
        ],
        declarations: [_gift_detail_page__WEBPACK_IMPORTED_MODULE_1__.GiftDetailPage]
    })
], GiftDetailPageModule);



/***/ }),

/***/ 7133:
/*!*******************************************************!*\
  !*** ./src/app/gifts/gift-detail/gift-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftDetailPage": () => (/* binding */ GiftDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gift_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-detail.page.html?ngResource */ 5486);
/* harmony import */ var _gift_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-detail.page.scss?ngResource */ 1559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/mock.service */ 2997);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let GiftDetailPage = class GiftDetailPage {
    constructor(service, router, activatedRoute, toastCtrl) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.giftID = '';
        this.giftMark = '';
        this.selectedGift = {};
        this.slideOpts = {};
        this.quantity = 1;
        this.similarGifts = [];
        this.MAX_QUANTITY = 3;
    }
    ngOnInit() {
        this.giftID = this.activatedRoute.snapshot.paramMap.get('id');
        this.giftMark = this.activatedRoute.snapshot.paramMap.get('giftMark');
        this.geetSelectedGift(this.giftID);
        this.getSimilarGifts();
    }
    geetSelectedGift(ID) {
        this.service.getGifts().subscribe(g => {
            this.selectedGift = g.filter(x => x.id === parseInt(ID))[0];
        });
    }
    getSimilarGifts() {
        this.service.getGifts().subscribe(g => {
            this.similarGifts = g.filter(x => x.categorie === this.selectedGift["categorie"])
                .filter(y => y.id != this.giftID);
        });
    }
    increaseQuantity() {
        if (this.quantity < this.MAX_QUANTITY) {
            this.quantity++;
        }
        else {
            this.showToast("Maximum 3 cadeaux", "");
        }
    }
    decreaseQuantity() {
        if (this.quantity >= 1) {
            this.quantity--;
        }
    }
    addToCart() {
        if (this.quantity == 1) {
            this.showToast("Cadeau ajouté avec succès", "success");
        }
        else {
            this.showToast("Cadeaux ajoutés avec succès", "success");
        }
    }
    openDetail(gift) {
        this.router.navigateByUrl(`/tabs/gifts/gift-detail/` + gift.id + `/` + gift.marque);
    }
    showToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom',
                animated: true,
                color: color
            });
            toast.present();
        });
    }
};
GiftDetailPage.ctorParameters = () => [
    { type: src_app_service_mock_service__WEBPACK_IMPORTED_MODULE_2__.MockService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
GiftDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gift-detail',
        template: _gift_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gift_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftDetailPage);



/***/ }),

/***/ 1559:
/*!********************************************************************!*\
  !*** ./src/app/gifts/gift-detail/gift-detail.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-card img {\n  width: 70%;\n  height: 70%;\n}\n\n.gift-container {\n  margin-top: 10px;\n  margin-left: 8px;\n}\n\n.gift-mark-title p {\n  font-family: \"Nunito\";\n  font-size: 15px;\n  color: gray;\n}\n\n.gift-name-title p {\n  font-family: \"Nunito\";\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: -5px;\n}\n\n.points-holder p {\n  font-family: \"Nunito\";\n  margin-top: -10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.btn-holder {\n  text-align: right;\n  margin-top: 5px;\n}\n\nion-accordion {\n  margin-top: 20px;\n}\n\n.gift-description p {\n  line-height: 1.3;\n}\n\n.quantity-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 10px 0px;\n  font-size: 15px;\n  font-family: \"Nunito\";\n}\n\n.btn-add-to-cart {\n  text-align: center;\n}\n\n.btn-quantity-holder {\n  --background: transparent;\n  --border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  color: black;\n  font-size: 7px;\n  font-weight: 800;\n}\n\n.similar-gift-list img {\n  width: 50%;\n  height: 50%;\n}\n\n.similar-gift-list ion-card-subtitle {\n  font-family: \"Nunito\";\n}\n\n.similar-gift-list h6 {\n  font-size: 15px;\n  font-family: \"Nunito\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQVI7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlI7O0FBT0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBU0k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTlI7O0FBV0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBWUk7RUFDSSxnQkFBQTtBQVRSOztBQWFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7QUFWSjs7QUFhQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFjSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBWFI7O0FBY0k7RUFDSSxxQkFBQTtBQVpSOztBQWVJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBYlIiLCJmaWxlIjoiZ2lmdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ2lmdC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5naWZ0LW1hcmstdGl0bGUge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxufVxyXG5cclxuLmdpZnQtbmFtZS10aXRsZSB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50cy1ob2xkZXIge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1ob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1hY2NvcmRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmdpZnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIH1cclxufVxyXG5cclxuLnF1YW50aXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxufVxyXG5cclxuLmJ0bi1hZGQtdG8tY2FydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcXVhbnRpdHktaG9sZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc2ltaWxhci1naWZ0LWxpc3Qge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICB9XHJcblxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 5486:
/*!********************************************************************!*\
  !*** ./src/app/gifts/gift-detail/gift-detail.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{giftMark}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div>\n    <ion-card>\n      <ion-slides pager=\"true\">\n        <ion-slide *ngFor=\"let img of selectedGift.imageDetail\">\n          <img src=\"assets/img/gifts/details/{{img}}\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n  </div>\n\n\n  <div class=\"gift-container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <div class=\"gift-mark-title\">\n            <p>#{{selectedGift.marque}}</p>\n          </div>\n\n        </ion-col>\n        <ion-col class=\"btn-holder\">\n          <ion-icon color=\"danger\" size=\"large\" name=\"heart-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <div class=\"ion-padding-horizontal\">\n    <div class=\"gift-name-title\">\n      <p>{{selectedGift.libelle}}</p>\n    </div>\n    <div class=\"points-holder\">\n      <p>\n        {{selectedGift.nbPoints}} points\n      </p>\n    </div>\n  </div>\n\n  <div class=\"quantity-container\">\n\n    <ion-button class=\"btn-quantity-holder\" *ngIf=\"quantity==1; else decrease\" disabled>\n      <ion-icon name=\"remove\"></ion-icon>\n    </ion-button>\n\n    <ng-template #decrease>\n      <ion-button class=\"btn-quantity-holder\" (click)=\"decreaseQuantity()\">\n        <ion-icon name=\"remove\"></ion-icon>\n      </ion-button>\n    </ng-template>\n\n    <p>{{quantity}}</p>\n    <ion-button class=\"btn-quantity-holder\" (click)=\"increaseQuantity()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <div class=\"btn-add-to-cart\">\n    <ion-button color=\"danger\" (click)=\"addToCart()\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <p>Ajouter</p>\n    </ion-button>\n  </div>\n\n  <ion-accordion-group>\n    <ion-accordion>\n      <ion-item slot=\"header\">\n        <div class=\"title\">\n          <h4>Description</h4>\n        </div>\n      </ion-item>\n      <ion-list slot=\"content\">\n        <div class=\"gift-description ion-padding-horizontal\">\n          <p>\n            {{selectedGift.description}}\n          </p>\n        </div>\n      </ion-list>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <div class=\"title ion-padding\">\n    <h4>Même catégorie</h4>\n  </div>\n\n  <div class=\"similar-gift-list\">\n    <ion-slides pager=\"true\">\n      <ion-slide *ngFor=\"let gift of similarGifts\">\n        <ion-card (click)=\"openDetail(gift)\">\n          <img src=\"/assets/img/gifts/{{ gift.image }}\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{ gift.nbPoints }} points</ion-card-subtitle>\n            <h6>{{ gift.marque }}</h6>\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_gifts_gift-detail_gift-detail_module_ts.js.map