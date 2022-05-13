import styled from "styled-components/native";
import Bottom from "../../assets/bottom.svg";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: white;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 50px;
  width: 180px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.brown};
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 5.2%;
  z-index: 10;
  flex-direction: row;
`;

export const AddButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  margin-left: 15px;
`;

export const BottomBar = styled(Bottom)`
  position: absolute;
  bottom: -5%;
`;
