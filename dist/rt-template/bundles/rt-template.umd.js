(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('rt-template', ['exports', '@angular/core'], factory) :
    (factory((global['rt-template'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RtTemplateService = /** @class */ (function () {
        function RtTemplateService() {
        }
        RtTemplateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RtTemplateService.ctorParameters = function () { return []; };
        /** @nocollapse */ RtTemplateService.ngInjectableDef = i0.defineInjectable({ factory: function RtTemplateService_Factory() { return new RtTemplateService(); }, token: RtTemplateService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.RtTemplateService = RtTemplateService;
    exports.RtTemplateComponent = RtTemplateComponent;
    exports.RtTemplateModule = RtTemplateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=rt-template.umd.js.map