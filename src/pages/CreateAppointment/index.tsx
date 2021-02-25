import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Calendar as DateTimePicker,
  LocaleConfig,
} from 'react-native-calendars';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';

import { Platform, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  Content,
  ProviderListContainer,
  ProvidersList,
  ProviderAvatar,
  ProviderName,
  ProviderContainer,
  Calendar,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  SectionTitle,
  HourText,
  Hour,
  SectionContent,
  Section,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface IRouteParams {
  providerId: string;
}

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

interface IAvailabilityItem {
  hour: number;
  available: boolean;
  hourString: string;
}

const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { goBack } = useNavigation();

  const { providerId } = route.params as IRouteParams;

  const [providers, setProviders] = useState<IProvider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(providerId);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [selectedHour, setSelectedHour] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [availability, setAvailability] = useState<IAvailabilityItem[]>([]);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`providers/${selectedProvider}/day-availability`, {
        params: {
          year: new Date(selectedDate).getFullYear(),
          month: new Date(selectedDate).getMonth() + 1,
          day: new Date(selectedDate).getDate(),
        },
      })
      .then(response => {
        setAvailability(response.data);
      });
  }, [selectedDate, selectedProvider]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectProvider = useCallback(provider_id => {
    setSelectedProvider(provider_id);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChange = useCallback((date: string | undefined) => {
    if (Platform.OS === 'android') setShowDatePicker(false);

    if (date) {
      setSelectedHour(0);
      setSelectedDate(date);
    }
  }, []);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  const morningAvailability = useMemo(
    () =>
      availability
        .filter(({ hour }) => hour < 12)
        .map(({ hour, available }) => ({
          hour,
          available,
          hourString: format(new Date().setHours(hour), 'HH:00'),
        })),
    [availability],
  );

  const afternoonAvailability = useMemo(
    () =>
      availability
        .filter(({ hour }) => hour >= 12)
        .map(({ hour, available }) => ({
          hour,
          available,
          hourString: format(new Date().setHours(hour), 'HH:00'),
        })),
    [availability],
  );

  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    dayNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  };

  LocaleConfig.defaultLocale = 'pt-br';

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>

      <Content>
        <ProviderListContainer>
          <ProvidersList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={providers}
            keyExtractor={provider => provider.id}
            renderItem={({ item: provider }) => (
              <ProviderContainer
                selected={provider.id === selectedProvider}
                onPress={() => handleSelectProvider(provider.id)}
              >
                <ProviderAvatar source={{ uri: provider.avatar_url }} />
                <ProviderName selected={provider.id === selectedProvider}>
                  {provider.name}
                </ProviderName>
              </ProviderContainer>
            )}
          />
        </ProviderListContainer>

        <Calendar>
          <Title>Escolha a data</Title>

          <OpenDatePickerButton onPress={handleToggleDatePicker}>
            <OpenDatePickerButtonText>Selecionar Data</OpenDatePickerButtonText>
          </OpenDatePickerButton>

          {/* {showDatePicker && (
          <DateTimePicker
            {...(Platform.OS === 'ios' && { textColor: '#f4ede8' })}
            mode="date"
            display={Platform.OS === 'android' ? 'calendar' : 'spinner'}
            value={selectedDate}
            onChange={handleDateChange}
          />
        )} */}

          {showDatePicker && (
            <DateTimePicker
              key="@!#!@#!@#!@#"
              minDate={new Date()}
              onDayPress={day => handleDateChange(day.dateString)}
              hideExtraDays
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: '#ff9900',
                },
              }}
              style={{
                margin: 24,
                borderRadius: 10,
              }}
              theme={{
                backgroundColor: '#28262e',
                calendarBackground: '#28262e',
                textDayHeaderFontSize: 16,

                'stylesheet.calendar.header': {
                  header: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#3e3b47',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    margin: 0,
                    paddingTop: 6,
                    paddingBottom: 6,
                  },
                  monthText: {
                    fontSize: 16,
                    fontFamily: 'RobotoSlab-Medium',
                    color: '#f4ede8',
                  },
                  dayHeader: {
                    marginTop: 2,
                    marginBottom: 7,
                    width: 40,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'RobotoSlab-Regular',
                    color: '#f4ede8',
                  },
                },
                'stylesheet.calendar.main': {
                  container: {
                    padding: 0,
                    backgroundColor: '#28262e',
                  },
                  monthView: {
                    paddingTop: 6,
                    paddingBottom: 6,
                    margin: 0,
                  },
                  week: {
                    marginTop: 5,
                    marginBottom: 7,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  },
                },
              }}
              dayComponent={({ date, state }) =>
                state !== 'disabled' ? (
                  <TouchableOpacity
                    onPress={() => handleDateChange(date.dateString)}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 4,
                      backgroundColor:
                        date.dateString === selectedDate
                          ? '#FF9900'
                          : '#3e3b47',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'RobotoSlab-Regular',
                        lineHeight: 40,
                        color:
                          date.dateString === selectedDate ? '#000' : '#f4ede8',
                      }}
                    >
                      {date.day}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 4,
                      backgroundColor:
                        date.dateString === selectedDate
                          ? '#FF9900'
                          : '#3e3b47',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'RobotoSlab-Regular',
                        lineHeight: 40,
                        color: '#666360',
                      }}
                    >
                      {date.day}
                    </Text>
                  </View>
                )
              }
              renderArrow={direction => {
                if (direction === 'left') {
                  return <Icon name="arrow-left" color="#999591" size={24} />;
                }
                return <Icon name="arrow-right" color="#999591" size={24} />;
              }}
            />
          )}
        </Calendar>

        <Schedule>
          <Title>Escolha o horário</Title>

          <Section>
            <SectionTitle>Manhã</SectionTitle>

            <SectionContent>
              {morningAvailability.map(({ hour, hourString, available }) => (
                <Hour
                  enabled={available}
                  key={hourString}
                  selected={selectedHour === hour}
                  available={available}
                  onPress={() => handleSelectHour(hour)}
                >
                  <HourText selected={selectedHour === hour}>
                    {hourString}
                  </HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>

            <SectionContent>
              {afternoonAvailability.map(({ hour, hourString, available }) => (
                <Hour
                  enabled={available}
                  key={hourString}
                  selected={selectedHour === hour}
                  available={available}
                  onPress={() => handleSelectHour(hour)}
                >
                  <HourText selected={selectedHour === hour}>
                    {hourString}
                  </HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>
        </Schedule>
      </Content>
    </Container>
  );
};

export default CreateAppointment;
