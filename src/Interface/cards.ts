export interface CardType {
  id: string;
  nome: string;
  descricao: string;
  tipo: string;
  defesa: number;
  classe: string;
  ataque: number;
}

export interface CreateCardType {
  nome: string;
  descricao: string;
  tipo: string;
  defesa: number;
  classe: string;
  ataque: number;
}
