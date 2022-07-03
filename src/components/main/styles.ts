import styled from "styled-components";
import { MediaQuery } from "../../styles/global";

// Gerals
export const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5em;
`;

// About Product
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  gap: 0.5em;
  margin-top: 3.5em;
  width: 100%;
  max-width: 40em;

  ${MediaQuery.Tablet}{
    gap: 1em;
  }
  ${MediaQuery.Desktop}{
    margin-left: 1em;
  }

`;
export const Title = styled.h1`
  font-size: 3em;
  font-weight: 800;
  color: #2d2b2c;
  ${MediaQuery.Tablet}{
    font-size: 3.1em;
  }

`;
export const Text = styled.p`
  width: 80%;
  font-size: 1em;
  color: #000000;
  font-weight: lighter;
  text-align: left;

  ${MediaQuery.Tablet}{
    font-size: 1.1em;
  }

`;
export const Price = styled.div`
  display :flex;
  margin-top: 0.5em;
  gap: 0.5em;
  ${MediaQuery.Tablet}{
    gap: 0.8em;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #2d2b2c;
  width: 8em;
  height: 3em;
  border-radius: 0.3em;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: ease 0.25s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${MediaQuery.Tablet}{
    font-size: 1.1em;
  }
`;
export const Value = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3em;
  font-weight: 450;
  ${MediaQuery.Tablet}{
    font-size: 1.4em;
  }

`;
export const Wishlist = styled.button`
  display: flex;
  align-self: flex-end;

  width: fit-content;
  height: fit-content;

  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 1em;
  cursor: pointer;
  transition: ease 0.25s;
  position: relative;
  bottom: 250px;
  right: 100px;

  &:hover {
    background-color: #f5f5f5;
  }

  ${MediaQuery.Tablet}{
    bottom: 280px;
    right: 180px;
  }
`;
export const Icon = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  color: #333333;
  font-size: 2em;
`;

export const Banner = styled.div`
  position: relative;
  bottom: 90px;
  left: 10px;
  overflow-y: hidden;
  overflow-x: hidden;

  ${MediaQuery.Tablet}{
    left: 50px;
  }
  ${MediaQuery.Desktop}{
    position: absolute;
    top: 20px;
    left: 42%;
  }
`;
export const Image = styled.img`
  width: 90%;
  max-width: 700px;
  transform: rotate(35deg);

  ${MediaQuery.Tablet}{
    width: 80%;
  }
  ${MediaQuery.Desktop}{
    width: 90%;
  }
`;
