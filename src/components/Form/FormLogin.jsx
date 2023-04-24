import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormLogin = ({ formData, handleOnChange, errors, validateForm }) => {

    const handleOnsubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando:', formData)
        }
    }

    return (
        <section className='sectionForm'>
            <Form onSubmit={handleOnsubmit} className='formLogin'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Ingrese email" onChange={handleOnChange} /*value={formData.email}*//>
                    <Form.Text className="text-muted">
                        {errors && errors.email && <span>{errors.email}</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="text" name="contraseña" placeholder="Ingrese contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={handleOnChange} /*value={formData.contraseña}*/>
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                {errors && errors.contraseña && <span>{errors.contraseña}</span>}
                <Button variant="warning" type="submit">
                    Enviar
                </Button>
            </Form>
        </section>
    )
}

export default FormLogin 



