import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.buttonReducer.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />{' '}
      </Link>

      <Link to="/Login">
        {' '}
        <FaUserAlt size={20} />
      </Link>

      <Link to="asaas">
        {' '}
        <FaSignInAlt size={20} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
}
