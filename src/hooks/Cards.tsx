import { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { CardType, CreateCardType } from "../Interface/cards";

interface CardContextData {
  createNewCard(data: CreateCardType): void;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext<CardContextData>(
  {} as CardContextData
);

const USER_COLLECTION = "@hearthstone:users";

const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<CardType[]>([]);

  const createNewCard = ({ ataque, classe, defesa, descricao, nome, tipo }) => {
    loadDataCard();

    cards.push({
      id: String(Date.now()),
      ataque,
      classe,
      defesa,
      descricao,
      nome,
      tipo,
    });

    localStorage.setItem(USER_COLLECTION, JSON.stringify(cards));
  };

  const loadDataCard = async () => {
    const stored = JSON.parse(localStorage.getItem(USER_COLLECTION));
    console.log(stored);
    setCards(stored);
  };

  useEffect(() => {
    loadDataCard();
  }, []);

  return (
    <CardContext.Provider
      value={{
        createNewCard,
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
