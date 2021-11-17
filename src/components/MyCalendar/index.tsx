import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Calendar,
  DateCallbackHandler,
  LocaleConfig,
} from 'react-native-calendars';
import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

function MyCalendar({ markedDates, onDayPress }: CalendarProps) {
  return (
    <Calendar
      renderArrow={direction => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { MyCalendar, MarkedDateProps };
