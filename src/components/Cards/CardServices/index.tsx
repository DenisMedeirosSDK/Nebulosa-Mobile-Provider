import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ServiceDTO } from '../../../dtos/ServiceDTO';
import { convertSecondInMinute } from '../../../utils/convertTimes';

import {
  Container,
  Content,
  ImageContainer,
  Photo,
  Infos,
  Name,
  Service,
  Footer,
  Duration,
  Divider,
  Price,
} from './styles';

interface ServicesDTO {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  duration: number;
  categoryId: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: string;
    avatarURL: string;
  };
}

interface Props extends RectButtonProps {
  data: ServicesDTO;
}

export function CardServices({ data, ...rest }: Props) {
  const durationFormatted = convertSecondInMinute(data.duration);

  return (
    <Container {...rest}>
      <Content>
        <ImageContainer>
          <Photo
            source={{
              uri: data.user.avatarURL,
            }}
          />
        </ImageContainer>
        <Infos>
          <Name>{data.user.name}</Name>
          <Service>{data.name}</Service>
          <Footer>
            <Price>R$ {data.price}</Price>
            <Divider>-</Divider>
            <Duration>{durationFormatted} min</Duration>
          </Footer>
        </Infos>
      </Content>
    </Container>
  );
}
