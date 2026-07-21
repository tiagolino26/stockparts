import { Link, useNavigate } from "react-router-dom";
import "./EquipamentoCard.css";

function EquipamentoCard({ equipamento }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card"
        onClick={() => {
          navigate(equipamento.link);
        }}
      >
        <div className="card-head">
          <div className="gradient" />
          <img
            className="card-img"
            src={equipamento.imagem}
            alt={equipamento.titulo}
          />
          <h3 className="card-title">{equipamento.titulo}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{equipamento.descricao}</p>
          <div className="card-info"><h2 className="card-info-title">Quantidade:</h2> {equipamento.quantidade}</div>
        </div>
      </div>
    </>
  );
}

export default EquipamentoCard;
