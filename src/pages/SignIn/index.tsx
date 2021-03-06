import React, { useState } from 'react';
import InputDefault from '../../components/InputDefault';
import Logo from '../../assets/logo.png';
import { Container } from './styles';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [name, setName] = useState('');

  return (
    <Container>
      <div>
        <div id="logo">
          <img src={Logo} alt="logo hubees" />
          <h1>Hubees</h1>
        </div>
        <h2>Bem Vindo!</h2>
        <div>
          <InputDefault
            placeholder="Seu nome*"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button style={{ marginTop: 16 }} onClick={() => signIn(name)}>
            Entrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
