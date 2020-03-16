import styled from "styled-components";

export const SCG = {
  Main: styled.main<{ backgroundColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.backgroundColor};
  `,
  Container: styled.div`
    padding: 1rem 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
  `,
  Title: styled.h1`
    font-family: "Open Sans", sans-serif;
  `,
  Label: styled.label`
    display: block;
  `,
  Input: styled.input`
    display: block;
  `
};
