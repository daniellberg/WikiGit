import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    color: #000000;
    font-size: 20px;

    height: 62px;
    width: 60%;

    margin: 20px;

    &: hover{
        background-color: #FAFAFA60;
        border: 1px solid #FAFAFA60;
        cursor: pointer;

        transition: all ease-in 0.1s;
    }

`;