import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import equipamentos from "../data/listaEquipamentos";
import IconLupa from "../assets/icon/lupa.png";
import IconEditar from "../assets/icon/edit.png";
import IconExcluir from "../assets/icon/full-trash.png";
import "./ContainerEquipamentos.css";

// fetch buscando da lista mockada equipamentos, com backend virá da api / banco de dados.
fetch("/api/equipamentos");

function ContainerEquipamentos() {
  const [equipamento, setEquipamento] = useState(null);
  const [total, setTotal] = useState(0);
  const [busca, setBusca] = useState("");

  // pega dados da url, onde o id vem da rota do App
  const { id } = useParams();
  console.log(id);
  //.find() usa esse id pra achar o equipamento certo.

  // 🔹 pega equipamento pelo id da URL
  useEffect(() => {
    const encontrado = equipamentos.find((e) => e.id === Number(id));
    setEquipamento(encontrado);
  }, [id]);

  // 🔍 filtro de bucar por nome e código da peça.
  const pecasFiltradas = equipamento?.pecas.filter((p) => {
    return (
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.codigo.toLowerCase().includes(busca.toLowerCase())
    );
  });

  // 💰 total baseado no filtro
  useEffect(() => {
    if (!pecasFiltradas) return;

    let soma = 0;

    for (const peca of equipamento.pecas) {
      soma += peca.preco;
    }

    setTotal(soma);
  }, [pecasFiltradas]);

  return (
    <section id="container-equipamentos">
      <div className="container-equipamentos-head">
        <div className="input-container">
          <img src={IconLupa} alt="Lupa" className="input-container-icon" />

          <input
            className="input"
            type="text"
            placeholder="Buscar peça, código"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <button className="btn-input">Acrescentar</button>
        <button className="btn-input">Retirar</button>
        <button className="btn-input">Deletar</button>
      </div>

      <div className="container-equipamentos-body">
        <table>
          <thead className="table-head">
            <tr>
              <th>Código</th>
              <th>Peça</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Grandeza</th>
              <th>Preço Unit.</th>
              <th>Localização</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {pecasFiltradas?.map((p) => (
              <tr key={p.id}>
                <td className="code">{p.codigo}</td>
                <td>{p.nome}</td>
                <td>{p.categoria}</td>
                <td>{p.estoque}</td>
                <td>{p.unidade}</td>
                <td>
                  {p.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{p.localizacao}</td>
                <td>{p.status}</td>
                <td className="btn-editar-excluir"></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="container-equipamentos-footer">
          <span>{pecasFiltradas?.length} resultados</span>
          <span>
            Valor filtrado:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContainerEquipamentos;
