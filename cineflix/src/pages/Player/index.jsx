//código suprimido
import Banner from "../../components/Banner"
import styles from './Player.module.css';
import Titulo from "../../components/Titulo"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const Player = () => {
    const [video, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const parametros = useParams();
    
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://my-json-server.typicode.com/Wesleymedeirs/cineflix-api/videos?id=${parametros.id}`)
          .then(resposta => resposta.json())
          .then(dados => {
            setVideos(...dados);
            setIsLoading(false); // Definir isLoading como false após carregar os dados
          })
          .catch(error => {
            console.error("Erro ao carregar os dados:", error);
            setIsLoading(false);
          });
      }, []);

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            {isLoading ? <p className={styles.txtCarregamento}>Carregando dados...</p>: <section className={styles.container}>
                <iframe
                    width="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>

                </iframe>
            </section>}


        </>
    )
}

export default Player
