import React from 'react';
import { convertSecondInMinute } from '../../../utils/convertTimes';

import {
  Container,
  WrapperName,
  Title,
  Category,
  WrapperInfo,
  Price,
  Duration,
} from './styles';

interface IMyServices {
  name: string;
  category: { name: string };
  price: string;
  duration: number;
}

interface IResponse {
  data: IMyServices;
}

export function CardMyServices({ data }: IResponse) {
  const serviceDuration = data.duration;
  const durationFormatted = convertSecondInMinute(serviceDuration as number);

  const servicePrice = Number(data.price);
  const servicePriceFormatted = servicePrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <WrapperName>
        <Title>{data.name}</Title>
        <Category>{data.category.name}</Category>
      </WrapperName>
      <WrapperInfo>
        <Price>{servicePriceFormatted}</Price>
        <Duration>{durationFormatted} min</Duration>
      </WrapperInfo>
    </Container>
  );
}
