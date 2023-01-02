import { Hearthstone } from "../../assets/images";
import { ANIMATION } from "./animations";
import { AnimatedContainer, Container, ContentButton, Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewSelect } from "../../components/NewSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorNewCard } from "../../validators/createNewCard";
import { CardType } from "../../Interface/cards";
import InputForm from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";
import {
  CLASSES_SELECT_CARD,
  NUMBERS_SELECT_CARD,
  TYPE_SELECT_CARD,
} from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useCard } from "../../hooks/Cards";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const CardInformation = () => {
  const { state } = useLocation();
  const { createNewCard, removeCard, updateDataCard } = useCard();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CardType>({
    resolver: yupResolver(validatorNewCard),
    defaultValues: state?.isNewCard ? "" : state?.data,
  });
  const navigate = useNavigate();

  const handleCreateCard: SubmitHandler<CardType> = (data) => {
    const { ataque, classe, defesa, descricao, nome, tipo } = data;

    createNewCard({ ataque, classe, defesa, descricao, nome, tipo });
    navigate("/");
    toast.success("Criado com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
  };

  const handleUpdateCard = () => {
    const { id, ataque, classe, defesa, descricao, nome, tipo } = getValues();
    updateDataCard({
      id,
      ataque,
      classe,
      defesa,
      descricao,
      nome,
      tipo,
    });

    navigate("/");
    toast.success("Atualizado com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
  };

  const handleDeleteCard = (id: string) => {
    removeCard(id);
    toast.success("Deletado com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
    navigate("/");
  };

  return (
    <>
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
          {state?.isNewCard ? (
            <h2>Olá, crie sua carta personalizada!</h2>
          ) : (
            <h2>Olá, atualize o campo que você deseja.</h2>
          )}
          <Form onSubmit={handleSubmit(handleCreateCard)}>
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

            <ContentButton>
              {state?.isNewCard ? (
                <Button type="submit" variant="secondary" disabled={false}>
                  Criar nova carta
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  disabled={false}
                  onClick={handleUpdateCard}
                >
                  Atualizar
                </Button>
              )}

              {!state.isNewCard && (
                <Button
                  variant="danger"
                  disabled={false}
                  onClick={() => {
                    handleDeleteCard(state?.data.id);
                  }}
                >
                  Excluir carta
                </Button>
              )}
            </ContentButton>
          </Form>
        </AnimatedContainer>
      </Container>
    </>
  );
};

export default CardInformation;
