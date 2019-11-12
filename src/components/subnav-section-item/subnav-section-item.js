import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { TcIcon } from "../icons";
var TcSubnavSectionItem = /** @class */ (function (_super) {
    tslib_1.__extends(TcSubnavSectionItem, _super);
    function TcSubnavSectionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcSubnavSectionItem.prototype, "route", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSubnavSectionItem.prototype, "app", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSubnavSectionItem.prototype, "permission", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSubnavSectionItem.prototype, "title", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSubnavSectionItem.prototype, "active", void 0);
    TcSubnavSectionItem = tslib_1.__decorate([
        Component({
            components: {
                TcIcon: TcIcon
            }
        })
    ], TcSubnavSectionItem);
    return TcSubnavSectionItem;
}(Vue));
export default TcSubnavSectionItem;
//# sourceMappingURL=subnav-section-item.js.map