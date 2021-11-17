import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { api } from '../../services/api';

import { CardMyServices } from '../../components/Cards/CardMyServices';
import { HeaderSimpleSmall } from '../../components/Headers/HeaderSimpleSmall';

import { Container, Content } from './styles';
import { useFocusEffect } from '@react-navigation/native';

interface IMyServices {
  id: string;
  name: string;
  category: { name: string };
  price: string;
  duration: number;
}

export function MyServices() {
  const [myServices, setMyServices] = useState<IMyServices[]>([]);
  async function loadMyServices() {
    try {
      const response = await api.get<IMyServices[]>('services/my');

      setMyServices(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadMyServices();
  }, [myServices]);

  useFocusEffect(() => {
    loadMyServices();
  });

  return (
    <Container>
      <HeaderSimpleSmall title="Meus Serviços" />
      <Content>
        <FlatList
          data={myServices}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardMyServices data={item} />}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
