import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TextInput from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const CustomTextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
