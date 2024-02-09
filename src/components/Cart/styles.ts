import styled from "styled-components";

interface ContainerProps{
    showCart: boolean;
}
export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0" : "-350px")};
    width: 350px;
    height: 100vh;
    background-color: white;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    transition: 0.5s;
`;
export const Title = styled.h1``;