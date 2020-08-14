import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />

    <Title>Faça seu logon</Title>

    <Input
      name="email"
      icon="mail"
      placeholderTextColor="#666360"
      placeholder="E-mail"
    />
    <Input
      name="password"
      icon="lock"
      placeholderTextColor="#666360"
      placeholder="Senha"
    />

    <Button
      onPress={() => {
        console.log('Pressed!');
      }}
    >
      Entrar
    </Button>
  </Container>
);

export default SignIn;
