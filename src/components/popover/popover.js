import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcPopover = /** @class */ (function (_super) {
    tslib_1.__extends(TcPopover, _super);
    function TcPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop({ default: "app" })
    ], TcPopover.prototype, "type", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcPopover.prototype, "width", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcPopover.prototype, "right", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcPopover.prototype, "bottom", void 0);
    TcPopover = tslib_1.__decorate([
        Component({})
    ], TcPopover);
    return TcPopover;
}(Vue));
export default TcPopover;
//# sourceMappingURL=popover.js.map