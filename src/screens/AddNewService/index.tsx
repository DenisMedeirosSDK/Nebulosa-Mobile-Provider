import React, { useState } from 'react';
import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';
import { InputIcon } from '../../components/Inputs/InputIcon';
import { api } from '../../services/api';

import { Container, Content } from './styles';

export function AddNewService() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [available, setAvailable] = useState(true);

  async function handleAddNewService() {
    try {
      await api.post('/services', {
        name,
        description,
        price,
        duration,
        categoryId,
        available,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <HeaderSmall title="Criar novo serviço" />
      <Content>
        <InputIcon
          iconName="file-text"
          placeholder="Nome do serviço"
          value={name}
          onChangeText={setName}
        />
        <InputIcon
          iconName="info"
          placeholder="Descrição do serviço"
          value={description}
          onChangeText={setDescription}
        />
        <InputIcon
          iconName="tag"
          placeholder="Categoria"
          value={categoryId}
          onChangeText={setCategoryId}
        />
        <InputIcon
          iconName="dollar-sign"
          placeholder="Preço"
          value={price}
          onChangeText={setPrice}
        />
        <InputIcon
          iconName="clock"
          placeholder="Duração"
          value={duration}
          onChangeText={setDuration}
        />
        <ButtonLarge title="Confirmar" onPress={handleAddNewService} />
      </Content>
    </Container>
  );
}
