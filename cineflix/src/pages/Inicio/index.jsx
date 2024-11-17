import styles from './Inicio.module.css'
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import Card from "../../components/Card"
import { useEffect, useState } from 'react'

const Inicio = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://my-json-server.typicode.com/Wesleymedeirs/cineflix-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados);
        setIsLoading(false); // Definir isLoading como false após carregar os dados
      })
      .catch(error => {
        console.error("Erro ao carregar os dados:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes</h1>
      </Titulo>
      <section className={styles.containerCards}>
        {isLoading ? <p>Carregando dados...</p> : videos.map((video) => (
          <Card 
            key={video.id}
            id={video.id}
            titulo={video.titulo}
            capa={video.capa}
          />
        ))}
      </section>
    </>
  )
}

export default Inicio