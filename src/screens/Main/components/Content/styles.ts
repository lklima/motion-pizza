import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const ImageContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const RoundBoardContent = styled.View`
  position: absolute;
  shadow-opacity: 0.6;
  shadow-radius: 25px;
  shadow-color: ${({ theme }) => theme.colors.brown};
  shadow-offset: 0px 20px;
`;

export const RoundBoard = styled.Image``;

export const Leaves = styled.Image``;

export const Price = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
`;

export const Options = styled.View`
  flex-direction: row;
  box-shadow: 2px 2px 15px ${({ theme }) => theme.colors.gray};
  background: white;
  margin-top: 30px;
  height: 55px;
  width: 200px;
  border-radius: 30px;
  align-items: center;
  justify-content: space-around;
`;

export const OptionsText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const OptionsSliderContent = styled.View`
  height: 55px;
  width: 200px;
  position: absolute;
  align-items: center;
  border-radius: 30px;
  left: 0;
  right: 0;
`;

export const OptionsSlider = styled.View`
  height: 55px;
  width: 55px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.yellow};
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.yellow};
`;

export const OptionsSliderText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;
