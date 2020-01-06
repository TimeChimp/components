import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcPopoverItem = /** @class */ (function(_super) {
  tslib_1.__extends(TcPopoverItem, _super);
  function TcPopoverItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  tslib_1.__decorate(
    [Prop({ required: true })],
    TcPopoverItem.prototype,
    "title",
    void 0
  );
  tslib_1.__decorate([Prop()], TcPopoverItem.prototype, "route", void 0);
  tslib_1.__decorate([Prop()], TcPopoverItem.prototype, "link", void 0);
  tslib_1.__decorate([Prop()], TcPopoverItem.prototype, "warning", void 0);
  TcPopoverItem = tslib_1.__decorate([Component({})], TcPopoverItem);
  return TcPopoverItem;
})(Vue);
export default TcPopoverItem;
//# sourceMappingURL=popover-item.js.map
