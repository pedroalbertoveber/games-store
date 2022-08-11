import styled from "styled-components";

export const StyledItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 400px;
    width: 80%;
    margin: 0 auto 50px;
    max-width: 1200px;
    background-color: #fff;
    padding: 10px 5px;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(255, 255, 255, .3);

    .imagem-container figure{
        display: flex;
        align-items: center;
        flex-direction: column;
        
        img {
            width: 250px;
            height: 250px;
            object-fit: contain;
            margin-right: 15px;
            margin-bottom: 15px; 
        }

        figcaption {
            font-weight: 600;
            font-size: 1.3rem;
        }
    }

    .valores {
        padding: 15px 0;
        
        span {
            font-weight: 600;
            font-size: 1.1rem;
        }
    }

    .botoes-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        i {
            display: none;
        }

        span {
            padding: 0 15px;
            font-weight: 600;
            font-size: 1.3rem;
        }
    }

    @media screen and (min-width: 728px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 30px;
        height: 250px;

        .imagem-container figure {
            flex-direction: row;

            img {
                width: 200px;
                height: 200px;
            }
        }

        .botoes-container i {
            display: inline-block;
            margin-right: 20px;
            font-size: 1.1rem;
            font-weight: 600;
        }
    }
`;

export const StyledBotaoMaisMenos = styled.button`
    width: 30px; 
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    vertical-align: center;
    line-height: 30px;
    color: ${props => props.cor}; 
    background-color: #050505;
`;