import { Button, DateTimePicker, Nav, RichInput } from "components";
import { IWriteNowForm } from "interfaces";
import { FormProvider, useForm } from "react-hook-form";
import { WriteNowResolver } from "validations";


export function WriteNowPage() {
    
    const formMethods = useForm <IWriteNowForm>({ resolver: WriteNowResolver});
    const { formState:{errors}, register, handleSubmit} = formMethods;

    function onSubmit(values: any) {}

    return (
        <>
            <Nav/>

            <div className="container">
                <h1>Escrever agora</h1>

                <FormProvider {...formMethods}>

                    <form className="form" onSubmit={() => {handleSubmit(onSubmit)}}>

                        <label htmlFor="destinationName"> Nome Completo</label>
                        <input {...register('destinationName')} type="text" placeholder="Nome Completo" />
                        {errors?.destinationName?.message && (<p className="error-text">{errors?.destinationName?.message}</p>)}

                        <label htmlFor="destinationAddress">Email</label>
                        <input {...register('destinationAddress')} type="text" placeholder="Email" />
                        {errors?.destinationAddress?.message && (<p className="error-text">{errors?.destinationAddress?.message}</p>)}

                        <label htmlFor="dueDate"> Data</label>
                        <DateTimePicker name="dueDate"/>
                        {errors?.dueDate?.message && (<p className="error-text">{errors?.dueDate?.message}</p>)}

                        <label htmlFor="subject"> Assunto</label>
                        <input {...register('subject')} type="text" placeholder="Assunto" />
                        {errors?.subject?.message && (<p className="error-text">{errors?.subject?.message}</p>)}

                        <label htmlFor="body"> Mensagem</label>
                        <RichInput name="body" />
                        {errors?.body?.message && (<p className="error-text">{errors?.body?.message}</p>)}

                        <Button type="submit" variant="primary">Enviar</Button>


                    </form>

                </FormProvider>

            </div>

        </>
    );
};