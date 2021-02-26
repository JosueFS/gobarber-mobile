import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Header = styled.View`
  padding: 8px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Container = styled.View`
  flex-grow: 1;
  position: relative;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 50 : 0}px;
`;
export const UserAvatarButton = styled.TouchableOpacity`
  padding: 8px 24px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
