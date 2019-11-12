import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { formatUppercase } from "@timechimp-bv/helper-functions";
import { TcIcon } from "../icons";
var TcToggleColumn = /** @class */ (function(_super) {
  tslib_1.__extends(TcToggleColumn, _super);
  function TcToggleColumn() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Object.defineProperty(TcToggleColumn.prototype, "uppercaseTitle", {
    get: function() {
      return formatUppercase(this.title);
    },
    enumerable: true,
    configurable: true
  });
  tslib_1.__decorate(
    [Prop({ required: true })],
    TcToggleColumn.prototype,
    "title",
    void 0
  );
  tslib_1.__decorate(
    [Prop({ default: false })],
    TcToggleColumn.prototype,
    "draggable",
    void 0
  );
  tslib_1.__decorate(
    [Prop({ required: true })],
    TcToggleColumn.prototype,
    "active",
    void 0
  );
  TcToggleColumn = tslib_1.__decorate(
    [
      Component({
        components: {
          TcIcon: TcIcon
        }
      })
    ],
    TcToggleColumn
  );
  return TcToggleColumn;
})(Vue);
export default TcToggleColumn;
//# sourceMappingURL=toggle-column.js.map
