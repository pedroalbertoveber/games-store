import { useContext, useState } from "react";
import { createContext } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {

    const [ carrinho, setCarrinho ] = useState([]);

    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            { children }
        </CarrinhoContext.Provider>
    );
};

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    const novoValor = carrinho.reduce((contador, produto) => contador + (produto.costs * produto.quantidade), 0);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map( itemDoCarrinho => {
            if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return(itemDoCarrinho);
        })
    }

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);

        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        }

        setCarrinho(mudarQuantidade(novoProduto.id, 1));
        console.log(carrinho);
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;

        if (ehOUltimo) {
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
        }

        setCarrinho(mudarQuantidade(id, -1));
    }

    return {
        carrinho, 
        setCarrinho,
        adicionarProduto,
        removerProduto,
        novoValor,
    }
} 