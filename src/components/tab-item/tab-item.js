import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { TcBadge } from "../badge";
var TcTabItem = /** @class */ (function(_super) {
  tslib_1.__extends(TcTabItem, _super);
  function TcTabItem() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.currentRoute = "";
    return _this;
  }
  tslib_1.__decorate(
    [Prop({ required: true })],
    TcTabItem.prototype,
    "title",
    void 0
  );
  tslib_1.__decorate(
    [Prop({ default: false })],
    TcTabItem.prototype,
    "active",
    void 0
  );
  tslib_1.__decorate([Prop()], TcTabItem.prototype, "route", void 0);
  tslib_1.__decorate([Prop()], TcTabItem.prototype, "badge", void 0);
  tslib_1.__decorate(
    [
      Prop({
        default: "medium",
        validator: function(value) {
          return ["small", "medium", "large"].indexOf(value) > -1;
        }
      })
    ],
    TcTabItem.prototype,
    "size",
    void 0
  );
  TcTabItem = tslib_1.__decorate(
    [
      Component({
        components: {
          TcBadge: TcBadge
        }
      })
    ],
    TcTabItem
  );
  return TcTabItem;
})(Vue);
export default TcTabItem;
//# sourceMappingURL=tab-item.js.map
