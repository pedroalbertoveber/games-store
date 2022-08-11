import styled from "styled-components";

export const StyledJogo = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #050505;
    padding: 50px 0;

    .arrow {
        height: 60px;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        button {
            background-color: transparent;
            cursor: pointer;

            svg {
                color: #fff;
                font-size: 2rem;

                &:hover {
                    color: #eee;
                }
            }
        }
    }


    article {
        width: 80%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 4px;
        figure {
            width: 100%;
            max-width: 1200px;

            img {
                width: 100%;
                border-radius: 4px 4px 0 0;
            }
        }

        .container-jogo {
            padding: 15px;
        }

        .titulo-jogo {

            margin-bottom: 15px;
        
            h2 {
                font-size: 2rem;
                font-weight: 600;
            }
        }

        .console-jogo {
            margin-bottom: 5px;
            ul li {
                font-weight: 500;
            }
        }

        .categoria {
            margin-bottom: 15px;
            font-weight: 500;
        }

        .descricao {
            margin-bottom: 15px;
            h4 {
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                font-size: 1.1rem;
            }

            p {
                text-align: justify;
            }
        }

        .preco-jogo {
            font-weight: 600;
            font-size: 1.1rem;
        }
    }
`;

export const StyledBotao = styled.button`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 10px 0 0 0;
    padding: 10px 0;
    border-radius: 4px;
    background-color: ${props => props.cor};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    svg {
        margin-right: 10px;
        font-size: 1.2rem;
    }

    @media screen and (min-width: 728px) {
        max-width: 300px;
    }
`;