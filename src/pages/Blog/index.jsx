import React, { useEffect, useState } from "react";
import { apiBlog } from "../../services/apiBlog";
import { Container, Local2 } from "./styled";
import { Header } from "../../components/Header";
import { Button } from "../../components/Botão";

import "./styled";

export function Blog() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function loadApiBlog() {
      const response = await apiBlog.get("rn-api/?api=posts");

      setNutri(response.data);
    }
    loadApiBlog();
  }, []);
  return (
    <div>
      <Header />

      {nutri.map((blog) => {
        return (
          <Container 
          key={blog.id}>
          
            <div>
              <h1>{blog.titulo}</h1>
            </div>

            <div>
              <img 
              src={blog.capa} 
              alt={blog.titulo} />
              
              <h3>
                {'" ' + blog.subtitulo + ' "'}
              </h3>
            </div>

            <Local2>
              <h5>
                {"Categoria: " + blog.categoria}
              </h5>
              <Button />
            </Local2>
          </Container>
        );
      })}
    </div>
  );
}
