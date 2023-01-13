import styled from 'styled-components'

export const ButtonWrapper = styled.article` 
    width: 100%;
    padding-top: 25px;
`;

export const PlayButton = styled.button`
    width: 140px;
    padding: 7px;
    background-color: rgb(99, 99, 99);
    color: white;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    border: 1px solid rgb(99, 99, 99);
    transition: 0.15s ease-in;
    &:hover {
        background-color: rgb(48, 48, 48);
    }
`;