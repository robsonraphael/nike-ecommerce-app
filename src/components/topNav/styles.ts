import styled from "styled-components";

// Gerals
export const Container = styled.header`
  width: 100%;
  height: 4em;
  border-bottom: 0.1em solid #333;
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5em;

  display: flex;
  align-items: center;
  gap: 3em;
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
export const Nav = styled.nav`
  display :flex;
  align-items: center;

  height: 100%;
  gap: 3em;
  padding: 0.3em;
`;
export const Link = styled.a`
    font-size: 1em;
    font-weight: normal;
    color: #333333;

    &:hover {
        color: #111111;
    }
    &:focus{
        color: #000;
        font-weight: 500;
        border-bottom: 0.15em solid #111111;
        border-bottom-left-radius: 0.1em;
        border-bottom-right-radius: 0.1em;
    }
`;
