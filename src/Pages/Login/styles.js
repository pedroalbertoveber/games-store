import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
    background-color: #050505;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;

    div > h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #A60321;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 600px;
    padding: 5px 10px;

    fieldset {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 1rem;

            &:last-child {
                margin: 0;
            }

            label {
                color: #fff;
                padding: 5px 0;
                font-weight: 600;
                font-size: 1.2rem;
            }

            input {
                padding: 8px 5px;
                border-radius: 4px;
            }
        }
    }

    
`;

export const StyledButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px 0;
    border-radius: 4px;
    background-color: #A60321;
    color: #fff;
    font-weight: 600;
    transition: all .1s;

    &:hover {
        background-color: #800219;
        box-shadow: 2px 2px 5px rgba(255, 255, 255, .2);
        cursor: pointer;

        ${props => props.disabled === true && css`cursor: not-allowed; background-color: #aaa`}
    }

    ${props => props.disabled === true && css`background-color: #aaa`}
`;