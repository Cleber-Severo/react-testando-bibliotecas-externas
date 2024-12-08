import { Provider } from "react-redux";
import Home from ".";
import store from "../../store";
import { render } from "test-utils";

describe("Testando a página Home", () => {
  test("Testando", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(true).toBeTruthy();
  });
});
