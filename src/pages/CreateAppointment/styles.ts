import { FlatList, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { IProvider } from '../Dashboard';

interface IProviderContainerProps {
  selected: boolean;
}

interface IDayProps {
  state: '' | 'selected' | 'disabled' | 'today';
  selected: boolean;
}

interface IDayTextProps {
  state: '' | 'selected' | 'disabled' | 'today';
  selected: boolean;
}

interface IAvailabilityProps {
  available: boolean;
  selected: boolean;
}

interface IAvailabilityTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  line-height: 28px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProviderListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<IProvider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<IProviderContainerProps>`
  background: ${props => (props.selected ? '#FF9900' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<IProviderContainerProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
`;

export const Calendar = styled.View``;

export const Day = styled(RectButton)<IDayProps>`
  width: 40px;
  height: 40px;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  background-color: ${props => (props.selected ? '#FF9900' : '#3e3b47')};
`;

export const DayText = styled.Text<IDayProps>`
  font-size: 16px;
  text-align: center;
  font-family: 'RobotoSlab-Regular';
  line-height: 40px;
  color: ${props => {
    if (props.state === 'disabled') {
      return '#666360';
    }
    if (props.selected) {
      return '#232129';
    }
    return '#f4efe8';
  }};
`;
export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: #ff9900;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;
export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<IAvailabilityProps>`
  padding: 12px;
  background: ${props => (props.selected ? '#ff9900' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${props => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<IAvailabilityTextProps>`
  font-size: 16px;
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  background: #ff9900;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #232129;
`;
