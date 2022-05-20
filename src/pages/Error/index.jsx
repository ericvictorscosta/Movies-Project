import styled from "styled-components";
import { Link } from "react-router-dom";

    export function Error(){

        const Container = styled.div`
            width: 100vw;
            height: 100vh;
            
            background: linear-gradient(300deg ,#374e86 15%, #245277 35%,  #3d75a3 70%,  #3aa6ff 95%);

            div {
                display: flex;
                justify-content: center;
                margin: 3.5rem;
                h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #FFFFFF ;

                    text-decoration-line: underlined;
                }
            }

            div {
                ul {
                    display: flex;
                    flex-direction: column;
                    
                    li {
                        display: flex;
                        justify-content: center;
                        margin: 0.3rem;
                        a {
                            font-family: 'Poppins', sans-serif;
                            font-size: 1rem;
                            font-weight: 700;
                            color: #FFFFFF ;
                        }
                        a:hover {
                            color: #ffffff78 ;
                        }
                    }
                }
            }
        `;
        
        return(
            <Container>
                <div>
                    <h2>" Hum... Parece que você escreveu algo de Errado "</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/contato'>Contato</Link>
                        </li>
                    </ul>   
                </div>    
            </Container>
    );
}