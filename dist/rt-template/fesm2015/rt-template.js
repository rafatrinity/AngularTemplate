import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RtTemplateService {
    constructor() { }
}
RtTemplateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RtTemplateService.ctorParameters = () => [];
/** @nocollapse */ RtTemplateService.ngInjectableDef = defineInjectable({ factory: function RtTemplateService_Factory() { return new RtTemplateService(); }, token: RtTemplateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RtTemplateComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RtTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-rt-template',
                template: `
    <p>
      rt-template works!
    </p>
  `
            }] }
];
/** @nocollapse */
RtTemplateComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RtTemplateModule {
}
RtTemplateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RtTemplateComponent],
                imports: [],
                exports: [RtTemplateComponent]
            },] }
];

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