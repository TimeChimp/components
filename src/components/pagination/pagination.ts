import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class TcPagination extends Vue {
  @Prop({ default: 1 }) private total: number;
  @Prop({ default: 10 }) private perPage: number;
  @Prop({ default: 1 }) private current: number;

  @Watch("pageCount")
  private pageCountChanged(value: number) {
    if (value && this.current > value) {
      this.last();
    }
  }

  private get pageCount() {
    return Math.ceil(this.total / this.perPage);
  }

  private get firstItem() {
    const firstItem = this.current * this.perPage - this.perPage + 1;
    return firstItem >= 0 ? firstItem : 0;
  }

  private get hasFirst() {
    return this.current >= 3;
  }

  private get hasFirstEllipsis() {
    return this.current >= 4;
  }

  private get hasLast() {
    return this.current <= this.pageCount - 2;
  }

  private get hasLastEllipsis() {
    return (
      this.current < this.pageCount - 2 && this.current <= this.pageCount - 3
    );
  }

  private get pagesInRange() {
    const left = Math.max(1, this.current - 1);
    const right = Math.min(this.current + 1, this.pageCount);
    const pages = [];

    for (let i = left; i <= right; i++) {
      pages.push({
        number: i,
        isCurrent: this.current === i,
        click: (event: any) => {
          if (this.current === i) {
            return;
          }

          this.$emit("change", i);
          this.$emit("update:current", i);

          this.$nextTick(() => event.target.focus());
        }
      });
    }

    return pages;
  }

  private first() {
    this.$emit("change", 1);
    this.$emit("update:current", 1);
  }

  private last() {
    this.$emit("change", this.pageCount);
    this.$emit("update:current", this.pageCount);
  }
}
