import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const WriteNowValidationSchema = Yup.object({
    destinationName: Yup.string().required("Preencha o nome completo"),
    destinationAddress: Yup.string().required("Preencha o email"),
    dueDate: Yup.date().required("Preencha uma data"),
    subject: Yup.string().required("Preencha o assunto"),
    body: Yup.string().required("Preencha a mensagem"),
})

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);