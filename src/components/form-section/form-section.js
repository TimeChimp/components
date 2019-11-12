import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from "vue-property-decorator";
var TcFormSection = /** @class */ (function (_super) {
    tslib_1.__extends(TcFormSection, _super);
    function TcFormSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcFormSection.prototype, "contentCol", {
        get: function () {
            switch (this.size) {
                case "s":
                    return 5;
                case "m":
                    return 6;
                case "l":
                    return 9;
                case "xl":
                    return 9;
                default:
                    return 6;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcFormSection.prototype, "title", void 0);
    tslib_1.__decorate([
        Prop({ default: true })
    ], TcFormSection.prototype, "line", void 0);
    tslib_1.__decorate([
        Prop({
            default: "m",
            validator: function (value) {
                return ["s", "m", "l", "xl"].indexOf(value) > -1;
            }
        })
    ], TcFormSection.prototype, "size", void 0);
    TcFormSection = tslib_1.__decorate([
        Component({})
    ], TcFormSection);
    return TcFormSection;
}(Vue));
export default TcFormSection;
//# sourceMappingURL=form-section.js.map