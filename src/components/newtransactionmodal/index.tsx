import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactionsContext';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal(props: NewTransactionModalProps){
    const {createTransaction} = useTransactions();
    const [type, setType]= useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0); 
    const [category, setCategory] = useState(' ');

    async function handleCreateNewtransaction(e: FormEvent){
        e.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        props.onRequestClose()
        
    }

    return(
        <Modal 
            isOpen={props.isOpen} 
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
                
                <button type='button' onClick={props.onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>

            <Container onSubmit={handleCreateNewtransaction}>
                <h2>Cadastrar transação</h2>
                
                <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))} />
                {/* className={type ==='deposit' ? 'active' : ''} */}
                <TransactionTypeContainer>
               
                    <RadioBox 
                        type='button'  
                        onClick={()=>{setType('deposit')}} 
                        isActive={type === 'deposit'} 
                        activeColor="green"
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type='button' 
                        onClick={()=>{setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red" >
                            <img src={outcomeImg} alt="Saida" />
                            <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Container>
        
        </Modal>
    ) 
}