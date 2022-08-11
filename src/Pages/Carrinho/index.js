import ItemCarrinho from "../../components/ItemCarrinho";
import { useCarrinhoContext } from '../../common/Contexts/Carrinho';
import { StyledItensContainer, StyledBotaoComprar } from './styles.js';
import { useContext } from "react";
import { UsuarioContext } from '../../common/Contexts/Usuario';
import Voltar from '../../components/Voltar';
import { MdLocalGroceryStore } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Carrinho() {

    const { carrinho, novoValor = 0 } = useCarrinhoContext();
    const { saldo = 0 } = useContext(UsuarioContext);

    return(
        <StyledItensContainer>
            <Voltar />
            <header>
                <MdLocalGroceryStore />
                <h2>Carrinho</h2>
            </header>
            {carrinho.length > 0 ? 
            <>  
                {carrinho.map(item => (
                    <ItemCarrinho title={item.title} id={item.id} quantidade={item.quantidade} costs={item.costs} key={item.title}/>
                ))}
                
                <article>
                    <span>Saldo atual:</span>
                    <strong>R$ {saldo ? Number(saldo).toFixed(2) : "0.00"}</strong>
                </article>
                <article>
                    <span>Valor da compra:</span>
                    <strong>R$ {Number(novoValor).toFixed(2)}</strong>
                </article>
                <div className="comprar">
                    <StyledBotaoComprar disabled={novoValor > saldo}>
                        Finalizar Compra
                    </StyledBotaoComprar>
                </div>
            </>

            :
        
            <div className="deuRuim">
                <h2>Ops, você não possui nenhum item no carrinho :( </h2>
                <Link to='/catalogo'>
                    Começar a comprar
                </Link>
            </div>
            }


        </StyledItensContainer>
    );
}

export default Carrinho;