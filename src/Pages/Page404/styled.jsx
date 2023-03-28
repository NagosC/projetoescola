import styled from 'styled-components';

export const Diverr = styled.div`
  padding: 40px;
  img {
    width: 300px;
    padding: 5px;
    margin: auto;
    display: block;
    border-radius: 4px;
    animation: mexendo 2s infinite alternate;
  }

  h1 {
    font-family: 'Edu NSW ACT Foundation', fantasy;
    margin-top: 60px;
    font-size: 60px;
    color: #944040;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
  }

  @keyframes mexendo {
    from {
      width: 300px;
    }

    to {
      width: 280px;
    }
  }
`;
