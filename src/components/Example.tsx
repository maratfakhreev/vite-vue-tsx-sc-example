import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import img from "../assets/logo.png";
import Draggable from "vuedraggable";
import Test from "./Test";

const Wrapper = styled.div`
  a {
    color: #42b983;
  }
`;

export default defineComponent({
  name: "Example",
  props: {
    msg: { type: String, required: true },
  },
  data() {
    return {
      count: 1,
      values: [
        { id: 1, value: "zzzz" },
        { id: 2, value: "aaaa" },
        { id: 3, value: "Kitty" },
      ],
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  render() {
    return (
      <Wrapper>
        <img alt="Vue logo" src={img} />
        <h1>{this.msg}</h1>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Documentation
          </a>
          {" | "}
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Documentation
          </a>
        </p>
        <button type="button" onClick={this.increment}>
          count is: {this.count}
        </button>
        <div>
          <Draggable
            list={this.values}
            itemKey="id"
            v-slots={{
              item: ({ element }) => {
                return <div>{element.value}</div>;
              },
            }}
          />
        </div>
        <div>
          <Test
            v-slots={{
              header: () => <span>header</span>,
            }}
          >
            <span>DEFAULT</span>
          </Test>
        </div>
        <p>
          Edit <code>components/Example.tsx</code> to test hot module
          replacement.
        </p>
      </Wrapper>
    );
  },
});
