import { Hearthstone } from "../../assets/images";
import { DEFAULT_TRANSITION } from "../../constants";
import { CardType } from "../../Interface/cards";
import { allCards } from "../../mocks/cardsMock";
import Button from "../Button";
import { CARDS_ANIMATION, CONTAINER_ANIMATION } from "./animation";
import {
  AnimatedCard,
  AnimatedContainer,
  CardDetails,
  CardDetailsContent,
  ClassName,
  Content,
  ContentCard,
  ContentInformationCard,
  Navigation,
} from "./styles";

interface PropsData {
  data: CardType[];
  onClick: (cardItem: CardType) => void;
}

const Cards = ({ data, onClick }: PropsData) => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {data.map((cardItem: CardType) => (
          <AnimatedCard
            key={cardItem.id}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
          >
            <Hearthstone />
            <Content>
              <h3>{cardItem.nome}</h3>
              <ClassName>{cardItem.classe}</ClassName>

              <ContentCard>
                <br />
                <h4>{cardItem.descricao}</h4>
                <br />

                <ContentInformationCard>
                  <CardDetailsContent>
                    <CardDetails>Ataque: {cardItem.ataque}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Defesa: {cardItem.defesa}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Tipo: {cardItem.tipo}</CardDetails>
                  </CardDetailsContent>
                </ContentInformationCard>
                <br />
                <Button onClick={() => onClick(cardItem)}>Editar</Button>
              </ContentCard>
            </Content>
          </AnimatedCard>
        ))}
      </Navigation>
    </AnimatedContainer>
  );
};

export default Cards;
