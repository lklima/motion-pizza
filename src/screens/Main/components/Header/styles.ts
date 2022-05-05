import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const TextArea = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
