import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcLabel = /** @class */ (function (_super) {
    tslib_1.__extends(TcLabel, _super);
    function TcLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcLabel.prototype, "title", void 0);
    tslib_1.__decorate([
        Prop({
            default: "medium",
            validator: function (value) {
                return ["micro", "small", "medium", "large"].indexOf(value) > -1;
            }
        })
    ], TcLabel.prototype, "size", void 0);
    TcLabel = tslib_1.__decorate([
        Component({})
    ], TcLabel);
    return TcLabel;
}(Vue));
export default TcLabel;
//# sourceMappingURL=label.js.map