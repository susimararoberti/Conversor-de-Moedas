import { useEffect, useState } from 'react';
import API from '../../api';
import currencies from '../../currencies/currencies';
import { Main, FormStyled, Title } from './styles';

const Home = () => {
  const codes = Object.keys(currencies);
  const names = Object.values(currencies);

  const [change, setChange] = useState<string | undefined>();

  useEffect(() => {
    
  }, [change]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orValue = (event.currentTarget.elements.namedItem("originValue") as HTMLInputElement).value;
    const orCur = (event.currentTarget.elements.namedItem("originCurrency") as HTMLSelectElement).value;
    const destCur = (event.currentTarget.elements.namedItem("destinationCurrency") as HTMLSelectElement).value;
  
    const response = await API.get(`${orCur}/${destCur}.json`);
    if (response.data) {
      setChange((response.data[destCur] * parseFloat(orValue)).toLocaleString('pt-BR', {style: 'currency', currency: destCur}))
    }
  }

  return (
    <Main>
      <Title>
        <h1>Bem vindo ao <h2>FastCoverter</h2></h1>
      <h3>Fazemos a conversão entre mais de 200 moedas do mundo!</h3>
      </Title>
      <FormStyled onSubmit={handleSubmit}>
        <p>Entre com o valor</p>
        <input type='number' name='originValue' step='0.01' placeholder='Ex: 250,90'/>
        <p>Selecione a moeda origem</p>
        <select name='originCurrency'>
          {codes.map((code) => {
            return (
              <option
                key={code}
                value={code}
                selected={code === 'brl' ? true : false}
              >
                {names[codes.indexOf(code)]}
              </option>
            );
          })}
        </select>
        <p>Selecione a moeda destino</p>
        <select name='destinationCurrency'>
          {codes.map((code) => {
            return (
              <option
                key={code}
                value={code}
                selected={code === 'usd' ? true : false}
              >
                {names[codes.indexOf(code)]}
              </option>
            );
          })}
        </select>
        <button>Converter</button>
        {change && <span>Valor convertido: {change}</span>}
      </FormStyled>
    </Main>
  );
};

export default Home;

