import IconLupa from "../assets/icon/lupa.png";
import IconEditar from "../assets/icon/edit.png";
import IconExcluir from "../assets/icon/full-trash.png";

import "./ContainerEquipamentos.css";

const equipamentos = [
  {
    id: 1,
    codigo: "BOM-VAC-D25B",
    peca: "Bomba de Vácuo Edwards D25B",
    categoria: "Vácuo",
    estoque: 1,
    unidade: "un",
    preco: 15800.0,
    localizacao: "A1-S0",
    status: "Ativo",
  },
  {
    id: 2,
    codigo: "VAL-INOX-025",
    peca: "Válvula Esfera Inox 1/2",
    categoria: "Válvulas",
    estoque: 8,
    unidade: "un",
    preco: 420.5,
    localizacao: "B2-S1",
    status: "Ativo",
  },
  {
    id: 3,
    codigo: "MAN-DIG-010",
    peca: "Manômetro Digital",
    categoria: "Instrumentação",
    estoque: 3,
    unidade: "un",
    preco: 980.9,
    localizacao: "C1-S3",
    status: "Ativo",
  },
  {
    id: 4,
    codigo: "VED-OR-050",
    peca: "Anel O-Ring Viton",
    categoria: "Vedações",
    estoque: 50,
    unidade: "un",
    preco: 18.9,
    localizacao: "D4-S2",
    status: "Ativo",
  },
  {
    id: 5,
    codigo: "REF-COM-001",
    peca: "Compressor Hermético",
    categoria: "Refrigeração",
    estoque: 2,
    unidade: "un",
    preco: 3540.0,
    localizacao: "E1-S1",
    status: "Manutenção",
  },
  {
    id: 6,
    codigo: "VAC-FLT-100",
    peca: "Filtro para Bomba de Vácuo",
    categoria: "Vácuo",
    estoque: 15,
    unidade: "un",
    preco: 165.75,
    localizacao: "A2-S2",
    status: "Ativo",
  },
];

function ContainerEquipamentos() {
  return (
    <section id="container-equipamentos">
      <div className="container-equipamentos-head">
        <div className="input-container">
          <img src={IconLupa} alt="Lupa" className="input-container-icon" />

          <input
            className="input"
            type="text"
            placeholder="Bucar peça, código"
          />
        </div>

        <button className="btn-input">Todos</button>
      </div>

      <div className="container-equipamentos-body">
        <table>
          <thead className="table-head">
            <tr>
              <th>código</th>
              <th>Peça</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Grandeza</th>
              <th>Preço Unit.</th>
              <th>Localização</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          {/* vem da lista mockada e depois de criado do backend */}
          <tbody>
            {equipamentos.map((equipamento) => (
              <tr key={equipamento.id}>
                <td className="code">{equipamento.codigo}</td>
                <td>{equipamento.peca}</td>
                <td>{equipamento.categoria}</td>
                <td>{equipamento.estoque}</td>
                <td>{equipamento.unidade}</td>
                <td>
                  {equipamento.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{equipamento.localizacao}</td>
                <td>{equipamento.status}</td>

                <td className="btn-editar-excluir">
                  <button >
                    <img src={IconEditar} alt="Editar" className="btn-editar"/>
                  </button>

                  <button>
                    <img src={IconExcluir} alt="Excluir" className="btn-excluir"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container-equipamentos-footer">
          <span>6 resultados</span>
          <span>Valor filtrado: R$22.000</span>
        </div>
      </div>
    </section>
  );
}

export default ContainerEquipamentos;
