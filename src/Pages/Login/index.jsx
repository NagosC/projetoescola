import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import {
  Title,
  Face,
  Container,
  Botoes,
  Apple,
  Google,
  Inp1,
  Button,
  LoginManual,
} from './styled';

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <Botoes>
        <Face>
          <a href="asas" className="btn-social btn-face">
            <FaFacebookSquare
              size={20}
              style={{
                position: 'relative',
                top: '4px',
                right: '5px',
              }}
            />{' '}
            Entre com o Facebook
          </a>
        </Face>
        <Google>
          <a href="asas" className="btn-social btn-face">
            <FcGoogle
              size={20}
              style={{
                position: 'relative',
                top: '4px',
                right: '13px',
              }}
            />{' '}
            Entre com o Google
          </a>
        </Google>
        <Apple>
          <a href="asas" className="btn-social btn-face">
            <AiFillApple
              size={22}
              style={{
                position: 'relative',
                top: '4px',
                right: '20px',
              }}
            />{' '}
            Entre com Apple
          </a>
        </Apple>
      </Botoes>
      <LoginManual>
        <Inp1 type="text" className="inpt inpt-email" placeholder="Email" />
        <Inp1 type="text" className="inpt inpt-senha" placeholder="Senha" />
      </LoginManual>
      <Button type="submit" className="btn-login">
        {' '}
        Login
      </Button>
    </Container>
  );
}
