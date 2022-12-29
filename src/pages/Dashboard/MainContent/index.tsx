import React, { useCallback, useState } from "react";

import { Container, FormFilter, RadioButtonGroup } from "./styles";
import Cards from "../../../components/Cards";
import SearchInput from "../../../components/InputSearch";
import { useDebounce } from "../../../hooks/Debounce";
import { CardType } from "../../../Interface/cards";
import { allCards } from "../../../mocks/cardsMock";
import RadioButton from "../../../components/RadioButton";

const MainContent = () => {
  const [checked, setCheck] = useState("");
  const { debounce } = useDebounce();

  const [list, setList] = useState<CardType[]>(allCards);

  const filterAllCards = async (item: string): Promise<void> => {
    console.log(item);
    console.log(
      list.filter((card) =>
        card.nome.toLowerCase().includes(item.toLowerCase())
      )
    );
  };

  const handleCatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCheck(value);
  };

  const searchCards = useCallback(async (item: string) => {
    console.log(item);
  }, []);

  return (
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
        </RadioButtonGroup>
      </FormFilter>

      <Cards />
    </Container>
  );
};

export default MainContent;
