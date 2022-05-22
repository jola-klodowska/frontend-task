import React from 'react';
import Colors from './components/Colors/Colors';
import Filter from './components/Filter/Filter';
import FormAdd from './components/FormAdd/FormAdd';

const App = () => {
  return (
    <main>
      <FormAdd />
      <Filter />
      <Colors />
    </main>
  );
};

export default App;
