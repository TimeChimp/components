import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TimeIcon = function() {
  return import("./icons/time.vue");
};
var ExpenseIcon = function() {
  return import("./icons/expense.vue");
};
var MileageIcon = function() {
  return import("./icons/mileage.vue");
};
var TcTabsTem = /** @class */ (function(_super) {
  tslib_1.__extends(TcTabsTem, _super);
  function TcTabsTem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Object.defineProperty(TcTabsTem.prototype, "tab", {
    get: function() {
      return this.value;
    },
    set: function(value) {
      this.$emit("input", value);
    },
    enumerable: true,
    configurable: true
  });
  tslib_1.__decorate(
    [Prop({ default: "time" })],
    TcTabsTem.prototype,
    "value",
    void 0
  );
  TcTabsTem = tslib_1.__decorate(
    [
      Component({
        components: {
          TimeIcon: TimeIcon,
          ExpenseIcon: ExpenseIcon,
          MileageIcon: MileageIcon
        }
      })
    ],
    TcTabsTem
  );
  return TcTabsTem;
})(Vue);
export default TcTabsTem;
//# sourceMappingURL=tabs-tem.js.map
