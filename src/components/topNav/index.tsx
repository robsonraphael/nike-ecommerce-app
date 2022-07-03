import React, { useState } from "react";

import { Container, Wrap, Logo, Nav, Link, Img, Button, Icon } from "./styles";
import SVG from "../../assets/logo.svg";
import { GiHamburger, GiAbstract030 } from "react-icons/gi"

export const TopNav: React.FC = () => {
  const [isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <Container>
        <Wrap>
          <Logo href="/">
            <Img src={SVG}/>
          </Logo>
          <Nav active={isOpen}>
            <Link href="#womem">Womem</Link>
            <Link href="#men">Men</Link>
            <Link href="#kids">Kids</Link>
            <Link href="#collections">Collections</Link>
          </Nav>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Icon active={!isOpen}>
              <GiHamburger />
            </Icon>
            <Icon active={isOpen}>
              <GiAbstract030 />
            </Icon>
          </Button>
        </Wrap>
      </Container>
    </>
  );
};
