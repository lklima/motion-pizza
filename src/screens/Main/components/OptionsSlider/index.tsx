import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import * as S from "./styles";

import { data } from "./utils";

interface ViableItems {
  viewableItems: ViewToken[];
}

export default function OptionsSlider() {
  const [index, setIndex] = useState(0);

  const marginTop = useSharedValue(0);

  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 50 });
  const onViewRef = useRef(({ viewableItems }: ViableItems) => {
    const { index = 0 } = viewableItems[0];

    console.log(viewableItems);

    setIndex(index || 0);
  });

  function renderItem() {
    return;
  }

  return (
    <S.Content>
      <S.OptionsCount>0/3</S.OptionsCount>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        pagingEnabled
        decelerationRate="fast"
        snapToAlignment="center"
        renderItem={({ item, index }) => {
          return (
            <S.OptionsButton>
              <S.OptionsImage source={item.image} index={index} />
            </S.OptionsButton>
          );
        }}
      />
    </S.Content>
  );
}
