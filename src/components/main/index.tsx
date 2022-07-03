import React, { useState } from "react";

import {
  Container,
  Wrap,
  Information,
  Title,
  Text,
  Price,
  Button,
  Value,
  Wishlist,
  Icon,
  Banner,
  Image,
} from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import PNG from "../../assets/nike-shoes.png";

export const Main: React.FC = () => {
  const [isWishList, setIsWishList] = useState(false);

  return (
    <>
      <Container>
        <Wrap>
          <Information>
            <Title>
              Nike Air <br />
              Max Pre-Day
            </Title>
            <Text>
              Taking the classic look of heritage Nike Running into a new realm,
              the Nike Air Max Pre-Day brings you a fast-paced look that's ready
              for today's world.A true nod to the past with a design made from
              at least 20% recycled material by weight.
            </Text>
            <Price>
              <Button>Add to Bag</Button>
              <Value>
                <MdAttachMoney size="1.1em" />
                39.99
              </Value>
            </Price>
            <Wishlist onClick={() => setIsWishList(!isWishList)}>
              <Icon active={!isWishList}>
                <AiOutlineHeart/>
              </Icon>
              <Icon active={isWishList}>
                <AiFillHeart color="#dc143c" />
              </Icon>
            </Wishlist>
          </Information>
          <Banner>
            <Image src={PNG}/>
          </Banner>
        </Wrap>
      </Container>
    </>
  );
};
