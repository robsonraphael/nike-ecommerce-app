import React from "react";

import { Container, Wrap, List, Item, Button, Image } from "./styles";
import { FaPlay } from "react-icons/fa";
import PNG1 from "../../assets/shoes01.png";
import PNG2 from "../../assets/shoes02.png";
import PNG3 from "../../assets/shoes03.png";

export const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Wrap>
          <List>
            <Item>
              <Image src={PNG1} />
            </Item>
            <Item>
              <Image src={PNG2} />
            </Item>
            <Item>
              <Image src={PNG3} />
            </Item>
          </List>
          <Button>
            <FaPlay />
          </Button>
        </Wrap>
      </Container>
    </>
  );
};
