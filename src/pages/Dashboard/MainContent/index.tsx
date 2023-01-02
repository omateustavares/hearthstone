import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  DecksContainer,
  FormFilter,
  RadioButtonGroup,
  TextDecks,
  WithoutCards,
} from "./styles";
import Cards from "../../../components/Cards";
import SearchInput from "../../../components/InputSearch";
import { useDebounce } from "../../../hooks/Debounce";
import { CardType } from "../../../Interface/cards";
import RadioButton from "../../../components/RadioButton";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../../hooks/Cards";
import Button from "../../../components/Button";

interface EditCard {
  isNewCard: boolean;
  data: CardType;
}

const USER_COLLECTION_DECKS = "@hearthstone:decks";

const MainContent = () => {
  const navigate = useNavigate();
  const { cards, loadDataCardMock, loadDataCard, filterAllCards } = useCard();

  const [checked, setCheck] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const { debounce } = useDebounce();

  const [decksList, setDecksList] = useState<CardType[]>(() => {
    const decks = localStorage.getItem(USER_COLLECTION_DECKS) as string;
    if (decks === null) return [];
    try {
      return JSON.parse(decks);
    } catch {}

    return cards;
  });

  const filteringCards = async (item: string): Promise<void> => {
    if (!checked) setErrorInput(true);

    filterAllCards(item, checked);
  };

  const handleCatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCheck(value);
  };

  const editCard = ({ isNewCard, data }: EditCard) => {
    navigate("/card-information", { state: { isNewCard, data } });
  };

  const addCardTDoDeckList = (card: CardType) => {
    const resultDecks = decksList.filter((f) => f.id === card.id);

    if (resultDecks.length > 1) {
      toast.error(
        "É permitido no máximo duas cartas iguais no mesmo baralho.",
        {
          position: toast.POSITION.TOP_RIGHT,
          className: "foo-bar",
        }
      );
      return;
    }

    if (resultDecks.length >= 30) {
      toast.error("Máximo de 30 cartas foi atingido.", {
        position: toast.POSITION.TOP_RIGHT,
        className: "foo-bar",
      });
      return;
    }

    setDecksList((oldState) => [...oldState, card]);

    const decksArray = [...decksList, card];
    localStorage.setItem(USER_COLLECTION_DECKS, JSON.stringify(decksArray));
  };

  const removeCardTDoDeckList = (id: string) => {
    const resultDecksList = decksList.filter((card) => card.id !== id);

    setDecksList(decksList.filter((deck) => deck.id !== id));

    localStorage.setItem(
      USER_COLLECTION_DECKS,
      JSON.stringify(resultDecksList)
    );
  };

  return (
    <>
      <Container>
        <DecksContainer>
          {decksList.length > 0 ? (
            <Cards
              data={decksList}
              isFromDeck={true}
              removeCard={(e) => removeCardTDoDeckList(e)}
              onClick={(e) => {
                editCard({
                  isNewCard: false,
                  data: e,
                });
              }}
            />
          ) : (
            <TextDecks>Escolha suas cartas</TextDecks>
          )}
        </DecksContainer>
        <FormFilter>
          <SearchInput
            error={errorInput}
            placeholder="Digite o id, nome, classe ou tipo"
            name="search"
            onChange={(event) =>
              debounce({
                internalFunction: filteringCards,
                event,
              })
            }
          />
          <RadioButtonGroup>
            <div>
              <RadioButton
                label="Id"
                value="id"
                name="id"
                checked={checked === "id"}
                onChange={handleCatChange}
              />
              <RadioButton
                label="Nome"
                value="nome"
                name="nome"
                checked={checked === "nome"}
                onChange={handleCatChange}
              />
              <RadioButton
                label="Classe"
                name="classe"
                value="classe"
                checked={checked === "classe"}
                onChange={handleCatChange}
              />
              <RadioButton
                name="tipo"
                value="tipo"
                label="Tipo"
                checked={checked === "tipo"}
                onChange={handleCatChange}
              />
            </div>
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                setCheck("");
                loadDataCard();
              }}
            >
              Limpar seleção
            </Button>
          </RadioButtonGroup>
        </FormFilter>

        {cards.length === 0 ? (
          <WithoutCards>
            <h3>
              Você não tem nenhuma carta, podemos gerar algumas para você ou
              você pode criar uma nova carta.
            </h3>
            <Button variant="secondary" onClick={loadDataCardMock}>
              Gerar cartas
            </Button>
          </WithoutCards>
        ) : (
          <Cards
            isFromDeck={false}
            data={cards}
            addCard={(e) => {
              addCardTDoDeckList(e);
            }}
            onClick={(e) => {
              editCard({
                isNewCard: false,
                data: e,
              });
            }}
          />
        )}
      </Container>
    </>
  );
};

export default MainContent;
