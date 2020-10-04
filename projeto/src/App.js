import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PeopleTable from './components/PeopleTable';
import './app.css';

//Componentes
//Props => Propriedades
//Estados - Imutabilidade / Mutabilidade

function App() {
  return (
    <>
      <Header />
      <PeopleTable />
      <Footer text="Meu Rodapé Estilizado..." />
    </>
  );
}
export default App;
