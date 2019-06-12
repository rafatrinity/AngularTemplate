import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RtTemplateService = /** @class */ (function () {
    function RtTemplateService() {
    }
    RtTemplateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RtTemplateService.ctorParameters = function () { return []; };
    /** @nocollapse */ RtTemplateService.ngInjectableDef = defineInjectable({ factory: function RtTemplateService_Factory() { return new RtTemplateService(); }, token: RtTemplateService, providedIn: "root" });
    return RtTemplateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RtTemplateComponent = /** @class */ (function () {
    function RtTemplateComponent() {
    }
    /**
     * @return {?}
     */
    RtTemplateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RtTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-rt-template',
                    template: "\n    <p>\n      rt-template works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    RtTemplateComponent.ctorParameters = function () { return []; };
    return RtTemplateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RtTemplateModule = /** @class */ (function () {
    function RtTemplateModule() {
    }
    RtTemplateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [RtTemplateComponent],
                    imports: [],
                    exports: [RtTemplateComponent]
                },] }
    ];
    return RtTemplateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { RtTemplateService, RtTemplateComponent, RtTemplateModule };

//# sourceMappingURL=rt-template.js.map