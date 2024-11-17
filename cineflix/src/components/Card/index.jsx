import styles from './Card.module.css'
import iconerFavoritar from './favorite_outline.png';
import iconeDesfavoritar from './favorite.png'

import React from 'react'
import { useFavoritoContext } from '../../contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa }) => {

    const { favorito, adicionarFavorito } = useFavoritoContext()
    const efavotiro = favorito.some((fav) => fav.id === id)
    const icone = efavotiro ? iconeDesfavoritar : iconerFavoritar

    return (
        <div className={styles.containerCard}>
            <Link className={styles.link} to={`/player/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>

            <img
                src={icone}
                alt="Favoritar"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )
}

export default Card