import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const TextArea = styled.View`
  flex: 1;
  align-items: center;
  height: 75px;
`;

export const Title = styled(Animated.Text)`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const SubTitle = styled(Animated.Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
