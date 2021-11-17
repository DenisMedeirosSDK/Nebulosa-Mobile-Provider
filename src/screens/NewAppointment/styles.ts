import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Footer = styled.View`
  padding: 20px;
`;
