import * as Yup from "yup"

const validations = Yup.object().shape({
    complete_name: Yup.string("O nome completo deve ser uma string.")
        .trim()
        .min(5, "Nome completo muito curto.")
        .max(100, "Nome completo muito longo.")
        .matches('^[a-zA-Z0-9àèìòùáéíóúâêîôûãõÀÈÌÒÙÁÉÍÓÚÂÊÎÔÛÃÕ ]+$','Nome completo inválido.')
        .required("Nome completo é obrigatório."),
        
    phone: Yup.string("O Tel/Cel deve ser uma string.")
        .trim()
        .matches("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$",
        "Tel/cel está inválido.")
        .required("Tel/cel é obrigatório."),

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
