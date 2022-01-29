import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';

// Tive problemas pra executar o npm start e achei a solução nesse link do stackoverflow, por isso, tive que alterar o package.json.
// https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os
class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
