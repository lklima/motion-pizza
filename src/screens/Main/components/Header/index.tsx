import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import * as S from "./styles";

import ArrowLeft from "../../../../assets/arrow-left.svg";
import Heart from "../../../../assets/heart.svg";

import { pizzas } from "../../utils/pizzas";

interface Props {
  index: number;
}

export default function Header({ index }: Props) {
  const listRef = useRef<FlatList>(null);

  const opacity = useSharedValue(1);

  useEffect(() => {
    if (index !== 0) {
      opacity.value = withTiming(0.1);
    }

    setTimeout(() => {
      listRef.current?.scrollToIndex({ animated: true, index });
    }, 300);

    opacity.value = withDelay(600, withTiming(1));
  }, [index]);

  const textAniamtedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <S.Header>
      <ArrowLeft height={25} width={25} />
      <S.TextArea>
        <FlatList
          ref={listRef}
          data={pizzas}
          keyExtractor={(pizza) => pizza.name}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <>
              <S.Title style={textAniamtedStyle}>{item.name}</S.Title>
              <S.SubTitle style={textAniamtedStyle}>{item.desc}</S.SubTitle>
            </>
          )}
        />
      </S.TextArea>
      <Heart height={30} width={30} />
    </S.Header>
  );
}
