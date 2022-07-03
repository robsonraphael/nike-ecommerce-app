import React from "react";

import { Container, Wrap, Logo, Nav, Link, Img } from "./styles";
import SVG from "../../assets/logo.svg";

export const TopNav: React.FC = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Logo href="/">
            <Img src={SVG}/>
          </Logo>
          <Nav>
            <Link href="#womem">Womem</Link>
            <Link href="#men">Men</Link>
            <Link href="#kids">Kids</Link>
            <Link href="#collections">Collections</Link>
          </Nav>
        </Wrap>
      </Container>
    </>
  );
};
