import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import * as S from "./styles";

interface Props {
  index: number;
}

export default function AddButtons({ index }: Props) {
  const opacity = useSharedValue(0);

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (index === 0) {
      opacity.value = withTiming(0);
    } else {
      opacity.value = withTiming(1);
    }
  }, [index]);

  return (
    <>
      <S.AdddButton style={buttonAnimatedStyle}>
        <Feather name="minus" size={25} />
      </S.AdddButton>
      <S.RemoveButton style={buttonAnimatedStyle}>
        <Feather name="plus" size={25} />
      </S.RemoveButton>
    </>
  );
}
