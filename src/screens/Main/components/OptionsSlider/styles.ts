import styled from "styled-components/native";

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

export const OptionsCount = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.text};
`;

export const OptionsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const OptionsImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 90px;
  width: 150px;
`;
