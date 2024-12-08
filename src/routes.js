import PaginaPadrao from "components/PaginaPadrao";
import Anuncie from "pages/Anuncie";
import Carrinho from "pages/Carrinho";
import Categoria from "pages/Categoria";
import Home from "pages/Home";
import Pagamento from "pages/Pagamento";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/home" element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="anuncie/:nomeCategoria" element={<Anuncie />} />
          <Route path="anuncie" element={<Anuncie />} />
          <Route path="pagamento" element={<Pagamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
