import React from 'react'
import styles from './Register.module.css'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const {createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas não estão iguais")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if(authError) {
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe momentos</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Nome:</span>
                <input type="text" name="displayName" required id="" placeholder='Nome do usuário' value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}/>

            </label>
            <label htmlFor="">
                <span>Email:</span>
                <input type="email" name="email" id="" required placeholder="Email do usuário" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="">
                <span>Senha:</span>
                <input type="password" name="password" id="" required placeholder="Insira sua senha" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label htmlFor="">
                <span>Confimarção de senha:</span>
                <input type="password" name="ConfirmpPassword" id="" required placeholder="Insira novamente a senha" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>

            {!loading && <button type="submit" className='btn'>Cadastrar</button>}
            {loading && <button type="submit" className='btn' disabled>Aguarde...</button>}

            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register