import "./HeaderHome.css";

function HeaderHome() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <div>
          <img
            src="https://d335luupugsy2.cloudfront.net/images%2Flanding_page%2F127980%2Fshare.jpg"
            alt="logo"
          />
        </div>
        <div className="logo-text">
          <h3>StockParts</h3>
          <p><span>Controle de estoque</span></p>
        </div>
      </div>
      <div className="criar">
        <h3>Criar Equipamento</h3>
        <button className="btn-add">Adicionar</button>
      </div>
    </header>
  );
}

export default HeaderHome;
