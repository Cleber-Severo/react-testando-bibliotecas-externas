import buscaReducer, { mudarBusca, resetarBusca } from "./busca";

describe("testando busca reducer", () => {
  test("deve mudar busca como esperado", () => {
    expect(buscaReducer("", mudarBusca("teste"))).toEqual("teste");
  });

  test("deve resetar busca como esperado", () => {
    expect(buscaReducer("outro valor", resetarBusca())).toEqual("");
  });

  test("deve mudar de volante para fone", () => {
    expect(buscaReducer("volante", mudarBusca("fone"))).toEqual("fone");
  });
});
