import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface OptionsTextProps {
  isSelected: boolean;
}

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

export const RoundBoardContent = styled(Animated.View)`
  position: absolute;
  shadow-opacity: 0.6;
  shadow-radius: 25px;
  shadow-color: ${({ theme }) => theme.colors.brown};
  shadow-offset: 0px 20px;
`;

export const RoundBoard = styled.Image``;

export const Leaves = styled(Animated.Image)``;

export const PizzaContent = styled.View`
  height: 300px;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

export const Pizza = styled(Animated.Image)`
  height: 250px;
  width: 250px;
`;

export const Price = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
  z-index: 20;
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
  justify-content: space-between;
  elevation: 10;
`;

export const OptionsButtonText = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  padding: 0px 20px;
  z-index: 11;
`;

export const OptionsText = styled.Text<OptionsTextProps>`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.text};
  padding-top: 5px;
`;

export const OptionsSlider = styled(Animated.View)`
  height: 55px;
  width: 55px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.yellow};
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const AdddButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 45px;
  z-index: 20;
`;

export const RemoveButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 45px;
  z-index: 20;
`;
