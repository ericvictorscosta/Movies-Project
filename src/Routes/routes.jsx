import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Blog } from "../pages/Blog";
import { Contato } from "../pages/Contato";
import { Error } from "../pages/Error";
import { PagIdMovies } from '../pages/Filmes/index' 

    export default function App(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/contato" element={<Contato/>} />
                    
                    <Route path="/filmes/:id" element={<PagIdMovies/>}/>
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        );
    }