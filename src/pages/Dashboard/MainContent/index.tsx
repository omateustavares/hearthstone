import React, { useEffect, useState } from "react";

import {
  Container,
  FormFilter,
  RadioButtonGroup,
  WithoutCards,
} from "./styles";
import Cards from "../../../components/Cards";
import SearchInput from "../../../components/InputSearch";
import { useDebounce } from "../../../hooks/Debounce";
import { CardType } from "../../../Interface/cards";
import { allCards } from "../../../mocks/cardsMock";
import RadioButton from "../../../components/RadioButton";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../../hooks/Cards";
import Button from "../../../components/Button";

interface EditCard {
  isNewCard: boolean;
  data: CardType;
}

const MainContent = () => {
  const [checked, setCheck] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const { cards, loadDataCardMock, loadDataCard, filterAllCards } = useCard();

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

  return (
    <>
      <Container>
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
            data={cards}
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
