import { Hearthstone } from "../../assets/images";
import { ANIMATION } from "./animations";
import { AnimatedContainer, Container, Form, SignInButton } from "./styles";
import { useForm } from "react-hook-form";
import { NewSelect } from "../../components/NewSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorNewCard } from "../../validators/createNewCard";
import { CardType } from "../../Interface/cards";
import InputForm from "../../components/Input";
import {
  CLASSES_SELECT_CARD,
  NUMBERS_SELECT_CARD,
  TYPE_SELECT_CARD,
} from "../../constants";
import { useLocation } from "react-router-dom";
import { useCard } from "../../hooks/Cards";

const CardInformation = () => {
  const { state } = useLocation();
  const { createNewCard } = useCard();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardType>({
    resolver: yupResolver(validatorNewCard),
    defaultValues: state?.isNewCard ? "" : state?.data,
  });

  const onSubmit = handleSubmit((data) => {
    const { ataque, classe, defesa, descricao, nome, tipo } = data;

    createNewCard({ ataque, classe, defesa, descricao, nome, tipo });
  });

  return (
    <Container>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <Hearthstone />
        </h1>
        <h2>Olá, crie sua carta personalizada!</h2>
        <Form onSubmit={onSubmit}>
          <div>
            <InputForm
              control={control}
              error={errors.nome}
              type="text"
              placeholder="Nome"
              name="nome"
            />
            <InputForm
              control={control}
              error={errors.descricao}
              type="text"
              placeholder="Descrição"
              name="descricao"
            />

            <NewSelect
              control={control}
              error={errors.ataque?.message}
              values={NUMBERS_SELECT_CARD}
              placeholder="Ataque"
              name="ataque"
            />

            <NewSelect
              control={control}
              error={errors.defesa?.message}
              values={NUMBERS_SELECT_CARD}
              placeholder="Defesa"
              name="defesa"
            />

            <NewSelect
              control={control}
              error={errors.tipo?.message}
              values={TYPE_SELECT_CARD}
              placeholder="Tipo"
              name="tipo"
            />

            <NewSelect
              control={control}
              error={errors.classe?.message}
              values={CLASSES_SELECT_CARD}
              placeholder="Classe"
              name="classe"
            />
          </div>
          <SignInButton type="submit" disabled={false}>
            Entrar no App
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </Container>
  );
};

export default CardInformation;
