import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcSectionTabsButton = /** @class */ (function (_super) {
    tslib_1.__extends(TcSectionTabsButton, _super);
    function TcSectionTabsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcSectionTabsButton.prototype, "title", void 0);
    tslib_1.__decorate([
        Prop({ default: true })
    ], TcSectionTabsButton.prototype, "line", void 0);
    tslib_1.__decorate([
        Prop({ default: false })
    ], TcSectionTabsButton.prototype, "active", void 0);
    TcSectionTabsButton = tslib_1.__decorate([
        Component({})
    ], TcSectionTabsButton);
    return TcSectionTabsButton;
}(Vue));
export default TcSectionTabsButton;
//# sourceMappingURL=section-tabs-button.js.map