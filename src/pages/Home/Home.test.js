import Home from ".";
import { render, screen } from "test-utils";
import userEvent from "@testing-library/user-event";
import { rotaAnuncie } from "routes";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../services/categorias");

describe("Testando a página Home", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Anuncie", () => {
    test("Deve redirecionar para a página anuncie", () => {
      render(<Home />);
      const botaoAnuncie = screen.getByTestId("home-botao-anunciar");

      userEvent.click(botaoAnuncie);

      expect(mockNavigate).toHaveBeenCalledWith(`/${rotaAnuncie}`);
    });
  });

  describe("Categorias", () => {});

  test("Deve renderizar a página Home com categorias", async () => {
    render(<Home />);

    const categorias = await screen.findAllByTestId("home-categorias");

    expect(categorias).toHaveLength(2);
  });
});
