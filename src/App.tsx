import { defineComponent } from "vue";
import styled, { ThemeProvider } from "vue3-styled-components";
import Example from "./components/Example";

const theme = {};

const Wrapper = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
`;

export default defineComponent({
  name: "App",
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Example msg="Vite + Vue + Tsx + Styled Components example" />
        </Wrapper>
      </ThemeProvider>
    );
  },
});
