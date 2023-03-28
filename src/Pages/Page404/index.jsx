import React from 'react';
import erro from '../../images/erroimg.png';
import { Diverr } from './styled';

export default function Page404() {
  return (
    <Diverr>
      <img src={erro} alt="aaa" />
      <h1>Essa Página não existe!</h1>
    </Diverr>
  );
}
