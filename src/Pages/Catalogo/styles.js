import styled from "styled-components";

export const StyledCatalogo = styled.main`
    background-color: #050505;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px 30px;
    box-sizing: border-box;

    header {
        display: flex;
        width: 100%;
        max-width: 1200px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;

        div {
            display: flex;
            flex-direction: column;

            span {
                color: #fff;
                font-size: 1.4rem;
                font-weight: 600;
            }

            .nome {
                margin-bottom: 10px;

                strong {
                    color: #A60321;
                    font-size: 1.5rem;
                }
            }

            .saldo {
                strong {
                    color: #05F2F2;
                }
            }
        }

        button {
            display: block;
            width: 60px;
            height: 60px;
            border-radius: 5px;
            background-color: #050505;
            text-align: center;
            transition: all .2s;
            &:hover {
                background-color: rgba(255,255,255, .1);
                cursor: pointer;
            }

            svg {
                font-size: 2.5rem;
                color: #fff;
            }
        }
    }

    .titulo {
        width: 100%;
        max-width: 1200;
        padding: 60px 0 20px 0;    
    
        h2 {
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        }
    }
`;

export const StlyledGamesContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;