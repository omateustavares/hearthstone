import React, { useCallback, useEffect, useState } from "react";

import { Container, FormFilter, RadioButtonGroup } from "./styles";
import Cards from "../../../components/Cards";
import SearchInput from "../../../components/InputSearch";
import { useDebounce } from "../../../hooks/Debounce";
import { CardType } from "../../../Interface/cards";
import { allCards } from "../../../mocks/cardsMock";
import RadioButton from "../../../components/RadioButton";
import CreateCard from "../../CreateCard";
import { useNavigate } from "react-router-dom";

interface EditCard {
  isNewCard: boolean;
  data: CardType;
}

const MainContent = () => {
  const [edit, setEdit] = useState(false);
  const [checked, setCheck] = useState("");
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const [list, setList] = useState<CardType[]>(allCards);

  const loadData = () => {
    setList(allCards);
  };

  useEffect(() => {
    loadData();
  }, [checked]);

  const filterAllCards = async (item: string): Promise<void> => {
    if (!item) {
      loadData();
      setCheck("");
    }

    const result = list.filter((card) =>
      card[checked as keyof CardType]
        .toString()
        .toLowerCase()
        .includes(item.toLowerCase())
    );

    setList(result);
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
            placeholder="Digite o id, nome, classe ou tipo"
            name="search"
            onChange={(event) =>
              debounce({
                internalFunction: filterAllCards,
                event,
              })
            }
          />
          <RadioButtonGroup>
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
            <button
              type="button"
              onClick={() => {
                setCheck("");
                setList(allCards);
              }}
            >
              Xico
            </button>
          </RadioButtonGroup>
        </FormFilter>

        <Cards
          data={list}
          onClick={(e) => {
            editCard({
              isNewCard: false,
              data: e,
            });
            setEdit(true);
          }}
        />
      </Container>
    </>
  );
};

export default MainContent;
