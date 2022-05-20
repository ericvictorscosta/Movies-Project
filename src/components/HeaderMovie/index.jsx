import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg'

export function HeaderMovie(){
    return(
        <Container>
            <header>
                <div>
                   <Link to="/"><img src={Logo} alt="Logo" /></Link>
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
                    <Link to='/'><button>Salvos</button></Link>
                </div>
            </header>
        </Container>
    );
}