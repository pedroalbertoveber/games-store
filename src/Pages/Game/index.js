import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { busca } from '../../services/api';
import { toast } from 'react-toastify';
import { StyledBotao, StyledJogo } from './styles.js';
import { MdLocalGroceryStore } from 'react-icons/md';
import { useCarrinhoContext } from '../../common/Contexts/Carrinho';
import Voltar from '../../components/Voltar';

function Game() {

    const { numeroJogo } = useParams();
    const [ game, setGame ] = useState({});
    const navigate = useNavigate();
    const { adicionarProduto } = useCarrinhoContext();

    useEffect(() => {
        busca(`/games/${numeroJogo}`, setGame);
    }, [numeroJogo]);

    function adiciona(game) {
        adicionarProduto(game);
        navigate('/catalogo');
        toast.success("Jogo adicionado ao seu carrinho!")
    }

    return(
        <StyledJogo>
            <Voltar />
            <article>
                <figure>
                    <img src={require(`../../assets/imagens/capas/${numeroJogo}.jpg`)} alt={game.title} />
                </figure>
                <div className='container-jogo'>
                    <div className='titulo-jogo'>
                        <h2>{game.title}</h2>
                    </div>
                    <div className='console-jogo'>
                        <ul>
                            <li>{game.consoles}</li>
                        </ul>
                    </div>
                    <div className='categoria'>
                        <h4>{game.category}</h4>
                    </div>
                    <div className='descricao'>
                        <h4>Descrição:</h4>
                        <p>{game.description}</p>
                    </div>
                    <div className='preco-jogo'>
                        <span>Valor: R$ {Number(game.costs).toFixed(2)}</span>
                    </div>

                    <StyledBotao cor="#A60321" onClick={() => adiciona(game)}>
                        <MdLocalGroceryStore /> Adicionar ao Carrinho
                    </StyledBotao>
                </div>
            </article>
        </StyledJogo>
    )
}

export default Game;