import { number, object, string } from "yup"

let userSchema = object({
    name: string("El nombre es requerido").required("El nombre es requerido"),
    phone: number("El telefono es requerido").required("El telefono es requerido").positive("El telefono no es válido").integer("El telefono no es válido"),
    email: string().email("El campo email debe tener formato email").required("El email es requerido"),
    payment: string().required("Debe elegir una de las formas de pago"),
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", error: error.message }
    }
}

export default validateForm