import styled from "styled-components";

export const StyledVoltar = styled.div`
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
`;