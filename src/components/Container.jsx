import EquipamentoCard from "./EquipamentoCard";
import "./Container.css";

// lista mocada
const equipamentos = [
  {
    id: 1,
    imagem:
      "https://www.unsw.edu.au/content/dam/images/research-and-enterprise/mwac/cell-culture-facility/instruments/2025-02-3-mwac-cell-culture/2025-01-28-getinge-hs-lab-steam-sterilizer.cropimg.width=700.crop=square.jpg",
    titulo: "AutoClave",
    descricao: "Equipamento de Descontaminação / Esterilização",
    quantidade: 2,
    status: "Normal",
    link: "/equipamento",
  },
  {
    id: 2,
    imagem:
      "https://lomfiller.com/wp-content/uploads/2024/04/aseptic-filling-machines-3.png",
    titulo: "Envase",
    descricao: "Equipamento para Envasar Vacina",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
  },
  {
    id: 3,
    imagem:
      "https://img-5-pt-br-camargoindustrial.camargoindustrial.com.br/_fonte/foto.asp?e=IMA+Farmomac+F570&c=734-052001&t=2",
    titulo: "Recrave",
    descricao: "Equipamento de Recravação",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
  },
  {
    id: 4,
    imagem:
      "https://imagroup.com/wp-content/uploads/2025/07/FFRDL04_0058_LYOMAX-15_Integral-condenser_Therm-fisher_USA_Generale.jpg",
    titulo: "Liofilizador",
    descricao: "Equipamento de Liofilização",
    quantidade: 2,
    status: "Normal",
    link: "/equipamento",
  },
  {
    id: 5,
    imagem:
      "https://aetec.org.br/wp-content/uploads/2023/11/HVCA-foto-1-1030x542.jpg",
    titulo: "HVAC",
    descricao: "Equipamento Purificação do Ar",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
  },
];

function Container() {
  return (
    <div className="container">
      {equipamentos.map((equipamento) => (
        <EquipamentoCard equipamento={equipamento} />
      ))}
    </div>
  );
}

export default Container;
