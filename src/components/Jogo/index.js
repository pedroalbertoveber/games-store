import { StyledBotao, StyledGame } from './styles';
import { MdLocalGroceryStore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useCarrinhoContext } from '../../common/Contexts/Carrinho';
import { toast } from 'react-toastify';

function Jogo({ id, title, consoles, category, costs }) {

    const navigate = useNavigate();
    const { adicionarProduto } = useCarrinhoContext();

    function inclusaoDeItem({ id, title, consoles, category, costs }) {
        adicionarProduto({ id, title, consoles, category, costs });
        toast.success('Jogo adicionado ao seu carrinho!');
    }

    return(
        <StyledGame>
            <figure>
                <img src={require(`../../assets/imagens/jogos/${id}.jpg`)} alt="foto"/>
            </figure>
            <div className='container'>
                <h4>{title}</h4>
                <div className="categorias">
                    <span>{category}</span>
                </div>
                <div className="consoles">
                    <ul>
                        <li>{consoles}</li>
                    </ul>
                </div>
                <div className="preco">
                    <span>Valor: <strong>R$ {Number(costs).toFixed(2)}</strong></span>
                </div>
                <div className='botoes'>

                    <StyledBotao cor="#03588C" onClick={() => navigate(`/catalogo/${id}`)}>
                        Saber Mais   
                    </StyledBotao>

                    <StyledBotao cor="#A60321" onClick={() => inclusaoDeItem({ id, title, consoles, category, costs })}>
                        <MdLocalGroceryStore /> Adicionar ao Carrinho
                    </StyledBotao>
                </div>
            </div>            
        </StyledGame>
    );
}

export default Jogo;