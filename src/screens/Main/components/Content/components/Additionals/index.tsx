import React, { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { Additional } from "../../../OptionsSlider";

import * as S from "./styles";

import tomato from "../../../../../../assets/piece-tomato.png";

interface Props {
  aditionals: Additional[];
}

export default function Additionals({ aditionals }: Props) {
  const add1Opacity = useSharedValue(0);
  const add1Scale = useSharedValue(4);
  const add1TranslateY = useSharedValue(-50);

  const add2Opacity = useSharedValue(0);
  const add2Scale = useSharedValue(3);
  const add2TranslateY = useSharedValue(-80);

  const add3Opacity = useSharedValue(0);
  const add3Scale = useSharedValue(8);

  const add4Opacity = useSharedValue(0);
  const add4Scale = useSharedValue(3);
  const add4TranslateY = useSharedValue(50);

  const add5Opacity = useSharedValue(0);
  const add5Scale = useSharedValue(3);
  const add5TranslateY = useSharedValue(50);

  const image1AnimatedStyle = useAnimatedStyle(() => ({
    opacity: add1Opacity.value,
    transform: [{ scale: add1Scale.value }, { translateY: add1TranslateY.value }],
  }));
  const image2AnimatedStyle = useAnimatedStyle(() => ({
    opacity: add2Opacity.value,
    transform: [{ scale: add2Scale.value }, { translateY: add2TranslateY.value }],
  }));
  const image3AnimatedStyle = useAnimatedStyle(() => ({
    opacity: add3Opacity.value,
    transform: [{ scale: add3Scale.value }],
  }));
  const image4AnimatedStyle = useAnimatedStyle(() => ({
    opacity: add4Opacity.value,
    transform: [{ scale: add4Scale.value }, { translateY: add4TranslateY.value }],
  }));
  const image5AnimatedStyle = useAnimatedStyle(() => ({
    opacity: add5Opacity.value,
    transform: [{ scale: add5Scale.value }, { translateY: add5TranslateY.value }],
  }));

  useEffect(() => {
    if (aditionals.length > 0) {
      add1Opacity.value = withTiming(1);
      add1Scale.value = withTiming(1);
      add1TranslateY.value = withTiming(0);

      add2Opacity.value = withDelay(300, withTiming(1));
      add2Scale.value = withDelay(300, withTiming(1));
      add2TranslateY.value = withDelay(300, withTiming(0));

      add3Opacity.value = withDelay(600, withTiming(1));
      add3Scale.value = withDelay(600, withTiming(1));

      add4Opacity.value = withDelay(900, withTiming(1));
      add4Scale.value = withDelay(900, withTiming(1));
      add4TranslateY.value = withDelay(900, withTiming(0));

      add5Opacity.value = withDelay(1200, withTiming(1));
      add5Scale.value = withDelay(1200, withTiming(1));
      add5TranslateY.value = withDelay(1200, withTiming(0));
    }
  }, [aditionals]);

  return (
    <S.Container>
      <S.Pic source={tomato} top={0} left={0} style={image1AnimatedStyle} />
      <S.Pic source={tomato} right={0} top={0} style={image2AnimatedStyle} />
      <S.Pic source={tomato} alignSelf="center" style={image3AnimatedStyle} />
      <S.Pic source={tomato} bottom={0} right={0} style={image4AnimatedStyle} />
      <S.Pic source={tomato} bottom={0} style={image5AnimatedStyle} />
    </S.Container>
  );
}
