import styled, { css } from "styled-components";

export const StyledItensContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #050505;
    min-height: 100vh;
    padding: 50px 0;

    header {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: #fff;
            font-size: 2rem;
            padding-right: 10px;
        }

        h2 {
            font-size: 2rem;
            font-weight: 600;
            color: #fff;
        }
    }

    article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        border-bottom: 1px solid #fff;

        span, strong {
            color: #fff;
            font-size: 1.2rem;
        }

        strong {
            font-weight: 600;
        }
    }

    .comprar {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        text-align: end;
    }

    .deuRuim {
        width: 80%;
        max-width: 800px;
        min-height: 50vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            color: #fff;
            font-size: 3rem;
            text-align: center;
            margin-bottom: 50px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            width: 100%;
            background-color: #03588C;
            color: #fff;
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 600;
            border-radius: 4px;
        }

    }
`;

export const StyledBotaoComprar = styled.button`
    padding: 10px 0;
    width: 100%;
    margin: 20px auto;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background-color: #A60321;
    ${props => props.disabled === true && css`cursor: not-allowed; background-color: #555; color: #888`}

    &:hover {
        background-color: #800219;
    }

    @media screen and (min-width: 728px) {
        max-width: 300px;
    }
`;