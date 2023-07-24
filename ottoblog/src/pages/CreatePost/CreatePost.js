import React from 'react'
import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const {user} = useAuthValue()
    const {insertDocument, response} = useInsertDocument("posts")

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        insertDocument({
            title,
            image,
            body,
            tags,
            uid: user.uid,
            createdBy : user.displayName
        })


    }

  return (
    <div className={styles.create_post}>
        <h1>Criar Post</h1>
        <p>Compartilhe seus momentos</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Título:</span>
                <input 
                type="text" 
                name="title" 
                id="" 
                required 
                placeholder='Escreva o título'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
            </label>
            <label htmlFor="">
                <span>URL da imagem:</span>
                <input 
                type="text" 
                name="image" 
                id="" 
                required 
                placeholder='Insira o URL da imagem'
                onChange={(e) => setImage(e.target.value)}
                value={image}
                />
            </label>
            <label htmlFor="">
                <span>Legenda:</span>
                <input 
                name="body" 
                id="" 
                required 
                placeholder='Escreva uma legenda'
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
            </label>
            <label htmlFor="">
                <span>Tags:</span>
                <input 
                type="text" 
                name="tags" 
                id="" 
                required 
                placeholder='Insira tags separadas por vírgula'
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                />
            </label>

            {!response.loading && (
                <button type="submit" className='btn'>
                    Cadastrar
                </button>
            )}

            {response.loading && (
                <button className="btn" disabled>
                    Aguarde...
                </button>
            )}

            {response.error && <p className="error">{response.error}</p>}
        </form>
    </div>
  )
}

export default CreatePost