import styled from "styled-components"

    export const Container = styled.div`
        background: #212121;
        width: 100vw;
        height: 5rem;   
        display: flex;
        align-items: center;
        justify-content: center;

        header {
            width: 81.313rem;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            background: #212121;

            a {
                
                img {
                width: 150px;
                height: 50px;
                cursor: pointer;
            }
        }

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 2.5rem;
                color: #000;
                
                cursor: pointer;

                
            }
        div {
            margin: 0 auto;
            
            ul {
                display: flex;
                
                li {
                    margin: 20px;
                    
                    a {
                        color: #FFFFFF ;
                        transition: all 0.2s;
                    }
                    a:hover {
                        color: #ffffff88 ;
                    }
                }
            }
        }    
    }
`;