import { useState } from "react"

export const FormWhitValidation =  (WrappedComponent) => {
    
    const FormWhitValidation = (props) =>{
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true
    
            if (!props.formData.name) {
                newErrors.email = 'El campo email es obligatorio'
                isValid= false
            }
            if (!props.formData.email) {
                newErrors.contraseña = 'El campo contraseña es obligatorio'
                isValid= false
            }
            setErrors(newErrors)
            return isValid
        }

        return <WrappedComponent 
            {...props} 
            errors = {errors}
            validateForm={validateForm}
        /> 
    }

    return FormWhitValidation
}