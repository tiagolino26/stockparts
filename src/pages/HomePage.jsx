import HeaderHome from "../components/HeaderHome";
import ContainerHome from "../components/ContainerHome";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeaderHome />
      <div className="titulo">
        <h5>GESTÃO DE EQUIPAMENTOS</h5>
        <h1>Selecione um Equipamento</h1>
        <p>
          Acesse o controle de estoque de peças de cada equipamento. Gerencie
          quantidades, cadastre novas peças e consulte QR codes.
        </p>
      </div>
      <div className="descricao">
        <div className="descricao-caixa">
          <h5>Equipamentos</h5>
          <h2>5</h2>
        </div>
      </div>
      <ContainerHome />
    </>
  );
}

export default HomePage;
