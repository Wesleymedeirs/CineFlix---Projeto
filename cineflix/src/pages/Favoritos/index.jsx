import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './Favoritos.module.css'

import React from 'react'
import { useFavoritoContext } from '../../contextos/Favoritos';

const Favoritos = () => {
  const { favorito } = useFavoritoContext()


  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      {/*Listando os cards */}
      <section className={styles.containerCards}>

        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}

      </section>
    </>
  )
}

export default Favoritos