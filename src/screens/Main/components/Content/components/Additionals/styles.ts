import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: 150px;
  height: 180px;
  justify-content: center;
  z-index: 9999;
`;

export const Pic = styled(Animated.Image)`
  height: 60px;
  width: 60px;
  position: absolute;
`;
