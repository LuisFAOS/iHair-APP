import * as Yup from "yup"

const validations = Yup.object().shape({
    name: Yup.string("O nome deve ser uma string.")
        .trim()
        .min(5, "Nome muito curto.")
        .max(100, "Nome muito longo.")
        .matches('^[a-zA-Z0-9]+$','Nome inválido.')
        .required("Nome é obrigatório."),

    email: Yup.string("O email deve ser do tipo string.")
        .trim()
        .email("Formato do email inválido.")
        .min(7, "Email muito curto.")
        .max(150, "Email muito longo, tente outro.")
        .required("Email é obrigatório."),

    password: Yup.string("A senha deve ser do tipo string.")
        .trim()
        .min(8, "Senha muito curta.")
        .max(150, "Senha muito longa, tente uma menor.")
        .required("Senha é obrigatória."),
})

export default validations