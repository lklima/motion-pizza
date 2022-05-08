import React from "react";
import { FlatList, ImageSourcePropType } from "react-native";

import * as S from "./styles";

import { data } from "./utils";

export interface Additional {
  name: string;
  image: ImageSourcePropType;
  price: number;
}

interface Props {
  aditionals: Additional[];
  setAditionals(item: object): void;
}

export default function OptionsSlider({ aditionals, setAditionals }: Props) {
  function add(additional: Additional) {
    if (aditionals.length < 3) {
      setAditionals((previous: Additional[]) => [...previous, additional]);
    }
  }

  return (
    <S.Content>
      <S.OptionsCount>{aditionals.length}/3</S.OptionsCount>
      <FlatList
        data={data}
        keyExtractor={(_, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        decelerationRate="fast"
        contentContainerStyle={{ marginLeft: -20 }}
        renderItem={({ item }) => {
          const hasAdded = aditionals.includes(item);

          return (
            <S.OptionsButton disabled={hasAdded} onPress={() => add(item)}>
              <S.OptionsImage source={item.image} />
            </S.OptionsButton>
          );
        }}
      />
    </S.Content>
  );
}
