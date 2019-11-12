import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcLabelStatus = /** @class */ (function (_super) {
    tslib_1.__extends(TcLabelStatus, _super);
    function TcLabelStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcLabelStatus.prototype, "status", void 0);
    TcLabelStatus = tslib_1.__decorate([
        Component({})
    ], TcLabelStatus);
    return TcLabelStatus;
}(Vue));
export default TcLabelStatus;
//# sourceMappingURL=label-status.js.map