import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import * as S from "./styles";

import Header from "./components/Header";
import Content from "./components/Content";
import OptionsSlider from "./components/OptionsSlider";

import CartIcon from "../../assets/cart.svg";

export default function Main() {
  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [aditionals, setAditionals] = useState([]);

  return (
    <S.Container>
      <StatusBar style="dark" />
      <Header index={currentIndex} />
      <Content index={currentIndex} aditionals={aditionals} setIndex={setCurrentIndex} />
      <OptionsSlider aditionals={aditionals} setAditionals={setAditionals} />
      <S.AddButton>
        <CartIcon width={30} height={30} />
        <S.AddButtonText>Add to cart</S.AddButtonText>
      </S.AddButton>
      <S.BottomBar width={width} />
    </S.Container>
  );
}
