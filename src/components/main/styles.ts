import styled from "styled-components";

// Gerals
export const Container = styled.header`
  width: 100%;
  height: 70vh;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    gap: 4em;
`;

// About Product
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  gap: 0.5em;
  width: 32%;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 3em;
  font-weight: 800;
  color: #2D2B2C;
  width: fit-content;
  padding: 0.1em;
`;
export const Text = styled.p`
    padding: 0.2em;
    width: 70%;
    line-height: 1.3em;
    color: #000000;
    font-weight: lighter;
`;
export const Price = styled.div`
    display :flex;
    gap: 0.6em;
    align-items: center;
    width: fit-content;
    margin-top: 0.5em;
    margin-left: 0.2em;
`;
export const Button = styled.button`
    border: none;
    background-color: #2D2B2C;
    width: 7.5em;
    height: 2.5em;
    border-radius: 0.5em;
    color: white;
    font-size: 0.9em;
    cursor: pointer;
    transition: ease 0.25s;

    &:hover {
        background-color: rgba( 0, 0, 0, 0.6);
    }
`;
export const Value = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4em;
    font-weight: 450;
`;
export const Wishlist = styled.button`
    border: none;
    position: absolute;
    left: 26%;
    top: 20%;
    background-color: white;
    padding: 0.7em;
    border-radius: 50%;
    cursor: pointer;
    transition: ease 0.25s;

    &:hover{
        background-color: #f5f5f5;
    }
`;
export const Icon = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  color: #333333;
`;

export const Banner = styled.div`
  position: absolute;
  top: 20px;
  right: -80px;
  transform: rotate(35deg);
`;
export const Image= styled.img`
  width: 69%;
`;