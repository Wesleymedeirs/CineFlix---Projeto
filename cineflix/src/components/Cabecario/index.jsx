import Logo from './Logo-cinetag-branco 1.png'
import { Link } from 'react-router-dom'
import styles from './Cabecario.module.css'
import HeaderLinks from '../../components/HeaderLinks'



const Cabecario = () => {
    return (

        <header className={styles.cabecario} >
            <Link to='/'>
                <img src={Logo} alt="Logo CineFlix" />
            </Link>

            <nav>
                <HeaderLinks url='/'>
                    Home
                </HeaderLinks>
                <HeaderLinks url='/favoritos'>
                    Favoritos
                </HeaderLinks>
            </nav>
        </header>

    )
}

export default Cabecario