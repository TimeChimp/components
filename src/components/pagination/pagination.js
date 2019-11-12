import * as tslib_1 from "tslib";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
var TcPagination = /** @class */ (function(_super) {
  tslib_1.__extends(TcPagination, _super);
  function TcPagination() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TcPagination.prototype.pageCountChanged = function(value) {
    if (value && this.current > value) {
      this.last();
    }
  };
  Object.defineProperty(TcPagination.prototype, "pageCount", {
    get: function() {
      return Math.ceil(this.total / this.perPage);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "firstItem", {
    get: function() {
      var firstItem = this.current * this.perPage - this.perPage + 1;
      return firstItem >= 0 ? firstItem : 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "hasFirst", {
    get: function() {
      return this.current >= 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "hasFirstEllipsis", {
    get: function() {
      return this.current >= 4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "hasLast", {
    get: function() {
      return this.current <= this.pageCount - 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "hasLastEllipsis", {
    get: function() {
      return (
        this.current < this.pageCount - 2 && this.current <= this.pageCount - 3
      );
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TcPagination.prototype, "pagesInRange", {
    get: function() {
      var _this = this;
      var left = Math.max(1, this.current - 1);
      var right = Math.min(this.current + 1, this.pageCount);
      var pages = [];
      var _loop_1 = function(i) {
        pages.push({
          number: i,
          isCurrent: this_1.current === i,
          click: function(event) {
            if (_this.current === i) {
              return;
            }
            _this.$emit("change", i);
            _this.$emit("update:current", i);
            _this.$nextTick(function() {
              return event.target.focus();
            });
          }
        });
      };
      var this_1 = this;
      for (var i = left; i <= right; i++) {
        _loop_1(i);
      }
      return pages;
    },
    enumerable: true,
    configurable: true
  });
  TcPagination.prototype.first = function() {
    this.$emit("change", 1);
    this.$emit("update:current", 1);
  };
  TcPagination.prototype.last = function() {
    this.$emit("change", this.pageCount);
    this.$emit("update:current", this.pageCount);
  };
  tslib_1.__decorate(
    [Prop({ default: 1 })],
    TcPagination.prototype,
    "total",
    void 0
  );
  tslib_1.__decorate(
    [Prop({ default: 10 })],
    TcPagination.prototype,
    "perPage",
    void 0
  );
  tslib_1.__decorate(
    [Prop({ default: 1 })],
    TcPagination.prototype,
    "current",
    void 0
  );
  tslib_1.__decorate(
    [Watch("pageCount")],
    TcPagination.prototype,
    "pageCountChanged",
    null
  );
  TcPagination = tslib_1.__decorate([Component({})], TcPagination);
  return TcPagination;
})(Vue);
export default TcPagination;
//# sourceMappingURL=pagination.js.map
