import styled from "styled-components";
import { MediaQuery } from "../../styles/global";

// Gerals
export const Container = styled.header`
  width: 100%;
  height: 4em;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MediaQuery.Desktop}{
    justify-content: flex-start;
    gap: 5em;
  }
`;

// Logo
export const Logo = styled.a`
  display: flex;
  margin-left: 1.5em;
`;
export const Img = styled.img`
  width: 4em;
  height: 4em;
`;

// Navigation
export const Nav = styled.nav<{active: boolean}>`
  display: ${props => props.active ? "flex" : "none"};
  align-items: center;
  gap: 3em;
  padding: 0.3em;

  height: fit-content;

  position: absolute;
  top: 12%;
  left: calc(20vw);

  animation: Top 0.30s linear normal;
  
  ${MediaQuery.Tablet}{
    left: calc(35vw);
    gap: 4em;
  }
  ${MediaQuery.Desktop}{
    display: flex;
    position: static;
    border: none;
    animation: none;
  }

  @keyframes Top {
    0% {transform: translateY(-50px); opacity: 0}
    80% { opacity: 0.5}
    100% {opacity: 1}

  }
`;
export const Link = styled.a`
  font-size: 1.1em;
  font-weight: normal;
  color: #333333;

  &:hover {
    color: #111111;
  }
  &:focus {
    color: #000;
    font-weight: 500;
    border-bottom: 0.15em solid #111111;
    border-bottom-left-radius: 0.1em;
    border-bottom-right-radius: 0.1em;
  }
`;

export const Icon = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  transition: ease-in-out 0.25s;
`;
export const Button = styled.button`
  font-size: 1.5em;
  padding: 0.2em;
  display: flex;
  border: none;
  background: none;
  align-self: center;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }

  ${MediaQuery.Desktop}{
    display: none;
  }
`;
