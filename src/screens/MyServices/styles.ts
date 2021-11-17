import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background_light};
  padding: 20px;
`;
