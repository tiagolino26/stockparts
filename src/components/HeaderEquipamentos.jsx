import IconLess from "../assets/icon/less-than.png";
import "./HeaderEquipamentos.css";

function HeaderEquipamentos() {
  return (
    <>
      <header className="cabecalho-equipamentos">
        <div className="cabecalho-equipamentos-maquina">
          <div>
            <button className="btn-equipamentos">
              {" "}
              <img
                src={IconLess}
                alt="icon"
                className="btn-equipamentos-icon"
              />
              Equipamentos
            </button>
          </div>
          <div className="description-equipamentos">
            <h3>Liofilizador</h3>
            <p>Controle de Peças</p>
          </div>
        </div>
        <button className="nova-peca"> + Nova Peças</button>
      </header>
      <div className="titulo-decription">
        <div className="titulo-decription-head">
          <span>estoque de peças</span>
          <h4>Liofilizador</h4>
          <p>Liofilizador de vacinas</p>
        </div>
        <div className="titulo-decription-body">          
          <div className="titulo-decription-item">
            <span>6</span>
            <p>Total de Itens</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default HeaderEquipamentos;
