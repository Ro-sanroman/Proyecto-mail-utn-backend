import React, { useState } from 'react'
import useForm from '../../hook/useForm'
import { register } from '../services/authService'
import useFetch from '../../hook/useFetch'

const useFetch = () => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function sendRequest (requestCallBack) {
        try{
            setLoading(true)
            const response = await fetch(url, options)
            const data = await response.json()
            setResponse(data)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
}

const RegisterScreen = () => {

    const REGISTER_FORM_FIELDS = {
        USERNAME: 'username',
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    const initial_form_state = {
        [REGISTER_FORM_FIELDS.USERNAME]: '',
        [REGISTER_FORM_FIELDS.EMAIL]: '',
        [REGISTER_FORM_FIELDS.PASSWORD]: ''
    }

    const {response, error, loading, sendRequest} = useFetch()
    function onRegister (form_state_sent) {
        sendRequest(
            () => {
                return register(
                    form_state_sent[REGISTER_FORM_FIELDS.USERNAME], 
                    form_state_sent[REGISTER_FORM_FIELDS.EMAIL], 
                    form_state_sent[REGISTER_FORM_FIELDS.PASSWORD]
                )
            }
        )
    }

    const {
        form_state, 
        onInputChange, 
        handleSubmit, 
        resetForm
    } = useForm(
        initial_form_state, 
        onRegister
    )
    
    

  return (
    <div>
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor="username">Nombre de usuario: </label>
                <input 
                    type="text" 
                    placeholder='pepe' 
                    value={form_state[REGISTER_FORM_FIELDS.USERNAME]}
                    name={REGISTER_FORM_FIELDS.USERNAME}
                    id='username'
                    onChange={onInputChange}
                />
            </div>
            <div className='form-field'>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    placeholder='pepe@mail.com' 
                    value={form_state[REGISTER_FORM_FIELDS.EMAIL]}
                    name={REGISTER_FORM_FIELDS.EMAIL}
                    onChange={onInputChange}
                    id={'email'}
                />
            </div>
            <div className='form-field'>
                <label htmlFor="">Contraseña: </label>
                <input 
                    type="text" 
                    placeholder='pepe-123' 
                    value={form_state[REGISTER_FORM_FIELDS.PASSWORD]}
                    name={REGISTER_FORM_FIELDS.PASSWORD}
                    onChange={onInputChange}
                    id={'password'}
                />
            </div>
            {error && <span style={{color: 'red'}}> {error} </span>}
            {response && <span style={{color: 'green'}}> Usuario registrado con exito! </span>}
            {
                loading 
                ? <button disabled>Registrando</button>
                : <button>Registrarse</button>
            }
        </form>
    </div>
  )
}

export default RegisterScreen