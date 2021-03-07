import * as Yup from "yup"

const validations = Yup.object().shape({
    name: Yup.string("O nome deve ser uma string.")
        .trim()
        .min(3, "Nome do salão muito curto.")
        .max(50, "Nome do salão muito longo.")
        .matches('^[a-zA-Z0-9]+$','Nome inválido.')
        .required("Nome do salão é obrigatório."),

    addressNumber: Yup.string("O número deve ser uma string.")
        .trim()
        .max(20, "Número muito longo.")
        .required("Número é obrigatório."),
        
    contactNumber: Yup.string("O Tel/Cel deve ser uma string.")
        .trim()
        .matches("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$",
        "Tel/cel está inválido.")
        .required("Tel/cel é obrigatório."),
})

export default validations
