import { useState } from "react"
import FormLogin from "./FormLogin"
import { formWhitValidation } from "./formWhitValidation"


const FormWhitValidation = formWhitValidation(FormLogin)

export function Formulario (){
    
    const [formData, setFormData] = useState({
        email: '',
        contraseña: ''
    })


   
    const handleOnChange = (evt) => {
        
        setFormData({
            ...formData,
            [evt.target.email]: evt.target.value
        })
    }
    

    return  (
        <FormWhitValidation 
            formData={formData} 
            handleOnChange={handleOnChange} 
        />
    )
}