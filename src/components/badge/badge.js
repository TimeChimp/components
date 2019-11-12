import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcBadge = /** @class */ (function (_super) {
    tslib_1.__extends(TcBadge, _super);
    function TcBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcBadge.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ default: "medium" })
    ], TcBadge.prototype, "size", void 0);
    TcBadge = tslib_1.__decorate([
        Component({})
    ], TcBadge);
    return TcBadge;
}(Vue));
export default TcBadge;
//# sourceMappingURL=badge.js.map