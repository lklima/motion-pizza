import React from "react";
import { useWindowDimensions } from "react-native";
import * as S from "./styles";

import Header from "./components/Header";
import Content from "./components/Content";
import OptionsSlider from "./components/OptionsSlider";
import CartIcon from "../../assets/cart.svg";

export default function Main() {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <Header />
      <Content />
      <OptionsSlider />
      <S.AddButton>
        <CartIcon width={30} height={30} />
        <S.AddButtonText>Add to cart</S.AddButtonText>
      </S.AddButton>
      <S.BottomBar width={width} />
    </S.Container>
  );
}
