import { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from "../../common/Contexts/Usuario";
import { MdLocalGroceryStore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { StyledCatalogo, StlyledGamesContainer } from './styles';
import Jogo from '../../components/Jogo';
import { busca } from '../../services/api';
import { useCarrinhoContext } from '../../common/Contexts/Carrinho';
import { toast } from 'react-toastify';

function Catalogo() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        busca('/games', setGames);
    }, []);

    const navigate = useNavigate();
    const { nome, saldo = 0 } = useContext(UsuarioContext);
    const { carrinho } = useCarrinhoContext();

    function irCarrinho() {
        if(carrinho.length === 0){
            toast.warn('Seu carrinho está vazio!');
        } else {
            navigate('/carrinho');
        }
    }

    return(
        <StyledCatalogo>
            <header>
                <div>
                    <span className='nome'>Olá, <strong>{nome || ""}</strong></span>
                    <span className='saldo'>Saldo Atual: <strong>R$ {Number(saldo).toFixed(2) || "0.00"}</strong></span>
                </div>
                <div>
                    <button onClick={() => irCarrinho()}>
                        < MdLocalGroceryStore />
                    </button>
                </div>
            </header>
            <div className='titulo'>
                <h2>
                    Catálogo de Games
                </h2>
            </div>
            <StlyledGamesContainer>
                {games.map((game) => (
                    <Jogo id={game.id} title={game.title} consoles={game.consoles} costs={game.costs} category={game.category} key={game.title}/>
                ))}
            </StlyledGamesContainer>
        </StyledCatalogo>
    );
}

export default Catalogo;