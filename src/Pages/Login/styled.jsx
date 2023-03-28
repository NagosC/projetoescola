import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Container = styled.section`
  max-width: 480px;
  background: #ffffff;
  margin: 100px auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Paragrafo = styled.p`
  font-size: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  small {
    display: flex;
    width: px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
`;

export const Face = styled.span`
  background: #0934c2;
  padding: 5px;
  border-radius: 20px;
  width: 20px 40px;
  height: 40px;

  a {
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: white;
  }
`;

export const Google = styled.span`
  background: #ffffff;
  padding: 5px;
  border-radius: 20px;
  width: 20px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 40px;

  a {
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #000000;
    height: 40px;
  }
`;

export const Apple = styled.span`
  padding: 5px;
  background: #000000;
  border-radius: 20px;
  width: 20px 40px;
  height: 40px;

  a {
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: white;
  }
`;

export const Botoes = styled.div`
  display: grid;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  grid-template-columns: 300px;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const Inp1 = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px ${primaryColor};
`;

export const Button = styled.button`
  border-radius: 20px;
  margin: 20px;
  margin-left: 160px;
  background: ${primaryColor};
`;

export const LoginManual = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
