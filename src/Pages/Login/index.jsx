import React from 'react';

import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/examples/actions';

export default function Login() {
  const dispacth = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispacth(actions.clicaBotaoRequest());
  };

  return (
    <Container>
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
