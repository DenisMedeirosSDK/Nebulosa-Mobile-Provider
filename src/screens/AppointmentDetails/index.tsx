import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import {
  convertISOToDate,
  convertSecondInMinute,
} from '../../utils/convertTimes';
import { AppointmentDTO } from '../../dtos/AppointmentDTO';

import {
  Container,
  Content,
  ServiceInfos,
  AppointmentLabel,
  Appointment,
  ProviderName,
  Service,
  WrapperInfo,
  WrapperTime,
  DurationLabel,
  Duration,
  WrapperPrice,
  PriceLabel,
  Price,
  DescriptionLabel,
  Description,
  Footer,
} from './styles';

interface Params {
  data: AppointmentDTO;
}

export function AppointmentDetails() {
  const routes = useRoute();
  const theme = useTheme();

  const { data } = routes.params as Params;

  const [appointment, setAppointment] = useState<AppointmentDTO>();

  function handleCancelAppointment(id: string) {
    console.log('handleCancelAppointment');
  }

  useEffect(() => {
    async function loadAppointDetails() {
      const appointmentDate = data.date;
      const serviceDuration = Number(data.service?.duration);
      const servicePrice = Number(data.service?.price);

      const servicePriceFormatted = servicePrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      const appointmentDateFormatted = convertISOToDate(appointmentDate);
      const serviceDurationFormatted = convertSecondInMinute(serviceDuration);

      setAppointment({
        id: data.id,
        date: appointmentDateFormatted,
        status: data.status,
        service: {
          id: data.service.id,
          name: data.service.name,
          description: data.service.description,
          price: servicePriceFormatted,
          available: data.service.available,
          duration: serviceDurationFormatted,
          categoryId: data.service.categoryId,
          userId: data.service.userId,
        },
        provider: {
          name: data.provider?.name,
          email: data.provider?.email,
          avatarURL: data.provider?.avatarURL,
        },
      });
    }
    loadAppointDetails();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSmall title="Detalhes da agenda" />
      <Content>
        <ServiceInfos>
          <AppointmentLabel>Agendado para o dia:</AppointmentLabel>
          <Appointment>{appointment?.date}</Appointment>
          <ProviderName>{appointment?.provider?.name}</ProviderName>
          <Service>{appointment?.service.name}</Service>
          <WrapperInfo>
            <WrapperTime>
              <DurationLabel>Duração</DurationLabel>
              <Duration>{appointment?.service.duration} min</Duration>
            </WrapperTime>
            <WrapperPrice>
              <PriceLabel>Preço</PriceLabel>
              <Price>{appointment?.service.price}</Price>
            </WrapperPrice>
          </WrapperInfo>
          <DescriptionLabel>Descrição</DescriptionLabel>
          <Description>{appointment?.service.description}</Description>
        </ServiceInfos>
      </Content>
      <Footer>
        <ButtonLarge
          title="Cancelar serviço"
          onPress={() => handleCancelAppointment(appointment?.id as string)}
          color={theme.colors.problem}
        />
      </Footer>
    </Container>
  );
}
