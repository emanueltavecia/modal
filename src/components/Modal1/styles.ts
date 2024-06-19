import styled from "styled-components";

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    input {
      width: 200px;
    }
`;

export const Container = styled.div`
    width: 500px;
    height: 300px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
