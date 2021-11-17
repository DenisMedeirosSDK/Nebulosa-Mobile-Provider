import React, { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import { api } from '../../services/api';

import { Container, Content, Footer, Title } from './styles';
import { Platform } from 'react-native';

interface Params {
  id: string;
}

export function NewAppointment() {
  const routes = useRoute();
  const { id } = routes.params as Params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date' || 'time');
  const [show, setShow] = useState(false);

  const [appointmentTime, setAppointmentTime] = useState('');

  const DateFormated = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const appointmentDate = `${DateFormated}T${appointmentTime}`;
  console.log(appointmentDate);

  const data = {
    date: appointmentDate,
    serviceId: id,
  };

  function handleShowTimePicker() {
    setMode('time');
    setShow(true);

    const timeDate = new Date(date);
    const formatedTime = `${timeDate.toLocaleTimeString()}`;

    setAppointmentTime(formatedTime);
  }

  // function handleShowDatePicker() {
  //   setMode('calendar');
  //   setShow(true);
  //   setDate(value);
  // }

  function handleToggleShowDatePicker() {
    setShow(!show);
  }

  const handleShowDatePicker = useCallback(
    (event: any, date: Date | undefined) => {
      if (date) {
        setDate(date);
      }

      const getDate = date?.getUTCDate();

      setShow(false);
      console.log('AAA', getDate);
    },
    []
  );

  async function handleCreateNewAppointment() {
    await api.post('appointments', data);
  }

  return (
    <Container>
      <HeaderSmall title="Agendar um horário" />
      <Content>
        <Title>Escolha um horário</Title>
        <ButtonLarge
          title="Escolha um horário"
          onPress={handleShowTimePicker}
        />

        <Title>Escolha uma data</Title>
        <ButtonLarge
          title="Escolha uma data"
          onPress={handleToggleShowDatePicker}
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="calendar"
            onChange={handleShowDatePicker}
          />
        )}
      </Content>
      <Footer>
        <ButtonLarge
          title="Confirmar agendamento"
          onPress={handleCreateNewAppointment}
        />
      </Footer>
    </Container>
  );
}

// import React, { useState } from 'react';
// import { useRoute } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
// import { HeaderSmall } from '../../components/Headers/HeaderSmall';

// import { api } from '../../services/api';

// import { Container, Content, Footer, Title } from './styles';
// import { Platform } from 'react-native';

// interface Params {
//   id: string;
// }

// export function NewAppointment() {
//   const routes = useRoute();
//   const { id } = routes.params as Params;

//   // const [date, setDate] = useState(new Date());
//   // const [mode, setMode] = useState('date' || 'time');
//   // const [show, setShow] = useState(false);

//   // const [appointmentTime, setAppointmentTime] = useState('');

//   // const DateFormated = `${date.getFullYear()}-${
//   //   date.getMonth() + 1
//   // }-${date.getDate()}`;

//   // const appointmentDate = `${DateFormated}T${appointmentTime}`;
//   // console.log(appointmentDate);

//   // const data = {
//   //   date: appointmentDate,
//   //   serviceId: id,
//   // };

//   async function handleCreateNewAppointment() {
//     await api.post('appointments', data);
//   }

//   // function handleChange(event, selectedDate) {
//   //   const currentDate = selectedDate || date;
//   //   setShow(Platform.OS === 'ios');
//   //   setDate(currentDate);
//   // }

//   // function handleShowTimePicker() {
//   //   setMode('time');
//   //   setShow(true);

//   //   const timeDate = new Date(date);
//   //   const formatedTime = `${timeDate.toLocaleTimeString()}`;

//   //   setAppointmentTime(formatedTime);
//   // }

//   // function handleShowDatePicker() {
//   //   setMode('calendar');
//   //   setShow(true);
//   // }

//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//     console.log(currentDate);
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <Container>
//       <HeaderSmall title="Agendar um horário" />
//       <Content>
//         <Title>Escolha um horário</Title>
//         <ButtonLarge title="Escolha um horário" onPress={showTimepicker} />

//         <Title>Escolha uma data</Title>
//         <ButtonLarge title="Escolha uma data" onPress={showDatepicker} />

//         {show && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode={mode}
//             is24Hour={true}
//             display="default"
//             onChange={onChange}
//           />
//         )}
//       </Content>
//       <Footer>
//         <ButtonLarge
//           title="Confirmar agendamento"
//           onPress={handleCreateNewAppointment}
//         />
//       </Footer>
//     </Container>
//   );
// }
