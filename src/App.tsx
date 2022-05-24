import React from 'react';
import Colors from './components/Colors/Colors';
import Filter from './components/Filter/Filter';
import FormAdd from './components/FormAdd/FormAdd';


export interface MyColor {
  name: string;
}

const App = () => {
  const colors = () => {
    let defaultColors: MyColor[] = [
      {
        name: '#FF0000'
      },
      {
        name: '#00FF00'
      },
      {
        name: '#0000FF'
      }
    ];

    let allColors = defaultColors;

    let savedColors = window.localStorage.getItem('myColors');

    let customColors: MyColor[] = [];
    if (savedColors != null) {
      customColors = JSON.parse(savedColors);
      allColors = [...customColors];
    }

    return allColors;
  }


  return (
    <main>
      <FormAdd colors={colors()}/>
      <Filter />
      <Colors colors={colors()}/>
    </main>
  );
};

export default App;
