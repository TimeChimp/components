import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from "vue-property-decorator";
var TcFormField = /** @class */ (function (_super) {
    tslib_1.__extends(TcFormField, _super);
    function TcFormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcFormField.prototype, "title", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcFormField.prototype, "subtext", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcFormField.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcFormField.prototype, "required", void 0);
    TcFormField = tslib_1.__decorate([
        Component({})
    ], TcFormField);
    return TcFormField;
}(Vue));
export default TcFormField;
//# sourceMappingURL=form-field.js.map