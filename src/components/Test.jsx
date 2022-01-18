import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div>
        {this.$slots.header()}
        <div>{this.$slots.default()}</div>
      </div>
    );
  },
});
