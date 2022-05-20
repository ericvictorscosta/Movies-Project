import { apiFilmes } from "../../services/apiFilmes";
import { useEffect, useState } from "react";
import { Container, Content, Section } from "./styled";
import { HeaderMovie } from "../../components/HeaderMovie";
import { Link, useMatch } from "react-router-dom";
import { ApiKey } from "../../config/setApiMovies";
  


export function Home () {
    const [filme, setFilme] = useState([]);
    const image_path = "https://image.tmdb.org/t/p/w500/"
    useEffect(() => {

      async function loadFilmes(){
        const response = await apiFilmes.get(`?api_key=${ApiKey}&language=en-US&page=${1}`)
        console.log(response.data);
        setFilme(response.data.results);
      }


      loadFilmes();
    }, [])
  
  return(
      <Container>
        
          <HeaderMovie/> 
          <Section>
            {filme.map((filme) =>{
              return(
                <Content key={filme.id}>
                  <Link 
                  to={`/filmes/${filme.id}`}>

                  <img 
                  src={`${image_path}${filme.poster_path}`} 
                  alt={filme.nome} 
                  />
                  <h2>{filme.original_title}</h2>

                  </Link>
                </Content>
              );
            })}
          
          
        </Section>
      </Container>
    );
}