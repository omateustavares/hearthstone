import * as Yup from "yup";

const validatorNewCard = Yup.object().shape({
  nome: Yup.string().required("Preencha o nome da sua carta."),
  descricao: Yup.string().required("Adicione uma descrição para sua carta."),
  tipo: Yup.string().required("Selecione um tipo."),
  classe: Yup.string().required("Selecione uma classe"),
  defesa: Yup.string().required("Selecione o nivel de defesa."),
  ataque: Yup.string().required("Selecione o nivel de defesa."),
});

export { validatorNewCard };
