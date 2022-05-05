import React from "react";

import * as S from "./styles";

import board from "../../../../assets/board.png";
import leaves from "../../../../assets/leaves.png";

export default function Content() {
  return (
    <S.Container>
      <S.ImageContent>
        <S.RoundBoardContent>
          <S.RoundBoard source={board} />
        </S.RoundBoardContent>
        <S.Leaves source={leaves} />
      </S.ImageContent>
      <S.Price>$0.00</S.Price>
      <S.Options>
        <S.OptionsText>S</S.OptionsText>
        <S.OptionsText>M</S.OptionsText>
        <S.OptionsText>L</S.OptionsText>
        <S.OptionsSliderContent>
          <S.OptionsSlider>
            <S.OptionsSliderText>S</S.OptionsSliderText>
          </S.OptionsSlider>
        </S.OptionsSliderContent>
      </S.Options>
    </S.Container>
  );
}
