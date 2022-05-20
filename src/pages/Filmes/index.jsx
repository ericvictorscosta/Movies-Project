import { Container } from "./styled";
import { HeaderMovie } from "../../components/HeaderMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFilmes } from "../../services/apiFilmes"
import { ApiKey } from "../../config/setApiMovies";
import { image_path } from "../Home";


export function PagIdMovies(){
    const {id} = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const image_path = "https://image.tmdb.org/t/p/w500/"
    useEffect(() => {
        
        async function loadFilme(){
            const response = await apiFilmes.get(`?api_key=${ApiKey}&language=en-US&page=${1}/${id}`)
            

            console.log(response.data.results)
            
            setFilmes(response.data.results)
            setLoading(false);
        }

        loadFilme();
    }, [id])

    if(loading){
        return(
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center" }}>
                <HeaderMovie/>
                <h1>Carregando seu Filme...</h1>
            </div>
        );
    }
    
    return(
        <Container>
            <HeaderMovie/>
            {filmes.map((movies) => {
                return(
                <div>
                    <h1>{movies.original_title}</h1>
                    <img src={`${image_path}${movies.poster_path}`} alt={movies.original_title} />
                    <p>{movies.overview}</p>
                </div>
                );
            })}
            
        </Container>


    );
}