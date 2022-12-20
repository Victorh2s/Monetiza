import logoImg from '../../assets/total.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal : () => void;
}

export function Header(props: HeaderProps){


    return(
        <Container>
            <Content>
            <img src={logoImg} alt="monetiza" />
            <button type="button" onClick={props.onOpenNewTransactionModal}>Nova transação</button>

        
            </Content>
        </Container>
    )
}