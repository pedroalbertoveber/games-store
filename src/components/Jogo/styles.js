import styled from "styled-components";

export const StyledGame = styled.article`
    width: 80%;
    max-width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 4px 4px 0 0;
    margin: 40px 10px 0 0;
    
    @media screen and (min-width: 700px) {
        margin-top: 10px;
    }

    figure {
        width: 100%;
        padding: 10px 5px;
        border-radius: 4px 4px 0 0;
        margin-bottom: -3px;
        background-color: #fff;
        height: 400px;
        
        img {
            display: block;
            width: 300px;
            height: 350px;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #fff;
        width: 100%;
        border-radius: 0 0 4px 4px;

        h4 {
            font-weight: 600;
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        div {
            margin-bottom: 10px;
            &:last-child {
                margin: 0;
            }
        }

        .categorias {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            span {
                font-weight: 500;
            }
        }

        .consoles ul {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: flex-start;

            li {
                margin-right: 15px;
                font-weight: 500;
                &:last-child {
                    margin: 0;
                }

            }
        }

        .preco span {
            font-weight: 500;
            font-size: 1.1rem;
            strong {
                font-weight: 600;
                color: #A60321;
            }
        }

        .botoes {
            display: flex;
            flex-direction: column;

            a {
                display: block;
                width: 100%;
            }
        }
    }      
`;

export const StyledBotao = styled.button`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 5px 0;
    padding: 8px 0;
    border-radius: 4px;
    background-color: ${props => props.cor};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    svg {
        margin-right: 10px;
        font-size: 1.2rem;
    }
`;