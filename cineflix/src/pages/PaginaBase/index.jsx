import Cabecario from '../../components/Cabecario'
import Container from '../../components/Container'
import Rodape from '../../components/Rodape'
import FavoritosProvider from '../../contextos/Favoritos'

import React from 'react'
import { Outlet } from 'react-router-dom'

const PaginaBase = () => {
    return (
        <main>
            <Cabecario />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase