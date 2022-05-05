import React from "react";

import * as S from "./styles";

import ArrowLeft from "../../../../assets/arrow-left.svg";
import Heart from "../../../../assets/heart.svg";

export default function Header() {
  return (
    <S.Header>
      <ArrowLeft height={25} width={25} />
      <S.TextArea>
        <S.Title>Pizza</S.Title>
        <S.SubTitle>Pick your favourite</S.SubTitle>
      </S.TextArea>
      <Heart height={30} width={30} />
    </S.Header>
  );
}
