import { Link, useNavigate } from "react-router-dom";
import IconLessThan from "../assets/icon/less-than.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HeaderEquipamentos.css";
import equipamentos from "../data/listaEquipamentos";

// fetch buscando da lista mockada equipamentos, com backend virá da api / banco de dados.
fetch("/api/equipamentos");

//

function HeaderEquipamentos() {
  const [equipamento, setEquipamento] = useState(null);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setEquipamento(equipamentos.find((e) => e.id == id));
  }, []);

  const navigateHeaderEquipamentos = useNavigate();
  return (
    <>
      <header className="cabecalho-equipamentos">
        <div className="cabecalho-equipamentos-maquina">
          <div>
            <button
              className="btn-equipamentos"
              onClick={() => {
                navigateHeaderEquipamentos("/");
              }}
            >
              <img
                src={IconLessThan}
                alt="icon"
                className="btn-equipamentos-icon"
              />
              Equipamentos
            </button>
          </div>
          <div className="description-equipamentos">
            <h3>{equipamento?.titulo}</h3>
            <p>{equipamento?.descricao}</p>
          </div>
        </div>
        <button className="btn-nova-peca"> + Nova Peças</button>
      </header>
      <div className="titulo-decription">
        <div className="titulo-decription-head">
          <span>estoque de peças</span>
          <h4>{equipamento?.titulo}</h4>
          <p>{equipamento?.descricao}</p>
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
