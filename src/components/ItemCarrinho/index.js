import { StyledItem, StyledBotaoMaisMenos } from './styles.js';
import { useCarrinhoContext } from '../../common/Contexts/Carrinho';

function ItemCarrinho({ title, id, quantidade, costs }) {

    const { removerProduto, adicionarProduto } = useCarrinhoContext();

    return(
        <StyledItem>
            <div className='imagem-container'>
                <figure>
                    <img src={require(`../../assets/imagens/jogos/${id}.jpg`)} alt='capa do jogo'/>
                    <figcaption>{title}</figcaption>
                </figure>
            </div>
            <div className='valores'>
                <span>Valor do item: R$ {Number(costs*quantidade).toFixed(2)}</span>
            </div>
            <div className='botoes-container'>
                <i>Quantidade: </i>
                <div>
                    <StyledBotaoMaisMenos cor="#A60321" onClick={() => removerProduto(id)}>
                        -
                    </StyledBotaoMaisMenos>
                    <span>
                        {quantidade}
                    </span>
                    <StyledBotaoMaisMenos cor="#03588C" onClick={() => adicionarProduto({ title, id, quantidade, costs })}>
                        +
                    </StyledBotaoMaisMenos>
                </div>
            </div>

        </StyledItem>
    );
}

export default ItemCarrinho;

