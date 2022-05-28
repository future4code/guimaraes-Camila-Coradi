enum setor {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Colaboradores = {
  nome: string;
  salário: number;
  setor: string;
  presencial: boolean;
};

const Colaborador: Colaboradores[] = [
  { nome: "Marcos", salário: 2500, setor: setor.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: setor.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: setor.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: setor.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: setor.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: setor.MARKETING, presencial: true },
];

function presencialSim(Colaborador: Colaboradores[],presencial: true,setor: string): Colaboradores[] {
  return Colaborador.filter((Colaboradores) => {
    if (
      Colaboradores.setor === "marketing" &&
      Colaboradores.presencial === true
    ) {
      return Colaborador;
    }
  });
}

console.log(presencialSim(Colaborador, true, setor.MARKETING));
