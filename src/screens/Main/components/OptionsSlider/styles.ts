import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 35px;
`;

export const OptionsCount = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.text};
`;

export const OptionsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const OptionsImage = styled(Animated.Image).attrs({
  resizeMode: "contain",
})`
  height: 90px;
  width: 150px;
  margin-top: ${({ index }) => {
    if (index === 0) {
      return "20px";
    }
  }};
`;
