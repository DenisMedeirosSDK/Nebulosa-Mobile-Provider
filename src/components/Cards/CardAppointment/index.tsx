import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { AppointmentDTO } from '../../../dtos/AppointmentDTO';
import {
  convertISOToDate,
  convertSecondInMinute,
} from '../../../utils/convertTimes';

import {
  Container,
  Content,
  ImageContainer,
  Photo,
  Infos,
  Name,
  ServiceInfo,
  Service,
  Duration,
  AppointmentInfo,
  Footer,
  Price,
  Status,
  Appointment,
} from './styles';

interface Props extends RectButtonProps {
  data: AppointmentDTO;
}

export function CardAppointment({ data, ...rest }: Props) {
  const navigation = useNavigation();

  function handleOpenAppointmentDetails(id: string) {
    navigation.navigate('AppointmentDetails', {
      data,
    });
  }

  const appointmentDate = data.date;
  const serviceDuration = data.service.duration;
  const servicePrice = Number(data.service.price);

  const servicePriceFormatted = servicePrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const appointmentDateFormatted = convertISOToDate(appointmentDate);
  const serviceDurationFormatted = convertSecondInMinute(
    serviceDuration as number
  );

  return (
    <Container {...rest} onPress={() => handleOpenAppointmentDetails(data.id)}>
      <Content>
        <ImageContainer>
          <Photo source={{ uri: data.provider?.avatarURL }} />
        </ImageContainer>
        <Infos>
          <Name>{data.provider?.name}</Name>
          <ServiceInfo>
            <Service>{data.service.name}</Service>
            <Duration>{serviceDurationFormatted} min</Duration>
          </ServiceInfo>
          <AppointmentInfo>
            <Appointment>{appointmentDateFormatted}</Appointment>
          </AppointmentInfo>
          <Footer>
            <Price>{servicePriceFormatted}</Price>
            <Status>{data.status}</Status>
          </Footer>
        </Infos>
      </Content>
    </Container>
  );
}
