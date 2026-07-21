import Container from "../components/container";
import Header from "../components/Header";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
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
        <div className="descricao-caixa">
          <h5>Equipamentos</h5>
          <h2>30</h2>
        </div>
        <div className="descricao-caixa">
          <h5>Equipamentos</h5>
          <h2>0</h2>
        </div>
        <div className="descricao-caixa">
          <h5>Equipamentos</h5>
          <h2>0</h2>
        </div>
      </div>
      <Container />
    </>
  );
}

export default HomePage;
