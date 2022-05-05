import React, { useRef, useState } from "react";
import { FlatList } from "react-native";

import * as S from "./styles";

import { data } from "./utils";

export default function OptionsSlider() {
  return (
    <S.Content>
      <S.OptionsCount>0/3</S.OptionsCount>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <S.OptionsButton>
            <S.OptionsImage source={item.image} />
          </S.OptionsButton>
        )}
      />
    </S.Content>
  );
}
