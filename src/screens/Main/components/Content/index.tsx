import React, { useEffect, useRef, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from "react-native";
import { CountUp } from "use-count-up";

import * as S from "./styles";

import board from "../../../../assets/board.png";
import leaves from "../../../../assets/leaves.png";

import { pizzas } from "../../utils/pizzas";

import { Additional } from "../OptionsSlider";
import AddButtons from "./components/AddButtons";
import Additionals from "./components/Additionals";

interface ViableItems {
  viewableItems: ViewToken[];
}

interface Props {
  index: number;
  aditionals: Additional[];
  setIndex(index: number): void;
}

export default function Content({ index, aditionals, setIndex }: Props) {
  const left = useSharedValue(71);
  const boardScale = useSharedValue(0.95);
  const boardRotateZ = useSharedValue(0);
  const leavesRotateZ = useSharedValue(0);
  const pizzaScale = useSharedValue(0.95);
  const pizzaScalRotateZ = useSharedValue(0);

  const [size, setSize] = useState("m");

  const xValue = useRef(0);
  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 50 });
  const onViewRef = useRef(({ viewableItems }: ViableItems) => {
    const currIndex = viewableItems[0]?.index ?? 0;

    setIndex(currIndex);
  });

  const previowsIndex = index > 0 ? index - 1 : index;
  const previowsPrice = index === 0 ? 0 : pizzas[previowsIndex].prices[size];
  const addPrice = aditionals.length > 0 ? aditionals[0].price : 0;
  const price = pizzas[index].prices[size] + addPrice;

  useEffect(() => {
    const prevIsLarge = boardScale.value > 1;
    const prevIsSmall = boardScale.value === 0.85;
    const transTime1 = { duration: 150 };
    const transTime2 = { duration: 180 };

    if (size === "s") {
      left.value = withTiming(0);
      pizzaScale.value = withTiming(prevIsLarge ? 1.08 : 0.98, transTime1);
      pizzaScale.value = withDelay(150, withTiming(0.85, transTime2));
      boardScale.value = withDelay(300, withTiming(0.82, transTime2));
      boardScale.value = withDelay(500, withTiming(0.85, transTime1));
    } else if (size === "m") {
      left.value = withTiming(71);
      pizzaScale.value = withTiming(prevIsLarge ? 1.08 : 0.82, transTime1);
      pizzaScale.value = withDelay(150, withTiming(0.95, transTime2));
      boardScale.value = withDelay(300, withTiming(prevIsLarge ? 0.9 : 0.98, transTime2));
      boardScale.value = withDelay(500, withTiming(0.95, transTime1));
    } else {
      left.value = withTiming(145);
      pizzaScale.value = withTiming(prevIsSmall ? 0.82 : 0.92, transTime1);
      pizzaScale.value = withDelay(150, withTiming(1.05, transTime2));
      boardScale.value = withDelay(300, withTiming(1.08, transTime2));
      boardScale.value = withDelay(500, withTiming(1.05, transTime1));
    }
  }, [size]);

  function scrollHandler(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const {
      nativeEvent: { contentOffset },
    } = event;
    const time = { duration: 100 };

    if (contentOffset.x > 0 && contentOffset.x < 1242) {
      if (contentOffset.x > xValue.current) {
        boardRotateZ.value = withTiming(boardRotateZ.value - 2, time);
        boardRotateZ.value = withDelay(150, withTiming(boardRotateZ.value + 1.5, time));
        boardRotateZ.value = withDelay(300, withTiming(boardRotateZ.value - 1.5, time));
        leavesRotateZ.value = withTiming(leavesRotateZ.value - 1, time);
        leavesRotateZ.value = withDelay(150, withTiming(leavesRotateZ.value + 1, time));
        pizzaScalRotateZ.value = withTiming(pizzaScalRotateZ.value - 7, time);
      } else if (contentOffset.x < xValue.current) {
        boardRotateZ.value = withTiming(boardRotateZ.value + 2, time);
        boardRotateZ.value = withDelay(150, withTiming(boardRotateZ.value - 1.5));
        boardRotateZ.value = withDelay(300, withTiming(boardRotateZ.value + 1.5, time));
        leavesRotateZ.value = withTiming(leavesRotateZ.value + 1, time);
        leavesRotateZ.value = withDelay(150, withTiming(leavesRotateZ.value - 1, time));
        pizzaScalRotateZ.value = withTiming(pizzaScalRotateZ.value + 7, time);
      }
    }

    xValue.current = contentOffset.x;
  }

  const sliderAnimatedStyle = useAnimatedStyle(() => ({
    left: left.value,
  }));

  const boardAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: boardScale.value }, { rotateZ: `${boardRotateZ.value}deg` }],
  }));

  const pizzaImageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pizzaScale.value }, { rotateZ: `${pizzaScalRotateZ.value}deg` }],
  }));

  const leavesImageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${leavesRotateZ.value}deg` }],
  }));

  return (
    <S.Container>
      <S.ImageContent>
        <S.RoundBoardContent style={boardAnimatedStyle}>
          <S.RoundBoard source={board} />
        </S.RoundBoardContent>
        <S.Leaves source={leaves} style={leavesImageAnimatedStyle} />
        <AddButtons index={index} />
        <FlatList
          data={pizzas}
          keyExtractor={(pizza) => pizza.name}
          disableIntervalMomentum
          pagingEnabled
          decelerationRate="fast"
          snapToAlignment="center"
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          onScroll={scrollHandler}
          renderItem={({ item }) => (
            <S.PizzaContent>
              <Additionals aditionals={aditionals} />
              <S.Pizza source={item.pic} style={pizzaImageAnimatedStyle} />
            </S.PizzaContent>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ position: "absolute", overflow: "visible", width: "100%" }}
        />
      </S.ImageContent>
      <S.Price>
        $
        <CountUp
          key={`${price}`}
          start={price < previowsPrice ? price : previowsPrice}
          end={price > previowsPrice ? price : previowsPrice}
          duration={1}
          isCounting
          formatter={(value) => value.toFixed(2)}
        />
      </S.Price>
      <S.Options>
        <S.OptionsButtonText onPress={() => setSize("s")}>
          <S.OptionsText isSelected={size === "s"}>S</S.OptionsText>
        </S.OptionsButtonText>
        <S.OptionsButtonText onPress={() => setSize("m")}>
          <S.OptionsText isSelected={size === "m"}>M</S.OptionsText>
        </S.OptionsButtonText>
        <S.OptionsButtonText onPress={() => setSize("l")}>
          <S.OptionsText isSelected={size === "l"}>L</S.OptionsText>
        </S.OptionsButtonText>
        <S.OptionsSlider style={sliderAnimatedStyle} />
      </S.Options>
    </S.Container>
  );
}
