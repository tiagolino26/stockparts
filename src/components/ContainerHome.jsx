import EquipamentoCard from "./EquipamentoCard";
import "./ContainerHome.css";

const equipamentos = [
  {
    id: 1,
    name: "autoclave",
    imagem:
      "https://www.unsw.edu.au/content/dam/images/research-and-enterprise/mwac/cell-culture-facility/instruments/2025-02-3-mwac-cell-culture/2025-01-28-getinge-hs-lab-steam-sterilizer.cropimg.width=700.crop=square.jpg",
    titulo: "Autoclave",
    descricao: "Equipamento de Descontaminação / Esterilização",
    quantidade: 2,
    status: "Normal",
    link: "/equipamento",
    pecas: [
      {
        id: 1,
        codigo: "BOM-VAC-D25B",
        nome: "Bomba de Vácuo",
        categoria: "Vácuo",
        estoque: 1,
        unidade: "un",
        preco: 15800,
        localizacao: "A1-S0",
        status: "Ativo",
      },
      {
        id: 2,
        codigo: "VAL-VAC-D12A",
        nome: "Válvula de Vácuo",
        categoria: "Vácuo",
        estoque: 2,
        unidade: "un",
        preco: 920,
        localizacao: "A1-S1",
        status: "Ativo",
      },
    ],
  },
  {
    id: 2,
    name: "envase",
    imagem:
      "https://lomfiller.com/wp-content/uploads/2024/04/aseptic-filling-machines-3.png",
    titulo: "Envase",
    descricao: "Equipamento para Envasar Vacina",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
    pecas: [
      {
        id: 1,
        codigo: "BOM-ENV-E10",
        nome: "Bomba Dosadora",
        categoria: "Envase",
        estoque: 1,
        unidade: "un",
        preco: 7800,
        localizacao: "B1-S0",
        status: "Ativo",
      },
      {
        id: 2,
        codigo: "SEN-NVL-A05",
        nome: "Sensor de Nível",
        categoria: "Sensores",
        estoque: 3,
        unidade: "un",
        preco: 650,
        localizacao: "B1-S1",
        status: "Ativo",
      },
    ],
  },
  {
    id: 3,
    name: "recrave",
    imagem:
      "https://carbonatech.com.br/wp-content/uploads/2025/02/WhatsApp-Image-2025-04-09-at-14.43.29.jpeg",
    titulo: "Recrave",
    descricao: "Equipamento de Recravação",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
    pecas: [
      {
        id: 1,
        codigo: "ROL-RCV-X20",
        nome: "Rolo Recravador",
        categoria: "Recravação",
        estoque: 2,
        unidade: "un",
        preco: 3500,
        localizacao: "C1-S0",
        status: "Ativo",
      },
      {
        id: 2,
        codigo: "EIX-RCV-X02",
        nome: "Eixo Principal",
        categoria: "Estrutura",
        estoque: 1,
        unidade: "un",
        preco: 5400,
        localizacao: "C1-S1",
        status: "Ativo",
      },
    ],
  },
  {
    id: 4,
    name: "liofilizador",
    imagem:
      "https://imagroup.com/wp-content/uploads/2025/07/FFRDL04_0058_LYOMAX-15_Integral-condenser_Therm-fisher_USA_Generale.jpg",
    titulo: "Liofilizador",
    descricao: "Equipamento de Liofilização",
    quantidade: 2,
    status: "Normal",
    link: "/equipamento",
    pecas: [
      {
        id: 1,
        codigo: "CMP-LIO-Z15",
        nome: "Compressor",
        categoria: "Refrigeração",
        estoque: 1,
        unidade: "un",
        preco: 12400,
        localizacao: "D1-S0",
        status: "Ativo",
      },
      {
        id: 2,
        codigo: "VLV-LIO-Z08",
        nome: "Válvula Solenoide",
        categoria: "Refrigeração",
        estoque: 4,
        unidade: "un",
        preco: 890,
        localizacao: "D1-S1",
        status: "Ativo",
      },
    ],
  },
  {
    id: 5,
    name: "hvac",
    imagem:
      "https://aetec.org.br/wp-content/uploads/2023/11/HVCA-foto-1-1030x542.jpg",
    titulo: "HVAC",
    descricao: "Equipamento Purificação do Ar",
    quantidade: 1,
    status: "Normal",
    link: "/equipamento",
    pecas: [
      {
        id: 1,
        codigo: "FLT-HVC-H13",
        nome: "Filtro HEPA",
        categoria: "Filtragem",
        estoque: 6,
        unidade: "un",
        preco: 2300,
        localizacao: "E1-S0",
        status: "Ativo",
      },
      {
        id: 2,
        codigo: "MOT-HVC-M02",
        nome: "Motor Ventilador",
        categoria: "Ventilação",
        estoque: 2,
        unidade: "un",
        preco: 4800,
        localizacao: "E1-S1",
        status: "Ativo",
      },
    ],
  },
];

function ContainerHome() {
  return (
    <div className="ContainerHome">
      {equipamentos.map((equipamento) => (
        <EquipamentoCard equipamento={equipamento} />
      ))}
    </div>
  );
}

export default ContainerHome;
