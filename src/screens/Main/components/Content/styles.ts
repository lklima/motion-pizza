import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import theme from "../../../../global/styles/theme";

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

export const OptionsButtonText = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  padding: 15px;
`;

export const OptionsText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const OptionsSliderText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const styles = StyleSheet.create({
  slider: {
    height: 55,
    width: 55,
    borderRadius: 50,
    backgroundColor: theme.colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowColor: theme.colors.yellow,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  roundBoard: {
    position: "absolute",
    shadowOpacity: 0.6,
    shadowRadius: 25,
    shadowColor: theme.colors.brown,
    shadowoffset: { width: 0, height: 20 },
    zIndex: 10,
  },
});
