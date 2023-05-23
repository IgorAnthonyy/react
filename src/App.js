import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './Rodape/index.js';

function App() {

  const times = [
    {
      nome: 'Goleiro',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Lateral',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Zagueiro',
      corPrimaria: '#a6d157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Volante',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Meio-campo',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Atacante',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Técnicos',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}
       aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
       />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      /> )}
      <Rodape />
    </div>
  );
}

export default App;
