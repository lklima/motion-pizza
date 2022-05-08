import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const AdddButton = styled(Animated.View)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 45px;
  z-index: 999;
`;

export const RemoveButton = styled(Animated.View)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 45px;
  z-index: 999;
`;
