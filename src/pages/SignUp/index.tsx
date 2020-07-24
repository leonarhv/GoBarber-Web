import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>

        <Input
          name="name"
          type="text"
          placeholder="Nome"
          icon={FiUser}
          id="name"
        />

        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          id="email"
        />

        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
          id="password"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
