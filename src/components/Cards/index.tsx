import { Hearthstone } from "../../assets/images";
import { DEFAULT_TRANSITION } from "../../constants";
import { CardType } from "../../Interface/cards";
import Button from "../Button";
import { CARDS_ANIMATION, CONTAINER_ANIMATION } from "./animation";
import {
  AnimatedCard,
  AnimatedContainer,
  CardDetails,
  CardDetailsContent,
  ClassName,
  Content,
  ContentButton,
  ContentCard,
  ContentInformationCard,
  Navigation,
} from "./styles";

interface PropsData {
  data: CardType[];
  onClick: (cardItem: CardType) => void;
  addCard?: (cardItem: CardType) => void;
  removeCard?: (id: string) => void;
  isFromDeck: boolean;
}

const Cards = ({
  data,
  onClick,
  addCard,
  removeCard,
  isFromDeck,
}: PropsData) => {
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
              <ClassName>{cardItem.nome}</ClassName>

              <ContentCard>
                <br />
                <h4>{cardItem.descricao}</h4>
                <br />

                <ContentInformationCard>
                  <CardDetailsContent>
                    <CardDetails>Classe: {cardItem.classe}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Ataque: {cardItem.ataque}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Defesa: {cardItem.defesa}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Tipo: {cardItem.tipo}</CardDetails>
                  </CardDetailsContent>
                  <CardDetailsContent>
                    <CardDetails>Identificação: {cardItem.id}</CardDetails>
                  </CardDetailsContent>
                </ContentInformationCard>
                <br />

                <ContentButton>
                  {isFromDeck ? (
                    <Button
                      variant="danger"
                      onClick={() => {
                        removeCard(cardItem.id);
                      }}
                    >
                      Remover
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="adding"
                        onClick={() => {
                          addCard(cardItem);
                        }}
                      >
                        Adicionar
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          onClick(cardItem);
                        }}
                      >
                        Editar
                      </Button>
                    </>
                  )}
                </ContentButton>
              </ContentCard>
            </Content>
          </AnimatedCard>
        ))}
      </Navigation>
    </AnimatedContainer>
  );
};

export default Cards;
