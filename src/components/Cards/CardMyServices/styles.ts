import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_semi};
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

export const WrapperName = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.background_dark};
`;

export const Category = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_semi};
`;

export const WrapperInfo = styled.View``;

export const Price = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Duration = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.primary};
`;
