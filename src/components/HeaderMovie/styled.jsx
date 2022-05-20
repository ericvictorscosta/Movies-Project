import styled from "styled-components";

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
        div {
            display: flex;
            align-items: center;
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
        a {
            button {
                margin: 0px 0 0 2rem;
                padding: 0.5rem 1.3rem;
                background: #fff;
                border-radius: 0.625rem;
                color: #000000;
                font-weight: 700;

                transition: all 0.2s;
            }
            button:hover {
            color: #0000005e;
            padding: 0.55rem 1.4rem;
            font-size: 19px;
        }
    } 
}`
