import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import * as S from "./styles";
import { styles } from "./styles";

import board from "../../../../assets/board.png";
import leaves from "../../../../assets/leaves.png";

export default function Content() {
  const left = useSharedValue(75);
  const scale = useSharedValue(0.9);

  const [slideText, setSlideText] = useState("M");

  function handleSize(size: string) {
    if (size === "s") {
      left.value = withTiming(0);
      scale.value = withTiming(0.95);
      setTimeout(() => (scale.value = withTiming(0.85)), 300);
      scale.value = withTiming(1.05);

      setSlideText("S");
    } else if (size === "m") {
      left.value = withTiming(75);
      scale.value = withTiming(1.05);
      setTimeout(() => (scale.value = withTiming(0.95)), 300);
      setSlideText("M");
    } else {
      left.value = withTiming(145);
      scale.value = withTiming(1.15);
      setTimeout(() => (scale.value = withTiming(1.05)), 300);
      setSlideText("L");
    }
  }

  const sliderAnimatedStyle = useAnimatedStyle(() => ({
    left: left.value,
  }));

  const boardAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <S.Container>
      <S.ImageContent>
        <Animated.View style={[styles.roundBoard, boardAnimatedStyle]}>
          <S.RoundBoard source={board} />
        </Animated.View>
        <S.Leaves source={leaves} />
      </S.ImageContent>
      <S.Price>$0.00</S.Price>
      <S.Options>
        <S.OptionsButtonText onPress={() => handleSize("s")}>
          <S.OptionsText>S</S.OptionsText>
        </S.OptionsButtonText>
        <S.OptionsButtonText onPress={() => handleSize("m")}>
          <S.OptionsText>M</S.OptionsText>
        </S.OptionsButtonText>
        <S.OptionsButtonText onPress={() => handleSize("g")}>
          <S.OptionsText>L</S.OptionsText>
        </S.OptionsButtonText>
        <Animated.View style={[styles.slider, sliderAnimatedStyle]}>
          <S.OptionsSliderText>{slideText}</S.OptionsSliderText>
        </Animated.View>
      </S.Options>
    </S.Container>
  );
}
