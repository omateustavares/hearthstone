import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { CardType, CreateCardType } from "../Interface/cards";
import { allCards } from "../mocks/cardsMock";

interface CardContextData {
  createNewCard(data: CreateCardType): void;
  removeCard(id: string): void;
  updateDataCard(data: CardType): void;
  cards: CardType[];
  loadDataCardMock(): void;
  loadDataCard(): void;
  filterAllCards(item: string, checked: string): void;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext<CardContextData>(
  {} as CardContextData
);

const USER_COLLECTION = "@hearthstone:cards";

const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<CardType[]>([]);

  const createNewCard = ({ ataque, classe, defesa, descricao, nome, tipo }) => {
    const newTask = {
      id: String(Date.now()),
      ataque,
      classe,
      defesa,
      descricao,
      nome,
      tipo,
    };

    const newTasksArray = [...cards, newTask];

    localStorage.setItem(USER_COLLECTION, JSON.stringify(newTasksArray));
    loadDataCard();
  };

  const removeCard = (id: string) => {
    const cardsList = cards.filter((card) => card.id !== id);

    localStorage.setItem(USER_COLLECTION, JSON.stringify(cardsList));
    loadDataCard();
  };

  const updateDataCard = ({
    id,
    ataque,
    classe,
    defesa,
    descricao,
    nome,
    tipo,
  }) => {
    const cardUpdated = cards.map((card) => ({ ...card }));
    const cardToUpdate = cardUpdated.find((card) => card.id === id);

    cardToUpdate.ataque = ataque;
    cardToUpdate.classe = classe;
    cardToUpdate.defesa = defesa;
    cardToUpdate.descricao = descricao;
    cardToUpdate.nome = nome;
    cardToUpdate.tipo = tipo;

    localStorage.setItem(USER_COLLECTION, JSON.stringify(cardUpdated));
    loadDataCard();
  };

  const loadDataCard = () => {
    const resultStorage = localStorage.getItem(USER_COLLECTION);

    const stored = JSON.parse(resultStorage);
    if (!stored) {
      return;
    }
    setCards(stored);
  };

  const loadDataCardMock = () => {
    localStorage.setItem(USER_COLLECTION, JSON.stringify(allCards));
    loadDataCard();
  };

  const filterAllCards = async (
    item: string,
    checked: string
  ): Promise<void> => {
    if (!item) {
      loadDataCard();
    } else {
      const result = cards.filter((card) =>
        card[checked as keyof CardType]
          .toString()
          .toLowerCase()
          .includes(item.toLowerCase())
      );

      setCards(result);
    }
  };

  useEffect(() => {
    loadDataCard();
  }, []);

  return (
    <CardContext.Provider
      value={{
        cards,
        createNewCard,
        removeCard,
        updateDataCard,
        loadDataCardMock,
        loadDataCard,
        filterAllCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => {
  const context = useContext(CardContext);

  return context;
};

export { CardProvider, useCard };
